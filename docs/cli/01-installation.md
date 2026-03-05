# Installation

## macOS (Homebrew)

The recommended way to install the Canine CLI on macOS is via Homebrew.

First, add the Canine tap:

```bash
brew tap caninehq/canine
```

Then install the CLI:

```bash
brew install canine
```

### Updating

```bash
brew upgrade canine
```

### Uninstalling

```bash
brew uninstall canine
brew untap caninehq/canine
```

## Linux

The quickest way to install on Linux is with the install script:

```bash
curl -sSL https://raw.githubusercontent.com/CanineHQ/cli/main/install.sh | sh
```

This automatically detects your architecture (x86_64 or ARM64) and installs the latest release to `/usr/local/bin`.

### Manual Install

Alternatively, download the binary directly from [GitHub Releases](https://github.com/CanineHQ/cli/releases):

```bash
# For x86_64
curl -sL https://github.com/CanineHQ/cli/releases/latest/download/canine-linux-amd64 -o canine
chmod +x canine
sudo mv canine /usr/local/bin/

# For ARM64
curl -sL https://github.com/CanineHQ/cli/releases/latest/download/canine-linux-arm64 -o canine
chmod +x canine
sudo mv canine /usr/local/bin/
```

## Verify Installation

Confirm the CLI is installed:

```bash
canine --version
```

## Prerequisites

### kubectl (Required for run command)

The `canine projects run` command requires `kubectl` to be installed. If you don't have it installed, the CLI will provide a link to the installation instructions.

Install kubectl: https://kubernetes.io/docs/tasks/tools/

## Platform Support

| Platform | Architecture | Status |
|----------|--------------|--------|
| macOS | Apple Silicon (ARM64) | Supported |
| macOS | Intel (x86_64) | Supported |
| Linux | x86_64 | Supported |
| Linux | ARM64 | Supported |
| Windows | - | Not supported |

## Next Steps

After installation, [authenticate with your API token](./02-authentication.md).
