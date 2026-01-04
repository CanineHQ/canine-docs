# Projects

Manage your Canine projects from the command line.

## List Projects

View all projects in your account:

```bash
canine projects list
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
canine projects deploy --project <PROJECT>
```

### Options

| Option | Description |
|--------|-------------|
| `--project <PROJECT>` | Project name (required) |
| `--skip-build` | Skip the build step and deploy existing image |

### Examples

Deploy with a new build:
```bash
canine projects deploy --project my-app
```

Deploy without rebuilding:
```bash
canine projects deploy --project my-app --skip-build
```

Output:
```
Build started
View deployment: https://canine.sh/projects/my-app/deployments/abc123
```

## Run Commands

Run any command in your project's environment:

```bash
canine projects run --project <PROJECT> <COMMAND>
```

This command:
1. Downloads the kubeconfig for your project's cluster
2. Creates an ephemeral pod with your project's environment
3. Executes the specified command

### Examples

Open an interactive shell:
```bash
canine projects run --project my-app /bin/sh
```

Open a Rails console:
```bash
canine projects run --project my-app bundle exec rails c
```

Open a Django shell:
```bash
canine projects run --project my-app python manage.py shell
```

Output:
```
Starting a one off container in: my-app...
Created one off pod: my-app-oneoff-abc123
Waiting for pod to be ready... |
```

The ephemeral pod is cleaned up automatically when the command exits.

### Prerequisites

The run command requires `kubectl` to be installed on your machine. See [Installation](./installation#kubectl-required-for-run-command) for details.

## List Processes

View running pods/processes for a project:

```bash
canine projects processes --project <PROJECT>
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
