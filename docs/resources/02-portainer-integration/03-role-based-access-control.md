---
sidebar_position: 3
---

# Role Based Access Control

## Setup

If you enabled role based access control in your Portainer integration, all users will need to upload their own Portainer access token. Each user in your Canine instance should:

1. [Create an access token](https://docs.portainer.io/api/access#creating-an-access-token) in Portainer under **My Account → Access tokens → + Add access token**
2. Navigate to **Account → Credentials** in Canine
3. Paste their Portainer access token and save

![Uploading a Portainer access token](/img/portainer/portainer-access-token.png)

## How RBAC works

All actions taken through the UI will be done through the logged in users Portainer token, via the Portainer `kubectl` proxy. This ensures that if a user in Portainer is unable to access a cluster resource, those permissions will flow through to Canine.
