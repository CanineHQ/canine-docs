# Local K3s

For local development or testing, you can run K3s on your local machine using Docker.

## Prerequisites

- Docker installed and running
- At least 4GB of available RAM

## Install K3s with K3d

[K3d](https://k3d.io) is a lightweight wrapper to run K3s in Docker.

```bash
# Install k3d
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash

# Create a cluster
k3d cluster create canine-local --api-port 6550 -p "80:80@loadbalancer" -p "443:443@loadbalancer"

# Get the kubeconfig
k3d kubeconfig get canine-local
```

## Upload Kubeconfig to Canine

1. Navigate to **Clusters → + New Cluster**
2. Give your cluster a name
3. Upload your Kubeconfig file to Canine.
<figure><img src="/img/install/upload-kubeconfig.png" alt=""/><figcaption></figcaption></figure>

Canine will install the necessary dependencies to your cluster.
