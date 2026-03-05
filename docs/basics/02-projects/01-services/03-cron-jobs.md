# Cron Jobs

Cron jobs run on a schedule and are managed by Kubernetes CronJobs. Canine uses the Kubernetes API to help you monitor the success and failure of scheduled tasks.

## Configuration

When creating a cron job service:

| Setting | Description | Example |
|---------|-------------|---------|
| **Name** | Identifier for the cron job | `cleanup`, `daily-report` |
| **Command** | The command to execute | `bundle exec rake cleanup:run` |
| **Schedule** | Cron expression for timing | `0 */6 * * *` |

The **Command** field is required for cron jobs - it defines what runs on each scheduled execution.

## Cron Schedule Format

Cron expressions follow the standard 5-field format:

```
┌───────────── minute (0-59)
│ ┌───────────── hour (0-23)
│ │ ┌───────────── day of month (1-31)
│ │ │ ┌───────────── month (1-12)
│ │ │ │ ┌───────────── day of week (0-6, Sunday=0)
│ │ │ │ │
* * * * *
```

### Examples

| Expression | Description |
|-----------|-------------|
| `* * * * *` | Every minute |
| `0 * * * *` | Every hour |
| `0 0 * * *` | Daily at midnight |
| `0 */6 * * *` | Every 6 hours |
| `0 9 * * 1-5` | Weekdays at 9 AM |
| `0 0 1 * *` | First day of every month |

## Monitoring

Kubernetes tracks the success and failure of each cron job execution. You can view the job history and logs from the Canine dashboard under the service's detail page.

Failed jobs are retained so you can inspect their logs and diagnose issues.
