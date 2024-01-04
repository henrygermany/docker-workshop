# Image Creation and Running

Besides this file, you'll find a minimal Dockerfile that spins up an [nginx](https://hub.docker.com/_/nginx)
webserver serving a static html page.

1. Build an image tagged `simple_web_server:v0.0.1` from it.
2. Create and run a container from the image. The website should be accessible from port 8080.
3. Make sure the web page is accessible from your browser.
4. Change the html page to display something else.
5. Reload the website. What do you observe?
6. Delete your docker container. Consult `docker container --help` for help.
7. Rebuild your image with an increased version tag.
8. Recreate your container. This time, use `--rm`. Consult `docker container run --help` for more info about the option
   and
   where to put it in your command.
9. Delete both your created images. Consult `docker container image --help` for help.