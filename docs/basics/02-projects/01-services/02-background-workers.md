# Background Workers

Background workers run long-lived processes that don't serve HTTP traffic. They're used for processing queued jobs, consuming messages, or running persistent background tasks.

## Common Use Cases

- **Job processors** - Sidekiq, Celery, Bull, or other queue workers
- **Message consumers** - Kafka or RabbitMQ consumers
- **Stream processors** - Real-time data processing pipelines

## Configuration

When creating a background worker service:

| Setting | Description | Example |
|---------|-------------|---------|
| **Name** | Identifier for the service | `worker`, `sidekiq`, `celery` |
| **Command** | The process command | `bundle exec sidekiq`, `celery -A app worker` |
| **Replicas** | Number of worker instances | `2` |

Background workers do **not** have a container port or public networking - they only process work from internal sources like job queues or message brokers.

## Connecting to a Queue

Background workers typically connect to a queue service (Redis, RabbitMQ, etc.) running as an [add-on](/docs/basics/add-ons). Use environment variables to configure the connection:

```
REDIS_URL=redis://my-redis-master.my-redis.svc.cluster.local:6379
```

## Scaling

Adjust the **Replicas** count to scale the number of worker pods. Each replica runs an independent instance of the worker command, increasing throughput for job processing.
