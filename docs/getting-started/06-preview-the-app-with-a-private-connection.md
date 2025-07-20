# Preview the app with a private connection

Okay great, so your app is deployed, but where is it? At the moment, the app is only accessible within your cluster, so there is no way for you to access it over public internet. So how can we view it?

### Introducing Telepresence

Telepresence is a tool that lets you make it seem as if your local machine is running within the cluster, allowing you to directly access private applications within the cluster.

Canine automatically installs Telepresence to your cluster as part of the install process, so it's already ready on your cluster.

### Install Telepresence to your laptop

Install Telepresence locally on your laptop [here](https://www.telepresence.io/docs/install/manager).

### Connect to your cluster with Telepresence

Navigate to **Projects → Whiteboarder → Services  → web**

<div align="left"><figure><img src="/img/quickstart/telepresence-1.png" alt=""/><figcaption></figcaption></figure></div>

Click on **How do I connect to this?**

<div align="left"><figure><img src="/img/quickstart/telepresence-2.png" alt=""/><figcaption></figcaption></figure></div>

Download the Kubeconfig file & run the command shown. You should now see this:

<figure><img src="/img/quickstart/service-screenshot.png" alt=""/><figcaption></figcaption></figure>
