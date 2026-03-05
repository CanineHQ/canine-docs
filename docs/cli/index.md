# Canine CLI

The Canine CLI (`canine`) is a command-line tool for interacting with your Canine deployments directly from your terminal.

## Features

- **Authentication** - Secure API token-based authentication with multi-account support
- **Project Management** - List, deploy, and manage your projects
- **Run Commands** - Run any command in your project's environment
- **Cluster Access** - Download kubeconfig files for direct kubectl access
- **Build Management** - View build status and cancel running builds

## Quick Install

### macOS (Homebrew)

```bash
brew tap caninehq/canine
brew install canine
```

### Linux

```bash
curl -sSL https://raw.githubusercontent.com/CanineHQ/cli/main/install.sh | sh
```

## Getting Started

After installation, authenticate with your API token:

```bash
canine auth login --token <YOUR_API_TOKEN>
```

Verify you're logged in:

```bash
canine auth status
```

List your projects:

```bash
canine projects list
```

## Command Overview

| Command | Description |
|---------|-------------|
| `canine auth` | Manage authentication (login, logout, status) |
| `canine accounts` | Switch between accounts |
| `canine projects` | Manage projects (list, deploy, run, logs, processes) |
| `canine clusters` | Manage clusters (list, kubeconfig, connect) |
| `canine builds` | View and manage builds (list, kill) |
| `canine add-ons` | Manage add-ons (list, restart) |
| `canine local` | Run Canine locally with Docker Compose |

See the individual command pages for detailed usage.
