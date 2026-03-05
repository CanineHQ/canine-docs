# Clusters

Clusters connect and manage your Kubernetes instance. There are two types of clusters supported in Canine:
* Multi-node Kubernetes cluster
* Single node cluster

Both options expose a Kubernetes cluster that Canine manages, but the technical architecture is quite different.

## Multi-node cluster
A standard Kubernetes cluster is composed of a [**control plane** and **worker plane**](https://kubernetes.io/docs/concepts/overview/components/). In a standard managed Kubernetes setup provided by Digital Ocean, Linode, AWS, GCP, etc, the control plane is managed, thereby offloading the complexities of managing the uptime of a Kubernetes cluster to the cloud provider.

## Single node cluster
Often, you'll want to find the cheapest hosting providers (Hetzner is a common choice), who do not provide a managed Kubernetes offering. In that case, you can still get all the benefits of Canine, but you'll have to install a K3s instance. This is recommended to be used in staging, or low traffic environments.

Canine gives you the one line installation command to get everything set up.

## Adding a Cluster

1. Navigate to **Clusters** and click **+ New Cluster**
2. Choose your setup method:
   - **Managed Kubernetes** - Paste the kubeconfig from your cloud provider
   - **K3s (Single Node)** - Run the provided install script on your VPS
3. Give the cluster a name (lowercase, numbers, and hyphens only)
4. Canine will test the connection and install [default cluster packages](./01-cluster-packages.md)

## Cluster Features

### Metrics

Once the metrics-server package is installed, Canine displays CPU and memory usage for your cluster's nodes and namespaces. Navigate to **Clusters > Your Cluster > Metrics** to view resource utilization.

### Kubeconfig Download

You can download the kubeconfig for any cluster to use with `kubectl` directly. Go to **Clusters > Your Cluster** and click **Download Kubeconfig**.

### Connection Testing

If you're experiencing issues, click **Test Connection** to verify that Canine can still communicate with the Kubernetes API.

### TLS Verification

By default, Canine verifies TLS certificates when connecting to the Kubernetes API. For clusters with self-signed certificates, you can disable TLS verification in the cluster settings.

### Transfer Ownership

Cluster ownership can be transferred to a different account if needed. This moves all associated projects and add-ons to the target account.

## Related

- [Cluster Packages](./01-cluster-packages.md) - System components installed on clusters
- [Build Clouds](./02-build-clouds.md) - Kubernetes-native image building
