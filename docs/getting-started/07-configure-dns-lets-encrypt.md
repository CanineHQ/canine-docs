# Configure DNS & LetsEncrypt SSL certificate

Navigate to **Projects** **→ Whiteboarder → Services → web** and check **Allow Public Networking** and click **Save.**

Now, once the page refreshes, if you reopen the web panel, you should see a new networking section.

Add a custom domain of `whiteboarder.<your-domainname>`. Canine should give you an IP address with instructions for DNS configuration.

<figure><img src="/img/quickstart/dns.png" alt=""/><figcaption></figcaption></figure>

Add the A record to your DNS configuration. In this case, we're using Cloudflare, which provides a fantastic, free DNS service.

**Make sure to redeploy the application,** and canine will automatically start trying to provision an SSL certificate for you.

<div class="alert alert-info">
It might take 20-30 minutes to issue a certificate, so feel free to take coffee break at this point!
</div>

Hooray! You should be able to now navigate to `whiteboarder.<your-domainname>` and see the app, live on the internet with a valid SSL certificate issued!

<figure><img src="/img/quickstart/service-screenshot-2.png" alt=""/><figcaption></figcaption></figure>
