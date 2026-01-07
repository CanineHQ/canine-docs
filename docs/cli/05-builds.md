# Builds

View and manage your project builds.

## List Builds

View all builds across your account:

```bash
canine builds list
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
canine builds list <PROJECT>
```

Example:
```bash
canine builds list my-app
```

This shows only builds for the `my-app` project.

## Kill a Build

Stop a running build:

```bash
canine builds kill <BUILD_ID>
```

Example:
```bash
canine builds kill 42
```

This immediately terminates the build process. Use this when you need to cancel a build that's in progress.

## Deployment Workflow

A typical deployment workflow using the CLI:

1. **Trigger a deployment**
   ```bash
   canine projects deploy --project my-app
   ```

2. **Monitor the build**
   ```bash
   canine builds list my-app
   ```

3. **Cancel if needed**
   ```bash
   canine builds kill 42
   ```

4. **Verify processes are running**
   ```bash
   canine projects processes --project my-app
   ```
