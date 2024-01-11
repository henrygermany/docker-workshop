# Docker Workshop

This repository contains demos and exercises for my presentation/workshop about Containers, Docker and Docker Compose.
For you to be able to run everything, you need to have Docker and Docker Compose installed on your system. If you have
both already, you can stop reading now.

# Prerequisites

- To install Docker, head over to https://docs.docker.com/get-docker/ and follow the instructions for your
  system/architecture**.
- The code in this repository has been tested for Docker running on a Linux
  system*. As I don't have a Windows system, I can't guarantee that it works on Windows.

&ast; actually, running in a Linux VM on a macOS system using [Colima](https://github.com/abiosoft/colima)

&ast;&ast;Docker Desktop is the easiest install method for every system and architecture, but we will work
only from the command line, so you
don't really need Docker Desktop. Also, the Docker Desktop is a licensed closed source app. If you are using it for
commercial reasons, you need to pay for it.
If you don't want the overhead and proprietary of Docker Desktop,
use [this script](https://get.docker.com/) to install the Docker engine on linux and maybe try
out [Colima](https://github.com/abiosoft/colima)
with [Docker from homebrew](https://github.com/abiosoft/colima?tab=readme-ov-file#docker) for macOS.