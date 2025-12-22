# Managed Kubernetes

For production workloads, you can use a managed Kubernetes service from cloud providers like AWS (EKS), Google Cloud (GKE), DigitalOcean, Linode, or others.

## Prerequisites

- An account with your cloud provider
- `kubectl` installed locally
- Access to your cluster's kubeconfig

## Get Your Kubeconfig

Each Kubernetes provider has a different method to retrieve the kubeconfig. The easiest way is to just download it from the portal.

### DigitalOcean
#### Create a cluster by clicking on **Create → Kubernetes**.
<figure><img src="/img/install/digitalocean-create-button.webp" alt=""/><figcaption></figcaption></figure>

#### Download the Kubeconfig file from the UI

<figure><img src="/img/install/digitalocean-download-button.webp" alt=""/><figcaption></figcaption></figure>

### Linode
#### Create a cluster by clicking on **Kubernetes** on the sidebar.
<figure><img src="/img/install/linode-create-button.webp" alt=""/><figcaption></figcaption></figure>

#### Download the Kubeconfig file once the cluster is ready.
<figure><img src="/img/install/linode-download-button.webp" alt=""/><figcaption></figcaption></figure>


### AWS
To install for AWS, we recommend using Portainer to maintain a persistent cluster connection.

## Upload Kubeconfig to Canine

1. Navigate to **Clusters → + New Cluster**
2. Give your cluster a name
3. Upload your Kubeconfig file to Canine.
<figure><img src="/img/install/upload-kubeconfig.png" alt=""/><figcaption></figcaption></figure>

Canine will install the necessary dependencies to your cluster.
