# Set up a Kubernetes cluster

Kubernetes supports both managed Kubernetes, and single VPS instances's as options. In this tutorial, we will be using Hetzner.

### Create a server on Hetzner

For the purposes of this tutorial, I have a Ubuntu server created on Hetzner with the IP address **5.161.197.8.**

<figure><img src="/img/quickstart/hetzner.avif" alt=""/><figcaption></figcaption></figure>

### Create a Cluster

Navigate to **Clusters → + New Cluster.**

Give your cluster a name, and select **Single VPS Installation.**

In this case, our demo server is **5.161.197.8**. SSH into the server and run the commands shown on Canine, which will prepare the server for canine.

```bash
curl -sfL https://get.k3s.io | sh -s - --disable traefik
sudo cat /etc/rancher/k3s/k3s.yaml
# Copy the output and paste into Canine.
```

Create the cluster, and Canine will start installing dependencies to the cluster.
