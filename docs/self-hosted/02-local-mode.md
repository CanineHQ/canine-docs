# Local Mode

Run Canine on your local machine using Docker Compose. This is the fastest way to get started with a self-hosted instance.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) with the Compose plugin (`docker compose`)

## Installation

### Option 1: Install Script

```bash
curl -sSL https://raw.githubusercontent.com/czhu12/canine/refs/heads/main/install/install.sh | bash
```

This will:
1. Clone the Canine repository to `~/.canine/src`
2. Detect your Docker socket
3. Generate a `SECRET_KEY_BASE`
4. Start all services via Docker Compose

### Option 2: Canine CLI

```bash
canine local start
```

See the [CLI local command docs](/docs/cli/08-local.md) for more options.

## Onboarding

Once Canine is running, navigate to `http://localhost:3456` (or your custom port). You'll see the onboarding screen where you create your admin account.

[TODO: screenshot of local mode onboarding screen]

After onboarding completes:
- **Sign-up is disabled** — no one else can register via the sign-up page.
- Additional users can be invited by the admin through the team management UI.

## Managing the Instance

| Command | Description |
|---------|-------------|
| `canine local start` | Start services |
| `canine local stop` | Stop services |
| `canine local status` | Check service status |
| `canine local upgrade` | Pull latest images |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BOOT_MODE` | `local` | Set automatically by the Docker Compose file |
| `SECRET_KEY_BASE` | (generated) | Rails secret key |
| `PORT` | `3456` | Port Canine listens on |
| `LOCAL_MODE_PASSWORDLESS` | `false` | Enable passwordless login (for trusted networks only) |

## File Locations

| Path | Purpose |
|------|---------|
| `~/.canine/src/docker-compose.yml` | Docker Compose configuration |
| `~/.canine/src/.env` | Environment variables |
