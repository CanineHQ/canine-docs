# Builds

View and manage your project builds.

## List Builds

View all builds across your account:

```bash
k9 builds list
```

Output:
```
| ID | COMMIT_SHA | COMMIT_MESSAGE        | PROJECT_ID | PROJECT_SLUG |
|----|------------|-----------------------|------------|--------------|
| 42 | abc1234    | Add new feature       | 1          | my-app       |
| 41 | def5678    | Fix bug in login      | 1          | my-app       |
| 40 | ghi9012    | Update dependencies   | 2          | api-service  |
```

### Filter by Project

List builds for a specific project:

```bash
k9 builds list <PROJECT_ID>
```

Example:
```bash
k9 builds list 1
```

This shows only builds for project ID 1.

## Kill a Build

Stop a running build:

```bash
k9 builds kill <BUILD_ID>
```

Example:
```bash
k9 builds kill 42
```

This immediately terminates the build process. Use this when you need to cancel a build that's in progress.

## Deployment Workflow

A typical deployment workflow using the CLI:

1. **Trigger a deployment**
   ```bash
   k9 projects deploy --name my-app
   ```

2. **Monitor the build**
   ```bash
   k9 builds list 1
   ```

3. **Cancel if needed**
   ```bash
   k9 builds kill 42
   ```

4. **Verify processes are running**
   ```bash
   k9 projects processes --project my-app
   ```
