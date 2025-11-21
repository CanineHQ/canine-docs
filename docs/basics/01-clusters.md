# Clusters

Clusters connect and manage your Kubernetes instance. There are two types of clusters supported in Canine:
* Multi-node Kubernetes cluster
* Single node cluster

Both options expose a Kubernetes cluster that Canine manages, but the technical architecture is quite different.


# Multi-node cluster
A standard Kubernetes cluster is composed of a [**control plane** and **worker plane**](https://kubernetes.io/docs/concepts/overview/components/). In a standard managed Kubernetes setup provided by Digital Ocean, Linode, AWS, GCP, etc, the control plane is managed, thereby offloading the complexities of managing the uptime of a Kubernetes cluster to the cloud provider.

# Single node cluster
Often, you'll want to find the cheapest hosting providers (Hetzner is a common choice), who do not provide a managed Kubernetes offering. In that case, you can still get all the benefits of Canine, but you'll have to install a K3s instance. This is recommended to be used in staging, or low traffic environments.

Canine gives you the one line installation command to get everything set up.
