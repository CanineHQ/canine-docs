# Remote K3s VPS

For a lightweight, single-node Kubernetes setup on a VPS (Hetzner, DigitalOcean Droplet, Linode, etc.).

## Prerequisites

- A VPS running Ubuntu 20.04+ or Debian 11+
- SSH access to the server
- At least 2GB RAM (4GB recommended)

## Install K3s on the VPS

SSH into your server and run:

```bash
curl -sfL https://get.k3s.io | sh -s - --disable traefik
```

Wait for the installation to complete, then retrieve the kubeconfig:

```bash
sudo cat /etc/rancher/k3s/k3s.yaml
```

## Modify the Kubeconfig

The kubeconfig will have `server: https://127.0.0.1:6443`. You need to replace `127.0.0.1` with your server's public IP address:

```yaml
# Change this:
server: https://127.0.0.1:6443

# To this (replace with your server IP):
server: https://<your-server-ip>:6443
```

## Connect to Canine

1. Navigate to **Clusters → + New Cluster**
2. Give your cluster a name and select **Single VPS Installation** or **Existing Cluster**
3. Paste the modified kubeconfig
4. Create the cluster

Canine will install the necessary dependencies (ingress controller, cert-manager, etc.) to your cluster.
