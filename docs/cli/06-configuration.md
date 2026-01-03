# Configuration

The Canine CLI stores its configuration in `~/.k9/`.

## Configuration Files

| File | Purpose |
|------|---------|
| `~/.k9/canine.yaml` | Authentication and account settings |
| `~/.k9/kubeconfig.yaml` | Kubernetes cluster credentials |

## canine.yaml

The main configuration file stores your authentication credentials:

```yaml
host: https://canine.sh
token: your-api-token
account: my-team
```

| Field | Description |
|-------|-------------|
| `host` | API endpoint (default: `https://canine.sh`) |
| `token` | Your API authentication token |
| `account` | Currently selected account slug |

This file is created automatically when you run `k9 auth login`.

## kubeconfig.yaml

This file stores Kubernetes cluster credentials downloaded via:
- `k9 clusters download-kubeconfig`
- `k9 projects shell` (downloads automatically)

The format follows the standard Kubernetes kubeconfig schema.

## Custom API Host

For self-hosted Canine installations, specify a custom host during login:

```bash
k9 auth login --token <TOKEN> --host https://canine.example.com
```

## Directory Structure

```
~/.k9/
├── canine.yaml       # Auth credentials
└── kubeconfig.yaml   # Cluster credentials
```

## Clearing Configuration

To remove all CLI configuration:

```bash
k9 auth logout
rm -rf ~/.k9
```

## Security Considerations

- The `canine.yaml` file contains your API token. Keep it secure.
- The `kubeconfig.yaml` file contains cluster credentials. Treat it as sensitive.
- Both files are stored with default file permissions. Consider restricting access:

```bash
chmod 600 ~/.k9/canine.yaml
chmod 600 ~/.k9/kubeconfig.yaml
```
