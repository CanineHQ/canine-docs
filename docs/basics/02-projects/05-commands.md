# Commands

Pre deploy and post deploy commands allow you to run commands with your container image.

### Deployment Workflow

The deployment of a Canine project is:

1. Upload container registry secrets so that the cluster can download images from the container registry
2. Create project namespace (if it doesn't exist)
3. Set environment variables by creating a ConfigMap
4. Create volumes (if necessary)
5. Run pre deploy command
6. Deploy / update each service (web, background workers, ingress, and cron jobs)
7. Kill one of containers (since they are now using old code)
8. Run post deploy command