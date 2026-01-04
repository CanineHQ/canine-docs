# Add-Ons

Manage your Canine add-ons from the command line.

## List Add-Ons

View all add-ons in your account:

```bash
canine add-ons list
```

Output:
```
| NAME     | STATUS    | CLUSTER_ID | CLUSTER_NAME |
|----------|-----------|------------|--------------|
| postgres | Installed | 5          | production   |
| redis    | Installed | 5          | production   |
```

### Add-On Status Values

| Status | Description |
|--------|-------------|
| `Installing` | Add-on is being set up |
| `Installed` | Add-on is running |
| `Updating` | Add-on is being updated |
| `Uninstalling` | Add-on is being removed |
| `Uninstalled` | Add-on has been removed |
| `Failed` | Add-on encountered an error |

## Restart an Add-On

Restart a specific add-on:

```bash
canine add-ons restart --add-on <ADD_ON>
```

### Options

| Option | Description |
|--------|-------------|
| `--add-on <ADD_ON>` | Add-on name (required) |

### Example

```bash
canine add-ons restart --add-on postgres
```

This restarts the PostgreSQL add-on, which can be useful for applying configuration changes or recovering from issues.
