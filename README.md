# Jedlikova 13

A repo for site of dormitory on Jedlikova 13

### Template for new pages:

1. Put md files to /content directory,

2. Use the following template to convert html.

```
# Lorem ipsum dolor sit amet. // DO NOT REMOVE OR MODIFY THIS LINE

{{< raw >}}
<!-- HTML CODE HERE -->
{{< /raw >}}
```

### Its also necessary to put <script> to the end of each file:

```html
<!-- HTML here -->

<script src = "/JS/<LANGUAGE>.js"></script> <!-- Without this code menus will be inactive -->
```

### Start server with command:

```shell
hugo server --bind SERVER_IP --baseURL http://YOUR_DOMAIN --port 80
```

### If necessary disable firewall:

```shell
sudo ufw allow 80
```