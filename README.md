# nodejs-welcome
Nodejs application for Demos

```sh
oc rsync ./  wel-1-iw0in:/app   --exclude=[".git/**","node_modules/**"]  --no-perms=true --watch
oc port-forward wel-1-iw0in 5858:5858
```
