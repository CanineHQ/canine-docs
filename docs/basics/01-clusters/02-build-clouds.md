# Build Clouds

Build Clouds enable Kubernetes-native image building directly on your cluster. Instead of relying on external CI systems to build Docker images, Build Clouds run the build process inside your cluster.

## Overview

A Build Cloud installs a build driver into a dedicated namespace on your cluster. When you deploy a project, the build is executed on the cluster itself, eliminating the need for external Docker build infrastructure.

## Setting Up a Build Cloud

1. Navigate to **Clusters > Your Cluster > Build Cloud**
2. Click **Install Build Cloud**
3. Configure resource allocation:

| Setting | Default | Description |
|---------|---------|-------------|
| **Replicas** | 2 | Number of build worker pods |
| **CPU Request** | 500m | Minimum CPU per build worker |
| **CPU Limit** | 2000m | Maximum CPU per build worker |
| **Memory Request** | 512Mi | Minimum memory per build worker |
| **Memory Limit** | 4Gi | Maximum memory per build worker |

4. Click **Install** to deploy the build infrastructure

The Build Cloud is installed in the `canine-k8s-builder` namespace by default.

## Status

| Status | Description |
|--------|-------------|
| **Pending** | Installation has been requested |
| **Installing** | The build driver is being deployed |
| **Active** | The Build Cloud is ready to accept builds |
| **Failed** | Installation encountered an error |
| **Updating** | Configuration changes are being applied |

## Using a Build Cloud

Once a Build Cloud is active on a cluster, projects on that cluster can use it for builds. The build process:

1. Clones your repository
2. Builds the Docker image using your Dockerfile or buildpack
3. Pushes the image to your configured container registry
4. Triggers the deployment

## Resource Considerations

Build processes can be resource-intensive. When configuring your Build Cloud:

- Allocate enough CPU and memory for your largest build
- Consider the number of concurrent builds you expect (adjust replicas accordingly)
- Monitor cluster resources to ensure builds don't starve your application workloads
