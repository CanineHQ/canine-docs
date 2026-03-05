---
id: api-reference-index
title: API Reference
sidebar_label: Overview
sidebar_position: 0
---

# API Reference

Canine provides a REST API for programmatic access to your deployment platform. The API enables you to integrate Canine into CI/CD pipelines, build custom tooling, or automate deployment workflows.

## Base URL

```
https://<your-canine-host>/api/v1
```

## Authentication

All API requests must include an API token in the `X-API-Key` header:

```bash
curl -H "X-API-Key: YOUR_API_TOKEN" \
  https://canine.sh/api/v1/projects
```

### Creating an API Token

1. Navigate to **Settings > API Tokens** in the Canine dashboard
2. Click **+ New API Token**
3. Give your token a descriptive name
4. Copy the token immediately - it cannot be viewed again

### Multi-Account Access

If your user belongs to multiple accounts, specify the account with the `X-Account-Id` header:

```bash
curl -H "X-API-Key: YOUR_API_TOKEN" \
  -H "X-Account-Id: your-account-slug" \
  https://canine.sh/api/v1/projects
```

If omitted, the API defaults to your first account.

## Endpoints

### Me

#### Get Current User

```
GET /api/v1/me
```

Returns information about the authenticated user.

---

### Projects

#### List Projects

```
GET /api/v1/projects
```

Returns all projects accessible to the authenticated user (up to 50).

#### Get Project

```
GET /api/v1/projects/:id
```

Returns detailed information about a specific project.

#### Deploy Project

```
POST /api/v1/projects/:id/deploy
```

Triggers a new deployment for the project. Builds a new image from the latest commit and deploys it.

| Parameter | Type | Description |
|-----------|------|-------------|
| `skip_build` | boolean | Skip build and deploy with the last successful image |

**Response:**
```json
{
  "message": "Deploying project example-app.",
  "build_id": 42
}
```

#### Restart Project

```
POST /api/v1/projects/:id/restart
```

Performs a rolling restart of all services in the project.

---

### Processes

#### List Processes

```
GET /api/v1/projects/:project_id/processes
```

Returns all running pods for a project.

#### Get Process

```
GET /api/v1/projects/:project_id/processes/:id
```

Returns details about a specific pod.

#### Create Process

```
POST /api/v1/projects/:project_id/processes
```

Creates a one-off pod for running tasks (migrations, console sessions, etc.).

#### Delete Process

```
DELETE /api/v1/projects/:project_id/processes/:id
```

Terminates a running pod.

---

### Builds

#### List Builds

```
GET /api/v1/builds
```

Returns in-progress builds and builds from the last 24 hours.

| Parameter | Type | Description |
|-----------|------|-------------|
| `project_id` | string | Filter builds by project name |

#### Get Build

```
GET /api/v1/builds/:id
```

Returns details about a specific build, including status and logs.

#### Kill Build

```
PATCH /api/v1/builds/:id/kill
```

Cancels an in-progress build.

---

### Clusters

#### List Clusters

```
GET /api/v1/clusters
```

Returns all clusters accessible to the authenticated user.

#### Download Kubeconfig

```
GET /api/v1/clusters/:id/download_kubeconfig
```

Returns the kubeconfig for a cluster as JSON.

**Response:**
```json
{
  "kubeconfig": "apiVersion: v1\nkind: Config\n..."
}
```

---

### Add-Ons

#### List Add-Ons

```
GET /api/v1/add_ons
```

Returns all add-ons accessible to the authenticated user.

#### Get Add-On

```
GET /api/v1/add_ons/:id
```

Returns details about a specific add-on.

#### Restart Add-On

```
POST /api/v1/add_ons/:id/restart
```

Restarts all pods for an add-on.

## Error Responses

The API returns standard HTTP status codes:

| Status | Description |
|--------|-------------|
| `200` | Success |
| `401` | Missing or invalid API token |
| `403` | Not authorized to access the resource |
| `404` | Resource not found |
| `422` | Request failed (e.g., deployment error) |

Error responses include a JSON body:

```json
{
  "error": "Description of the error"
}
```

## OpenAPI Specification

A full OpenAPI 3.0 specification is available at:

```
GET /swagger
```

You can use this with tools like Swagger UI to explore the API interactively.
