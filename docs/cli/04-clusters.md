# Clusters

Manage and access your Kubernetes clusters.

## List Clusters

View all clusters in your account:

```bash
canine clusters list
```

Output:
```
| ID | NAME           | CLUSTER_TYPE | STATUS  | CREATED_AT          | UPDATED_AT          |
|----|----------------|--------------|---------|---------------------|---------------------|
| 1  | production     | K8s          | Running | 2024-01-15 10:30:00 | 2024-01-15 10:45:00 |
| 2  | staging        | K3s          | Running | 2024-02-20 14:00:00 | 2024-02-20 14:15:00 |
```

### Cluster Types

| Type | Description |
|------|-------------|
| `K8s` | Full Kubernetes cluster |
| `K3s` | Lightweight K3s cluster |

### Cluster Status Values

| Status | Description |
|--------|-------------|
| `Initializing` | Cluster is being created |
| `Installing` | Cluster components are being installed |
| `Running` | Cluster is healthy and operational |
| `Failed` | Cluster encountered an error |
| `Destroying` | Cluster is being deleted |

## Download Kubeconfig

Download the kubeconfig file for direct `kubectl` access to a cluster:

```bash
canine clusters download-kubeconfig --cluster <CLUSTER_ID>
```

The kubeconfig is saved to `~/.canine/kubeconfig.yaml`.

### Example

```bash
canine clusters download-kubeconfig --cluster 1
```

Output:
```
Saved kubeconfig to /Users/you/.canine/kubeconfig.yaml
```

### Using the Kubeconfig

Set the `KUBECONFIG` environment variable to use the downloaded config:

```bash
export KUBECONFIG=~/.canine/kubeconfig.yaml
kubectl get pods --all-namespaces
```

Or specify it per-command:

```bash
kubectl --kubeconfig ~/.canine/kubeconfig.yaml get pods
```

:::tip
The `canine projects run` command automatically downloads and uses the correct kubeconfig for you.
:::
