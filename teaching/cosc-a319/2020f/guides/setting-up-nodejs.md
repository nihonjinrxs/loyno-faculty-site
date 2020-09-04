---
layout: post
title: Setting Up and Working with Node.js
---

You'll want to get setup to work with Node.js quite soon. This how-to will provide instructions for doing that on both Windows and on Mac/Linux.

## But first...

Because we'll be doing a lot of work at the command line, you may want to look at [Setting Up Your Terminal](./setting-up-your-terminal) before starting here.

## Supporting multiple versions of Node.js via nvm

Languages evolve over time, and JavaScript is no different. Because of that, we will occasionally want to upgrade the version of the language implementation we're using. That can be frustrating if you install using the baseline installer. Instead we'll use a tool called `nvm` (and it's counterpart `nvm-windows`) to install our starting point for Node.js, allowing us an easy way to install and manage the versions of the language we work with.

## Our baseline Node.js version

In the course, we'll try to stick to the latest release of the long-term support (LTS) major version of Node.js. The release cycle for Node.js has several release lines. The LTS release line ensures stability first, but also implements important bug fixes and security patches as they are available. Unlike the "Current" version line, however, the LTS version line does not attempt to integrate new, bleeding edge features that may still be under standards discussion or may not yet have a stable implemetation. At the time of writing, Node.js 12.18.3 is the latest LTE release, and 14.9.0 is the latest Current release.

## Installing nvm and Node.js

Here, I'll walk you through installing `nvm` (or `nvm-windows`) and then using that to install the latest LTS Node.js version.

### Windows

On Windows, you'll first want to download [the latest release of `nvm-windows`](https://github.com/coreybutler/nvm-windows/releases), selecting the `nvm-setup.zip` file. Once downloaded, unzip that file to get an executable installer `nvm-setup.exe`. Run that installer and follow the prompts, accepting the default values along the way.

Then, run either `cmd` as Adminstrator (possibly using Cmder), and check that `nvm` is working:

```{cmd}
> nvm list

No installations recognized.
```

To see available Node.js versions you can install, use:

```{cmd}
> nvm list available

|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|    14.9.0    |   12.18.3    |   0.12.18    |   0.11.16    |
|    14.8.0    |   12.18.2    |   0.12.17    |   0.11.15    |
|    14.7.0    |   12.18.1    |   0.12.16    |   0.11.14    |
|    14.6.0    |   12.18.0    |   0.12.15    |   0.11.13    |
|    14.5.0    |   12.17.0    |   0.12.14    |   0.11.12    |
|    14.4.0    |   12.16.3    |   0.12.13    |   0.11.11    |
|    14.3.0    |   12.16.2    |   0.12.12    |   0.11.10    |
|    14.2.0    |   12.16.1    |   0.12.11    |    0.11.9    |
|    14.1.0    |   12.16.0    |   0.12.10    |    0.11.8    |
|    14.0.0    |   12.15.0    |    0.12.9    |    0.11.7    |
|   13.14.0    |   12.14.1    |    0.12.8    |    0.11.6    |
|   13.13.0    |   12.14.0    |    0.12.7    |    0.11.5    |
|   13.12.0    |   12.13.1    |    0.12.6    |    0.11.4    |
|   13.11.0    |   12.13.0    |    0.12.5    |    0.11.3    |
|   13.10.1    |   10.22.0    |    0.12.4    |    0.11.2    |
|   13.10.0    |   10.21.0    |    0.12.3    |    0.11.1    |
|    13.9.0    |   10.20.1    |    0.12.2    |    0.11.0    |
|    13.8.0    |   10.20.0    |    0.12.1    |    0.9.12    |
|    13.7.0    |   10.19.0    |    0.12.0    |    0.9.11    |
|    13.6.0    |   10.18.1    |   0.10.48    |    0.9.10    |

This is a partial list. For a complete list, visit https://nodejs.org/download/release
```

Find the latest version in the LTS column (usually at the top), and install that:

```{cmd}
> nvm install 12.18.3                                               
Downloading node.js version 12.18.3 (64-bit)...                     
Complete                                                            
Creating C:\Users\rharvey\AppData\Roaming\nvm\temp                  
                                                                    
Downloading npm version 6.14.6... Complete                          
Installing npm v6.14.6...                                           
                                                                    
Installation complete. If you want to use this version, type        
                                                                    
nvm use 12.18.3
```

Then, tell `nvm` to use that version:

```{cmd}
> nvm use 12.18.3               
Now using node v12.18.3 (64-bit)
```

Finally, check that you're using that version of Node.js:

```{cmd}
> node -v
v12.18.3
```

### Linux and macOS

On Linux or macOS, the easiest way to install `nvm` is to just run the installation script:

```{bash}
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

> **NOTE:** It's generally not a good idea to run arbitrary code from the Internet on your computer, which is exactly what this command is doing -- the `curl` command downloads the script file, and the pipe `|` passes it directly to the `bash` shell command, executing it line by line. I've reviewed what this script is doing, so I'm comfortable running it and recommending that you do so. You should generally be cautious, and inspect scripts like this that you plan to run on your computer. [Thankfully, this script is entirely open source, and you can inspect it as needed.](https://github.com/nvm-sh/nvm/blob/v0.35.3/install.sh)

Next, we'll verify the installation using the `command` command:

```{bash}
$ command -v nvm
nvm
```

Once that's installed, we can list our available Node.js versions using `nvm ls` and the versions avaiable to install using `nvm ls-remote`. Note that the LTS versions will be marked in this list along with their LTS release codename. The LTS release codename for the version 12 line is **Erbium**.

Find the release version that is marked as **Latest LTS: Erbium** (12.18.3 at the time of writing), and install that using:

```{bash}
$ nvm install 12.18.3
Downloading and installing node v12.18.3...
Downloading https://nodejs.org/dist/v12.18.3/node-v12.18.3-linux-x64.xz...
################################################################################100%
Computing checksum with sha256sum
Checksums matched!
Now using node v12.18.3 (npm v6.14.6)
```

Finally, check that you're using the expected node version:

```{bash}
$ node -v
v12.18.3
```

## Selecting Which Node.js Version to Use

There are a few ways to select which Node.js version to use.

First, to select manually, you can do `nvm use <version_number>`.

However, it's usually a good idea to have the version we expect tied to our project. To do this, we can create a new file `.nvmrc` in the root of the project repository with only the version number in it. If that is present, you can do `nvm use` in the project directory, and nvm will read the version from that file.

## Running the Node.js REPL

As you work through things, you'll want to experiment with JavaScript statements. To do that, you can run `node` to get a console in your shell that accepts JavaScript statements, evaluates them, and prints the output back to the console. This is called a "Read-Evaluate-Print Loop" or "REPL", and you'll find that many interpreted languages provide this kind of interactive interface.
