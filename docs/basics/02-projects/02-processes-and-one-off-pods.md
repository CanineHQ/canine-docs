# One off pods

Often, you will want to start a shell to access your application. Canine hands this feature off to the native way you'd do this in Kubernetes. Any processes running within your cluster is connectable if a shell is installed on the container image.

You need to install `kubectl`, and ensure setting the `KUBECONFIG` variable to the path of the clusters Kubeconfig file.

:::tip
If you put the kubeconfig.yml file at ~/.kube/config, you won't need to prepend the `KUBECONFIG` environment variable. `cp /path/to/kubeconfig ~/.kube/config`
:::