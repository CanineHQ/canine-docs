# Web Services

Web services can expose a public URL, or be accessed privately via telepresence.


### Public networking
To expose your web service to public internet, check `Allow public networking`, and save the service. Add the URL's you want to map the service to, and save the new domain entries.

Redeploy the project, and Canine will automatically start provisioning a new SSL certificate via LetsEncrypt. Ensure that you create the corresponding DNS entry. This could take up to an hour to be provisioned.

[TODO: Add Screenshot]