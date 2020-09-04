---
layout: post
title: Setting Up Your Terminal
---
We'll be working at the command line a lot. Let's make sure your tools are going to serve you well.

## Windows Command Shells

If you're using Windows, you may want to install a better command line terminal. One that works quite well and has lots of good features, including support for multiple tabs of terminals, and terminals of different types (cmd, PowerShell, git bash, Windows Subsystem for Linux), shortcut keys, and more, is [Cmder](https://cmder.net). It comes as a zip file that you can unzip to your home directory or desktop and run from there.

Once you install it, you may want to go through the settings and configure things. A few settings I modified:

* Bumped up the font size and selected my favorite console font (**Fira Code**) from **General > Fonts** settings area
* Selected **Show status bar** in the **Features > Status bar** settings area
* Went through the color schemes in  **Features > Colors** and chose my favorite (**&lang;Tomorrow Night Bright&rang;**)
* Turned on **Start selection with Shift+Arrow** in the **Keys &amp; Macro > Mark/Copy** area

In addition, in a PowerShell tab, run the following:

```{PowerShell}
Install-Module -Name PSReadLine -RequiredVersion 1.2 -Scope CurrentUser -Force -SkipPublisherCheck
```

## Terminal Options for macOS

The Mac terminal is pretty good. However, if you're looking for something better, I've found [iTerm2 for macOS](https://iterm2.com/) to offer a number of useful features as well.

## Terminal Options for Linux

On most Linux distributions with a graphical user interface, the baseline terminal will be fine. However, if you want to be able to setup single-window multi-terminal layouts and re-order terminal tabs, etc., take a look at [Gnome Terminator](https://gnometerminator.blogspot.com/p/introduction.html).
