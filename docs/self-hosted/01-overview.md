# Self-Hosted Overview

Canine can be self-hosted in two modes:

| Mode | Description | Best for |
|------|-------------|----------|
| **Local** | Runs via Docker Compose on your machine | Evaluation, air-gapped environments, small teams |
| **Cluster** | Runs as a pod inside your Kubernetes cluster | Production self-hosted deployments |

Both modes share the same features as the cloud version, with a few differences:

- **Sign-up is disabled** — the first admin user is created during onboarding, and no further registrations are allowed.
- **SSL is not enforced** — you're expected to handle TLS termination yourself (e.g., via a reverse proxy or ingress controller).
- **Builds** — local mode uses Docker for builds, while cluster mode uses in-cluster Kubernetes jobs.

## Quick Install (Local Mode)

```bash
curl -sSL https://raw.githubusercontent.com/czhu12/canine/refs/heads/main/install/install.sh | bash
```

Or using the CLI:

```bash
canine local start
```

See [Local Mode](./02-local-mode.md) for full details.

## Cluster Mode

Deploy Canine directly into your Kubernetes cluster using Helm:

```bash
helm repo add canine https://caninehq.github.io/charts
helm repo update

helm install canine canine/canine \
  --namespace canine \
  --create-namespace \
  --set ingress.enabled=true \
  --set ingress.hostname=canine.yourdomain.com \
  --set canine.acmeEmail=you@yourdomain.com  # Used to register your SSL certificate with Let's Encrypt
```

See [Cluster Mode](./03-cluster-mode.md) for full details.
