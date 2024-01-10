# Bind Mounts

## Introduction

First, we are experimenting a bit with a bind mount and see how it works.

1. Create and run an ubuntu container from the tag `ubuntu:23.04`.
    - Bind mount the current directory into the container with `--mount type=bind,src="$(pwd)",target=/app`.
    - Use the flags `--interactive` and `--tty` with your run command (Tip: you can use their short forms). This will
      attach your terminal to the container.
    - Use the flag `--rm`. This will delete your container after you exit the attached terminal session.

2. Inside the container, change to the `/app` directory. Verify with `ls` that you can see all the files from the host
   directory.

3. Create a file in the directory inside the container. Can you see it on the host?

---

## Developing with bind mounts

Now, we will use a bind mount to simulate a more realistic scenario. This exercise shows a typical web development
environment with some kind of hot code reloading.
In essence, the needed (development) dependencies are decoupled from the source code.

This folder contains a simple Node.js web server
that listens for incoming requests on `/` and responds with a text message.

4. Build an image from the Dockerfile in this directory. In your build command, specify the value `development` for the
   build argument defined in the Dockerfile with `--build-arg NODE_ENV=development`.

5. Create and run a container from your built image.
    - It should remove itself after exiting.
    - Its port `3000` should be mapped to a free host port.
    - Attach your terminal to the container like in task 1. This is needed for you to be able to stop the container with
      Ctrl+C.
    - Bind mount the current directory to `/app` inside the container
    - Use a volume mount with ` --mount type=volume,src="node_modules",target=/app/node_modules/` to prevent
      the `node_modules` folder created in the build process to be overridden by the bind mount.
    - After creating the container, verify you can reach the `/` endpoint.
    - Change the `./src/index.js` file to respond with a different text message. Reload the webpage.
6. If you're done early, think about the last two exercises. Can you identify some potential problems with how we
   specified and run each container instance?
