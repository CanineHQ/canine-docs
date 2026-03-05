# Local Development

Run a self-hosted Canine instance locally using Docker Compose. This is useful for evaluating Canine or running it in an air-gapped environment.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) with the Compose plugin (`docker compose`)

## Start

Start the local Canine environment:

```bash
canine local start
```

### Options

| Option | Description |
|--------|-------------|
| `--port <PORT>`, `-p <PORT>` | Port to run on (default: `3000`) |

### Example

```bash
canine local start --port 8080
```

This command:
1. Downloads the latest `docker-compose.yml` from the Canine repository
2. Generates a `SECRET_KEY_BASE` if one doesn't exist
3. Starts all services via `docker compose up -d`

Once started, open `http://localhost:3000` (or your custom port) in your browser.

## Status

Check the status of your local Canine services:

```bash
canine local status
```

Shows each service's name, state, health status, and published ports.

## Stop

Stop the local Canine environment:

```bash
canine local stop
```

This runs `docker compose down` to stop and remove all containers.

## Upgrade

Pull the latest Canine images:

```bash
canine local upgrade
```

After upgrading, run `canine local start` again to apply the new images.

## File Locations

The local environment stores its files in `~/.canine/src/`:

| File | Purpose |
|------|---------|
| `~/.canine/src/docker-compose.yml` | Docker Compose configuration |
| `~/.canine/src/.env` | Environment variables (includes `SECRET_KEY_BASE`) |
