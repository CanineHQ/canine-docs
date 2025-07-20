# (Optional) Install Canine locally



<div class="alert alert-success">
If you're using the [cloud version](https://canine.sh) of Canine, you can skip this.
</div>

Make sure you have docker compose installed on your local machine before continuing. Make sure you can run `docker compose` successfully before continuing.

Canine can be installed locally by running

```bash
curl -sSL https://raw.githubusercontent.com/czhu12/canine/refs/heads/main/install/install.sh | bash
```

Navigate to [http://localhost:3456](http://localhost:3456) and you should see a welcome page, and a prompt to add your Github token.

Go to your Github profile's [tokens page](https://github.com/settings/tokens), and click **Generate new token (classic).** Give your token a name and make sure to select the permissions **`repo`**, **`write:packages`**, and **`delete:packages`**

<figure><img src="/img/quickstart/github-token.avif" alt=""/><figcaption></figcaption></figure>

Copy the token into your local Canine instance, and you're good to go!
