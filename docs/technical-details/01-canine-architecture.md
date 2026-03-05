---
description: Learn about how Canine works under the hood
---

# Canine Architecture

Canine connects to any Kubernetes backend and follows best practices for deploying web applications and services.

<figure><img src="/img/architecture.jpg" alt=""/><figcaption></figcaption></figure>

## How It Works

Canine acts as a control plane that sits between your source code and your Kubernetes clusters. It handles the full lifecycle of building, deploying, and managing applications without requiring you to write Kubernetes manifests or Helm charts.

### Core Workflow

1. **Connect a cluster** - Provide a kubeconfig to connect any Kubernetes cluster (managed or self-hosted K3s)
2. **Link a repository** - Connect your GitHub, GitLab, or Bitbucket repository
3. **Define services** - Configure web services, background workers, and cron jobs
4. **Deploy** - Canine builds your Docker image, pushes it to a registry, and generates Kubernetes manifests

### System Components

#### Web Application

The Canine web application is built with Rails 7 and provides the primary interface for managing deployments. It uses Hotwire (Turbo + Stimulus) for real-time UI updates, so changes to deployments, builds, and pod status are reflected immediately without page reloads.

#### Background Workers

Long-running operations run asynchronously using GoodJob:

- **Build jobs** - Clone repositories, build Docker images, push to registries
- **Deploy jobs** - Generate Kubernetes manifests, apply them to clusters
- **Webhook jobs** - Process incoming Git webhooks for automatic deployments
- **Metrics jobs** - Collect CPU, memory, and storage metrics from clusters

#### Kubernetes Integration

Canine communicates with Kubernetes clusters via the Kubernetes API using the cluster's kubeconfig. It manages:

- **Deployments** - Application workloads with rolling update strategies
- **Services** - Internal networking and load balancing
- **Ingresses** - External HTTP routing with automatic TLS via cert-manager
- **ConfigMaps and Secrets** - Environment variable management
- **PersistentVolumeClaims** - Storage for stateful applications
- **CronJobs** - Scheduled task execution

#### Cluster Packages

When connecting a new cluster, Canine can install essential system packages:

- **nginx-ingress** - HTTP ingress controller
- **cert-manager** - Automatic TLS certificate provisioning via Let's Encrypt
- **metrics-server** - Resource usage metrics collection
- **telepresence** - Private network tunneling for preview access
- **cloudflared** - Cloudflare tunnel integration

#### Build System

Canine supports multiple build strategies:

- **Dockerfile builds** - Standard Docker image builds
- **Buildpack builds** - Cloud Native Buildpacks (Paketo, Heroku, etc.)
- **Build Clouds** - Kubernetes-native image building directly on your cluster, eliminating the need for an external CI system

### Authentication and Multi-Tenancy

Canine uses an account-based multi-tenancy model:

- **Accounts** contain clusters, projects, teams, and users
- **Teams** control access to specific clusters and projects
- **SSO** is supported via LDAP, OIDC, and SAML for enterprise authentication
- **API tokens** enable programmatic access for CI/CD integration

### External Integrations

- **Git providers** - GitHub, GitLab, and Bitbucket for repository access and webhooks
- **Container registries** - Docker Hub, GitHub Container Registry, GitLab Container Registry
- **DNS providers** - Cloudflare for automatic DNS record management
- **Notification providers** - Slack, Discord, Microsoft Teams, and Google Chat for deployment notifications
- **MCP server** - Model Context Protocol support for AI assistant integration
