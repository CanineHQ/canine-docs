# Notifiers

Notifiers send deployment notifications to your team's communication channels. Get alerted when deployments start, succeed, or fail without having to watch the Canine dashboard.

## Supported Providers

| Provider | Webhook URL Pattern |
|----------|-------------------|
| **Slack** | `https://hooks.slack.com/services/...` |
| **Discord** | `https://discord.com/api/webhooks/...` |
| **Microsoft Teams** | `https://*.webhook.office.com/...` |
| **Google Chat** | `https://chat.googleapis.com/...` |

## Setting Up a Notifier

1. Navigate to your **Project**
2. Click **Notifiers** in the sidebar
3. Click **+ New Notifier**
4. Select the provider (Slack, Discord, Microsoft Teams, or Google Chat)
5. Enter a name and paste the webhook URL from your provider
6. Click **Create**

### Getting a Webhook URL

#### Slack

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and create a new app
2. Enable **Incoming Webhooks**
3. Click **Add New Webhook to Workspace** and select a channel
4. Copy the webhook URL

#### Discord

1. Open your Discord server settings
2. Go to **Integrations > Webhooks**
3. Click **New Webhook**, select a channel, and copy the URL

#### Microsoft Teams

1. In your Teams channel, click the **...** menu
2. Select **Connectors > Incoming Webhook**
3. Name the webhook and copy the URL

#### Google Chat

1. In your Google Chat space, click the space name
2. Select **Manage webhooks**
3. Create a new webhook and copy the URL

## Managing Notifiers

Each notifier can be individually enabled or disabled without deleting it. This is useful for temporarily silencing notifications during maintenance windows.

Notifiers are scoped per project, so each project can have its own set of notification channels.
