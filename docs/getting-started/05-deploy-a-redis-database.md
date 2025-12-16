# Deploy a Redis database

Navigate to **Add Ons → + New Add On** give your add on a name and select **Redis.** Then click **Create Add On**

<figure><img src="/img/quickstart/add-ons-1.png" alt=""/><figcaption></figcaption></figure>

Once the Redis instance is created, copy the **Connection URL**

<div align="left"><figure><img src="/img/quickstart/add-ons-2.png" alt=""/><figcaption></figcaption></figure></div>

Navigate back to **Projects** **→ Whiteboarder → Environment** and set the `REDIS_URL` environment variable to the connection URL you just copied and click **Save.**

<div align="left"><figure><img src="/img/quickstart/add-ons-3.png" alt=""/><figcaption></figcaption></figure></div>

Then redeploy the application.

:::info
Make sure to redeploy the application after any settings changes. This is how Canine knows to apply the changes to your underlying Kubernetes cluster (we never apply any changes to your cluster without a deployment)
:::
