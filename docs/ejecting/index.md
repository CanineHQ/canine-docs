---
id: ejecting-index
title: Ejecting
sidebar_label: Overview
sidebar_position: 0
---

# Ejecting

Canine is designed to get you up and running on Kubernetes quickly — but it's not meant to be a permanent dependency. When you're ready, you can "eject" from Canine and take full ownership of your deployment pipeline.

Ejecting means exporting the Kubernetes manifests that Canine manages for you and moving them into your own CI/CD pipeline (GitHub Actions, GitLab CI, etc.). Your applications keep running without interruption — you're just changing who applies the manifests.

## Why eject?

**You've outgrown Canine.** Your team has grown, your infrastructure needs have become more complex, and you want fine-grained control over your deployment pipeline — custom rollout strategies, multi-environment promotion, advanced testing gates, or integration with internal tooling.

**You want to deploy directly.** You'd rather manage Kubernetes manifests in git and deploy through your existing CI/CD system. You've learned enough about Kubernetes through Canine that the training wheels are no longer needed.

**You want to standardize.** Your organization has a standard deployment pipeline and you need your applications to follow it. Canine got you started, but now it's time to converge on the team's shared infrastructure.

## What happens when you eject?

- Your running applications are **not affected**. Nothing gets deleted or restarted.
- You get a zip file of all the Kubernetes YAML that Canine currently manages for you.
- You add those files to your application's git repository.
- You add a CI/CD pipeline that builds, pushes, and deploys on every push to `main`.
- You disable Canine's autodeploy and eventually remove the project from Canine.

## Guides

- [**Ejecting from Canine**](./ejecting-from-canine) — Step-by-step guide using a kubeconfig with GitHub Actions or GitLab CI.
- [**Ejecting with Portainer**](./ejecting-with-portainer) — If your cluster is managed through Portainer, use a Portainer API token instead of a raw kubeconfig.
