# Services

Services represent the running processes for your application. A project can have multiple services, each handling a different responsibility.

## Service Types

| Type | Description | Has Port | Scheduled |
|------|-------------|----------|-----------|
| **[Web Service](./01-web-services.md)** | Handles HTTP requests | Yes | No |
| **[Background Worker](./02-background-workers.md)** | Processes async jobs | No | No |
| **[Cron Job](./03-cron-jobs.md)** | Runs on a schedule | No | Yes |

Most web applications will have at least a `web` service with a port, and optionally a `worker` service for background processing.

## Creating a Service

1. Navigate to **Project > Services**
2. Click **+ New Service**
3. Choose the service type and configure:

| Setting | Description |
|---------|-------------|
| **Name** | Unique name within the project (lowercase, numbers, hyphens) |
| **Command** | The command to run (e.g., `bundle exec rails s`, `celery worker`) |
| **Replicas** | Number of pod instances to run |
| **Container Port** | Port the application listens on (web services only) |
| **Health Check URL** | Endpoint for health monitoring (web services only) |

## Resource Constraints

Each service can have CPU, memory, and GPU limits configured. Navigate to the service and click **Resource Constraints** to set:

- **CPU Request / Limit** - Minimum and maximum CPU in millicores
- **Memory Request / Limit** - Minimum and maximum memory
- **GPU Request** - Number of GPU devices

Setting resource constraints helps Kubernetes schedule pods efficiently and prevents any single service from consuming excessive cluster resources.

## Service Status

| Status | Description |
|--------|-------------|
| **Pending** | Service has been created but not yet deployed |
| **Healthy** | All pods are running and passing health checks |
| **Unhealthy** | One or more pods are failing health checks |
| **Updated** | Configuration has changed, awaiting redeployment |
