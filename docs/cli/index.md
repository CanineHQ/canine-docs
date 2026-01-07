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

### Linux / Manual Install

Download the latest release from [GitHub Releases](https://github.com/CanineHQ/cli/releases) and extract to your PATH.

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
| `canine auth` | Manage authentication and accounts |
| `canine projects` | Manage projects (list, deploy, run, processes) |
| `canine clusters` | Manage clusters and kubeconfig |
| `canine builds` | View and manage builds |
| `canine accounts` | Switch between accounts |

See the individual command pages for detailed usage.
