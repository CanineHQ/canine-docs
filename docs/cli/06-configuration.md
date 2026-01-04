# Configuration

The Canine CLI stores its configuration in `~/.canine/`.

## Configuration Files

| File | Purpose |
|------|---------|
| `~/.canine/canine.yaml` | Authentication and account settings |
| `~/.canine/kubeconfig.yaml` | Kubernetes cluster credentials |

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

This file is created automatically when you run `canine auth login`.

## kubeconfig.yaml

This file stores Kubernetes cluster credentials downloaded via:
- `canine clusters download-kubeconfig`
- `canine projects run` (downloads automatically)

The format follows the standard Kubernetes kubeconfig schema.

## Custom API Host

For self-hosted Canine installations, specify a custom host during login:

```bash
canine auth login --token <TOKEN> --host https://canine.example.com
```

## Directory Structure

```
~/.canine/
├── canine.yaml       # Auth credentials
└── kubeconfig.yaml   # Cluster credentials
```

## Clearing Configuration

To remove all CLI configuration:

```bash
canine auth logout
rm -rf ~/.canine
```

## Security Considerations

- The `canine.yaml` file contains your API token. Keep it secure.
- The `kubeconfig.yaml` file contains cluster credentials. Treat it as sensitive.
- Both files are stored with default file permissions. Consider restricting access:

```bash
chmod 600 ~/.canine/canine.yaml
chmod 600 ~/.canine/kubeconfig.yaml
```
