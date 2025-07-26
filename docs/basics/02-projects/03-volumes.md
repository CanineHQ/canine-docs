# Volumes

<div class="alert alert-danger">
Volumes are only supported for single node based deployments, due to how volumes are attached.
</div>

Volumes are a way to save state directly on your cluster. Normally for cloud applications, you tend to save state to dedicated services (files to S3, data to databases), rather than saving it directly to a filesystem. This makes it easier to scale to multiple nodes that all may need to share that state.

However, volumes are supported as long as you use a single node.