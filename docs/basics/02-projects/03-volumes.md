# Volumes

:::danger
Volumes are only supported for single node based deployments, due to how volumes are attached.
:::

Applications in Canine run within containers that delete all filesystem changes on each restart. 

Normally for cloud applications, you tend to save state to dedicated services (files to S3, data to databases), rather than saving it directly to a filesystem. This makes it easier to scale to multiple nodes that all may need to share that state.

However, an alternative way to save state is with a **volume**. Volumes are supported as long as you use a single node (multiple pods is fine, but ensure you're using a single node!).

You can create Volumes by navigating to **Projects → Your Project → Settings → Create Volume**.

Specify where the volume will be mounted within your pods, the name of the volume, and the size of the volume. Redeploy the application, and the volume should be present. You can check by creating a one-off pod and `cd /mount/path` to confirm. Any files saved there will not be destroyed upon redeployment.