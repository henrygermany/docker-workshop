# Build images and run containers

Besides this file, you'll find a minimal Dockerfile that spins up an [nginx](https://hub.docker.com/_/nginx)
webserver serving a static html page.

General hint:
The docker CLI follows a hierarchical structure: `docker <command> <subcommand>`. For each command and subcommand, you
can use the `--help` flag. If you use it on a command, you will learn, among other things, all subcommands for that
command.

1. Build an image tagged `simple_web_server:v0.0.1` from it.
2. Create and run a container from the image. The website should be accessible from port 8080. Make sure the html page
   is accessible from your browser.
3. While the container is running, change the html page to display something else. Reload the website. What do you
   observe?
4. Stop the Container with `SIGINT` (Ctrl+C) In addition to stopping it, this will also delete it.
5. Rebuild your image with an increased version tag `v0.0.2`.
6. Recreate and run your container, this time with the `-d` flag. What does it do?
   Delete your docker container. Consult `docker container --help` for help. To get a list of your currently running
   containers, use `docker container ls`.
7. Delete `v0.0.1` of your created images. Consult `docker container image --help` for help.