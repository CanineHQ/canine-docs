# Authentication

The Canine CLI uses API tokens for authentication. Tokens are stored locally in `~/.k9/canine.yaml`.

## Login

Authenticate with your API token:

```bash
k9 auth login --token <YOUR_API_TOKEN>
```

You can obtain an API token from the Canine dashboard under Account Settings.

### Options

| Option | Description |
|--------|-------------|
| `--token <TOKEN>` | Your API token (required) |
| `--host <HOST>` | Custom API host (default: `https://canine.sh`) |
| `--account <ACCOUNT>` | Account slug to use |

### Example

```bash
k9 auth login --token abc123xyz
```

Output:
```
Logged in as user@example.com
```

## Check Status

View your current authentication status:

```bash
k9 auth status
```

Output:
```
Currently logged in as: user@example.com
Current account: my-team

Available accounts:
| ID | SLUG     |
|----|----------|
| 1  | personal |
| 2  | my-team  |
```

## Logout

Clear your stored credentials:

```bash
k9 auth logout
```

This removes the `~/.k9/canine.yaml` configuration file.

## Multi-Account Support

If you have access to multiple accounts (teams or organizations), you can switch between them.

### View Available Accounts

```bash
k9 auth status
```

### Switch Account

```bash
k9 accounts change-account <ACCOUNT_SLUG>
```

Example:
```bash
k9 accounts change-account my-team
```

After switching, all subsequent commands will operate on the selected account.

## Credential Storage

Credentials are stored in `~/.k9/canine.yaml`:

```yaml
host: https://canine.sh
token: your-api-token
account: my-team
```

:::warning Security
Keep your API token secure. Do not share it or commit it to version control.
:::
