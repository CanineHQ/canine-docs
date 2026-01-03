# Canine CLI

The Canine CLI (`k9` or `canine`) is a command-line tool for interacting with your Canine deployments directly from your terminal.

## Features

- **Authentication** - Secure API token-based authentication with multi-account support
- **Project Management** - List, deploy, and manage your projects
- **Interactive Shell** - Open a shell directly into your running containers
- **Cluster Access** - Download kubeconfig files for direct kubectl access
- **Build Management** - View build status and cancel running builds

## Quick Install

### macOS (Homebrew)

```bash
brew tap caninehq/canine
brew install canine
```

### Linux / Manual Install

Download the latest release from [GitHub Releases](https://github.com/caninehq/canine-cli/releases) and extract to your PATH.

## Getting Started

After installation, authenticate with your API token:

```bash
k9 auth login --token <YOUR_API_TOKEN>
```

Verify you're logged in:

```bash
k9 auth status
```

List your projects:

```bash
k9 projects list
```

## Command Overview

| Command | Description |
|---------|-------------|
| `k9 auth` | Manage authentication and accounts |
| `k9 projects` | Manage projects (list, deploy, shell, processes) |
| `k9 clusters` | Manage clusters and kubeconfig |
| `k9 builds` | View and manage builds |
| `k9 accounts` | Switch between accounts |

See the individual command pages for detailed usage.
