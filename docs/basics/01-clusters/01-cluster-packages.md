# Cluster Packages

Cluster packages are essential system components that Canine installs on your Kubernetes cluster. They provide the infrastructure needed for ingress routing, TLS certificates, metrics, and private networking.

## Available Packages

| Package | Description |
|---------|-------------|
| **nginx-ingress** | HTTP ingress controller that routes external traffic to your services |
| **cert-manager** | Automatically provisions and renews TLS certificates from Let's Encrypt |
| **metrics-server** | Collects CPU and memory usage metrics from nodes and pods |
| **telepresence** | Enables private network tunneling for previewing applications before exposing them publicly |
| **cloudflared** | Cloudflare tunnel integration for secure, tunneled access to services |

## Managing Packages

Navigate to **Clusters > Your Cluster** to see the installed packages and their status.

### Installing

When you create a new cluster, Canine installs the default packages (nginx-ingress, cert-manager, and metrics-server) automatically. You can install additional packages from the cluster detail page.

### Status

| Status | Description |
|--------|-------------|
| **Pending** | Installation has been requested |
| **Installing** | The package is being deployed via Helm |
| **Installed** | The package is running |
| **Failed** | Installation encountered an error |
| **Uninstalling** | The package is being removed |

### Configuration

Some packages have configurable settings. Click on a package to view and modify its configuration options. After changing settings, the package will be reinstalled with the updated configuration.

### Syncing

Click **Sync Packages** to check for updates and ensure all default packages are installed. This is useful after upgrading Canine or if a package installation was interrupted.

## Package Details

### nginx-ingress

The ingress controller is required for exposing web services with custom domains. It creates a LoadBalancer service that provides the external IP address for your cluster.

### cert-manager

Required for automatic HTTPS. cert-manager watches for new Ingress resources and provisions TLS certificates from Let's Encrypt using HTTP-01 challenges.

### metrics-server

Enables the metrics dashboard in Canine, showing CPU and memory usage for nodes, pods, and namespaces. Also required for Kubernetes Horizontal Pod Autoscaling (HPA).

### telepresence

Enables the "Private Connection" feature in Canine, allowing you to preview services without exposing them publicly. Useful for development and staging environments.

### cloudflared

Integrates with Cloudflare Tunnels for exposing services through Cloudflare's network without opening inbound ports on your cluster.
