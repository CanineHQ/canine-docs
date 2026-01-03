# Projects

Manage your Canine projects from the command line.

## List Projects

View all projects in your account:

```bash
k9 projects list
```

Output:
```
| ID | CLUSTER_ID | NAME        | NAMESPACE      | REPOSITORY_URL                    | BRANCH | STATUS   |
|----|------------|-------------|----------------|-----------------------------------|--------|----------|
| 1  | 5          | my-app      | my-app-prod    | github.com/user/my-app            | main   | Deployed |
| 2  | 5          | api-service | api-service-ns | github.com/user/api-service       | main   | Deployed |
```

### Project Status Values

| Status | Description |
|--------|-------------|
| `Creating` | Project is being set up |
| `Deployed` | Project is running |
| `Destroying` | Project is being removed |

## Deploy a Project

Trigger a deployment for a project:

```bash
k9 projects deploy --name <PROJECT_NAME>
```

### Options

| Option | Description |
|--------|-------------|
| `--name <NAME>` | Project name (required) |
| `--skip-build` | Skip the build step and deploy existing image |

### Examples

Deploy with a new build:
```bash
k9 projects deploy --name my-app
```

Deploy without rebuilding:
```bash
k9 projects deploy --name my-app --skip-build
```

Output:
```
Message: Deployment started    Build ID: 42
```

## Interactive Shell

Open an interactive shell in your project's container:

```bash
k9 projects shell --project <PROJECT>
```

This command:
1. Downloads the kubeconfig for your project's cluster
2. Creates an ephemeral pod with your project's environment
3. Connects you to an interactive `/bin/sh` session

### Example

```bash
k9 projects shell --project my-app
```

Output:
```
Starting a one off container in: my-app...
Created one off pod: my-app-oneoff-abc123
Waiting for pod to be ready... |
# (interactive shell prompt)
```

Type `exit` to leave the shell. The ephemeral pod is cleaned up automatically.

### Prerequisites

The shell command requires `kubectl` to be installed on your machine. See [Installation](./installation#kubectl-required-for-shell-command) for details.

## List Processes

View running pods/processes for a project:

```bash
k9 projects processes --project <PROJECT>
```

Output:
```
| NAME                     | NAMESPACE | STATUS  |
|--------------------------|-----------|---------|
| my-app-web-abc123        | my-app-ns | Running |
| my-app-worker-def456     | my-app-ns | Running |
```

### Process Status Values

| Status | Description |
|--------|-------------|
| `Pending` | Pod is being scheduled |
| `Running` | Pod is running |
| `Succeeded` | Pod completed successfully |
| `Failed` | Pod failed |
| `Unknown` | Status cannot be determined |
