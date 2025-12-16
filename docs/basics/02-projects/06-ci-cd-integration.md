# CI/CD Integration

Canine supports deploying applications only when Continuous Integration (CI) checks pass by using deploy webhooks with API tokens. This allows you to maintain quality gates and ensure that broken code never reaches production.

## Overview

By default, Canine automatically deploys your application whenever you push to a connected GitHub branch. However, you may want to:

- Only deploy after CI/CD tests pass
- Integrate with GitHub Actions, GitLab CI, or other CI systems
- Control deployment timing from external systems
- Implement custom approval workflows

Deploy webhooks allow you to trigger deployments programmatically from your CI/CD pipeline.

## Setting up Deploy Webhooks

### Step 1: Create an API Token

First, you need to generate an API token to authenticate webhook requests:

1. Navigate to **Settings → API Tokens** in your Canine dashboard
2. Click **+ New API Token**
3. Give your token a descriptive name (e.g., "GitHub Actions Deploy Token")
4. Select the appropriate permissions (at minimum, you'll need `deploy:write` permissions)
5. Click **Create Token**
6. **Important**: Copy the token immediately - you won't be able to see it again

Store this token securely. You'll use it to authenticate deployment requests from your CI system.

### Step 2: Disable Automatic Deployments

To prevent Canine from automatically deploying on every push:

1. Go to **Projects → Your Project → Settings**
2. Under **GitHub Integration**, uncheck **Auto-deploy on push**
3. Save your changes

Now deployments will only occur when triggered via the webhook.

### Step 3: Get Your Deploy Webhook URL

Each project has a unique deploy webhook URL:

1. Navigate to **Projects → Your Project → Settings**
2. Find the **Deploy Webhook** section
3. Copy the webhook URL - it should look like:
   ```
   https://canine.example.com/api/v1/projects/{project_id}/deploy
   ```

## Triggering Deployments from CI

### GitHub Actions Example

Create a workflow file (e.g., `.github/workflows/deploy.yml`) in your repository:

```yaml
name: Deploy to Canine

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run tests
        run: |
          # Your test commands here
          npm install
          npm test

  deploy:
    needs: test  # Only runs if tests pass
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Canine deployment
        run: |
          curl -X POST \
            -H "Authorization: Bearer ${{ secrets.CANINE_API_TOKEN }}" \
            -H "Content-Type: application/json" \
            https://canine.example.com/api/v1/projects/YOUR_PROJECT_ID/deploy
```

**Setup Instructions:**
1. Go to your GitHub repository **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name it `CANINE_API_TOKEN` and paste your API token as the value
4. Update the webhook URL with your actual project ID
5. Commit and push the workflow file

### GitLab CI Example

Add this to your `.gitlab-ci.yml`:

```yaml
stages:
  - test
  - deploy

test:
  stage: test
  script:
    - npm install
    - npm test

deploy:
  stage: deploy
  only:
    - main
  script:
    - |
      curl -X POST \
        -H "Authorization: Bearer ${CANINE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        https://canine.example.com/api/v1/projects/YOUR_PROJECT_ID/deploy
```

**Setup Instructions:**
1. Go to **Settings → CI/CD → Variables** in your GitLab project
2. Add a variable named `CANINE_API_TOKEN` with your API token
3. Mark it as **Protected** and **Masked** for security
4. Update the webhook URL with your actual project ID

## Advanced Configuration

### Deploying Specific Branches or Commits

You can specify which branch or commit to deploy by adding parameters to your webhook request:

```bash
curl -X POST \
  -H "Authorization: Bearer ${CANINE_API_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"branch": "staging", "commit": "abc123"}' \
  https://canine.example.com/api/v1/projects/YOUR_PROJECT_ID/deploy
```

### Conditional Deployments

Deploy only when specific conditions are met:

**GitHub Actions:**
```yaml
- name: Deploy to production
  if: github.ref == 'refs/heads/main' && github.event_name == 'push'
  run: |
    curl -X POST \
      -H "Authorization: Bearer ${{ secrets.CANINE_API_TOKEN }}" \
      -H "Content-Type: application/json" \
      https://canine.example.com/api/v1/projects/PROD_PROJECT_ID/deploy

- name: Deploy to staging
  if: github.ref == 'refs/heads/develop'
  run: |
    curl -X POST \
      -H "Authorization: Bearer ${{ secrets.CANINE_API_TOKEN }}" \
      -H "Content-Type: application/json" \
      https://canine.example.com/api/v1/projects/STAGING_PROJECT_ID/deploy
```

**GitLab CI:**
```yaml
deploy-production:
  stage: deploy
  only:
    - main
  script:
    - curl -X POST -H "Authorization: Bearer ${CANINE_API_TOKEN}" -H "Content-Type: application/json" https://canine.example.com/api/v1/projects/PROD_PROJECT_ID/deploy

deploy-staging:
  stage: deploy
  only:
    - develop
  script:
    - curl -X POST -H "Authorization: Bearer ${CANINE_API_TOKEN}" -H "Content-Type: application/json" https://canine.example.com/api/v1/projects/STAGING_PROJECT_ID/deploy
```

### Notification on Deployment

Get notified when deployments complete:

```bash
# Trigger deployment and save response
response=$(curl -X POST \
  -H "Authorization: Bearer ${CANINE_API_TOKEN}" \
  -H "Content-Type: application/json" \
  https://canine.example.com/api/v1/projects/YOUR_PROJECT_ID/deploy)

deployment_id=$(echo $response | jq -r '.deployment_id')

# Send notification to Slack
curl -X POST -H 'Content-type: application/json' \
  --data "{\"text\":\"Deployment ${deployment_id} triggered for project\"}" \
  ${SLACK_WEBHOOK_URL}
```

## Security Best Practices

1. **Never commit API tokens to your repository** - Always use secret management features provided by your CI system
2. **Use separate tokens for different environments** - Create distinct tokens for staging and production
3. **Rotate tokens regularly** - Update your API tokens every 90 days
4. **Limit token permissions** - Only grant the minimum required permissions (e.g., `deploy:write` for the specific project)
5. **Monitor token usage** - Check your Canine audit logs for unexpected deployment activity

## Troubleshooting

### Deployment webhook returns 401 Unauthorized
- Verify your API token is correct and hasn't expired
- Check that the token has the required `deploy:write` permissions
- Ensure the `Authorization` header is properly formatted: `Bearer YOUR_TOKEN`

### Deployment webhook returns 404 Not Found
- Verify the project ID in the webhook URL is correct
- Ensure the project still exists and hasn't been deleted

### Deployments are still happening automatically
- Confirm that **Auto-deploy on push** is disabled in project settings
- Check that you saved the settings after making changes
- Note: Existing webhooks from GitHub may still be active; you can remove them in your GitHub repository settings under **Webhooks**

## Related Documentation

- [Projects](/docs/basics/projects)
- [Preview Apps](/docs/basics/projects/preview-apps) - Learn about automatic deployments for pull requests
- [Web Services](/docs/basics/projects/services/web-services)
