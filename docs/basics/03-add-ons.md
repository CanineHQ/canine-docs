# Add-Ons

Add-ons let you deploy third-party services to your Kubernetes cluster using Helm charts. Common use cases include databases, caching layers, monitoring tools, and other infrastructure components.

## Overview

Add-ons are Helm chart installations managed by Canine. They run alongside your projects on the same cluster, making it easy to set up databases like PostgreSQL or Redis, monitoring stacks, or any other service available as a Helm chart.

## Installing an Add-On

1. Navigate to **Add-Ons** in the sidebar
2. Click **+ New Add-On**
3. Search for a Helm chart from Artifact Hub or enter a custom chart URL
4. Select the target cluster and configure the chart version
5. Customize the Helm values (YAML) as needed
6. Click **Install**

Canine will deploy the Helm chart to your cluster in its own namespace.

## Managing Add-Ons

### Status

Add-ons can have the following statuses:

| Status | Description |
|--------|-------------|
| **Installing** | The Helm chart is being deployed |
| **Installed** | The add-on is running successfully |
| **Updating** | The add-on is being upgraded |
| **Failed** | The installation or update encountered an error |
| **Uninstalling** | The add-on is being removed |

### Configuration

You can modify an add-on's Helm values after installation:

1. Go to the add-on's detail page
2. Edit the **Values** section with your YAML configuration
3. Click **Save** to apply the changes

You can also download the current values as a YAML file for reference.

### Restarting

If an add-on needs to be restarted, click the **Restart** button on the add-on's detail page. This will perform a rolling restart of all pods.

### Viewing Processes

Click **Processes** on an add-on to see all running pods. From here you can:

- View pod status and resource usage
- Open a shell session into a running container
- Monitor pod health

### Connecting Add-Ons to Projects

Add-ons can be linked to projects so they appear together in the project view. To connect an add-on to a project:

1. Go to your project's settings
2. Under **Add-Ons**, select the add-ons you want to associate
3. Use the add-on's internal service DNS name in your project's environment variables

For example, a PostgreSQL add-on named `my-postgres` would be accessible at `my-postgres-postgresql.my-postgres.svc.cluster.local` within the cluster.

## Common Add-Ons

- **PostgreSQL** - Relational database
- **Redis** - In-memory cache and message broker
- **MongoDB** - Document database
- **Prometheus + Grafana** - Metrics and monitoring
- **Elasticsearch** - Search and analytics engine

See the [Resources](/docs/resources/add-ons/building-a-data-stack) section for step-by-step guides on deploying common add-on stacks.
