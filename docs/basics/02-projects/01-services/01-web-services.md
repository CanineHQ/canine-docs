# Web Services

Web services can expose a public URL, or be accessed privately via telepresence.


### Public networking
To expose your web service to public internet, check `Allow public networking`, and save the service. Add the URL's you want to map the service to, and save the new domain entries.

Redeploy the project, and Canine will automatically start provisioning a new SSL certificate via LetsEncrypt. Ensure that you create the corresponding DNS entry. This could take up to an hour to be provisioned.

### Custom Domains

To map a custom domain to your service:

1. Add the domain name in the **Domains** section of the service
2. Create a DNS record (CNAME or A record) pointing to your cluster's ingress IP
3. Canine will verify the DNS record and provision a TLS certificate via Let's Encrypt

Domain statuses:
- **Checking DNS** - Canine is verifying your DNS record
- **DNS Verified** - The domain is correctly configured
- **DNS Incorrect** - The DNS record does not match; check your DNS settings

### Resource Constraints

You can set CPU and memory limits for your web service under **Resource Constraints**:

- **CPU Request / Limit** - Minimum and maximum CPU allocation (in millicores)
- **Memory Request / Limit** - Minimum and maximum memory allocation
- **GPU Request** - Number of GPU devices (for ML workloads)

Setting resource constraints helps Kubernetes schedule pods efficiently and prevents a single service from consuming all cluster resources.