---
sidebar_position: 0
---

# MCP Server

Canine includes a built-in [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that allows AI assistants like Claude to interact with your Canine deployment platform. This enables you to manage projects, check build status, view logs, and trigger deployments through natural language conversations.

## Authentication

The MCP server uses OAuth 2.0 for authentication. Canine implements the following standards:

- **RFC 8414** - OAuth Authorization Server Metadata
- **RFC 7591** - Dynamic Client Registration
- **RFC 9728** - Protected Resource Metadata

The MCP endpoint is available at:
```
POST https://<your-canine-host>/mcp
```

Well-known discovery endpoints:
```
GET https://<your-canine-host>/.well-known/oauth-authorization-server
GET https://<your-canine-host>/.well-known/oauth-protected-resource
```

## Available Tools

### ListAccounts

List all accounts accessible to the current user, including their clusters, projects, and add-ons.

**Parameters:** None

**Use this first** to discover available accounts and their IDs before calling other tools.

### ListProjects

List all projects accessible to the current user.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | integer | No | Account ID (defaults to first account) |

### GetProjectDetails

Get detailed information about a project including services, domains, volumes, and current deployment manifests.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | Yes | The project ID |
| `account_id` | integer | No | Account ID (defaults to first account) |

### GetProjectLogs

Get logs from all services in a project, including pod events for diagnosing startup errors.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | Yes | The project ID |
| `tail_lines` | integer | No | Lines per pod (default: 100, max: 500) |
| `account_id` | integer | No | Account ID (defaults to first account) |

### CheckBuildStatus

Check the status of recent builds for a project, optionally including build logs.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | Yes | The project ID |
| `limit` | integer | No | Number of builds (default: 10, max: 50) |
| `include_logs` | boolean | No | Include build logs (default: true) |
| `account_id` | integer | No | Account ID (defaults to first account) |

### DeployProject

Deploy a project to its Kubernetes cluster.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | Yes | The project ID |
| `skip_build` | boolean | No | Skip build, deploy with last successful image |
| `account_id` | integer | No | Account ID (defaults to first account) |

### ListAddOns

List all add-ons (databases, caches, etc.) accessible to the current user.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | integer | No | Account ID (defaults to first account) |

### GetAddOnLogs

Get logs from all running pods for an add-on, including pod events.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `add_on_id` | integer | Yes | The add-on ID |
| `tail_lines` | integer | No | Lines per pod (default: 100, max: 500) |
| `account_id` | integer | No | Account ID (defaults to first account) |

## Resources

The MCP server also exposes resources that can be read directly:

| Resource URI | Description |
|-------------|-------------|
| `canine://projects` | List all accessible projects with status and metadata |
| `canine://projects/{project_id}/builds` | List recent builds for a specific project |

## Example Usage

When connected to an MCP-compatible AI assistant, you can use natural language:

- "List all my projects and their deployment status"
- "Show me the logs for the api-server project"
- "Deploy the frontend project"
- "Check if the latest build for my-app succeeded"
- "What add-ons are running on my cluster?"
