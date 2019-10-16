---
layout: page
title: Converting your Create React App application to an Electron desktop app<br/>COSC A319 Internet Technologies<br/>(Fall 2019)
---

Starting from the directory where you've copied your application, take the following steps to convert your app to an Electron-based desktop application.

1. Install some new dependencies:
   ```{bash}
   npm install electron electron-builder wait-on concurrently --only=dev
   npm install electron-is-dev
   ```
2. Create a new file in the `public` folder of your app, `public/start-electron.js`, with the following code:
   ```{javascript}
   const electron = require('electron'),
     app = electron.app,
     BrowserWindow = electron.BrowserWindow;
   
   const path = require('path'),
     isDev = require('electron-is-dev');
   
   let mainWindow;
   
   const createWindow = () => {
     mainWindow = new BrowserWindow({ width: 480, height: 320 })
     const appUrl = isDev ? 'http://localhost:3000' :
       `file://${path.join(__dirname, '../build/index.html')}`
     mainWindow.loadURL(appUrl)
     mainWindow.maximize()
     mainWindow.setFullScreen(true)
     mainWindow.on('closed', () => mainWindow = null)
   }
   app.on('ready', createWindow)
   app.on('window-all-closed', () => {
     // Follow OS convention on whether to quit app when
     // all windows are closed.
     if (process.platform !== 'darwin') { app.quit() }
   })
   app.on('activate', () => {
     // If the app is still open, but no windows are open,
     // create one when the app comes into focus.
     if (mainWindow === null) { createWindow() }
   })
   ```
3. Add some new configuration to your app's `package.json` file:
  - In the `"scripts"` section, add the following scripts:
    ```
    "electron-dev": "concurrently \"BROWSER=none npm start\" \"wait-on http://localhost:3000 && electron .\"",
    "electron-package": "./node_modules/.bin/electron-builder -c.extraMetadata.main=build/start-electron.js",
    "preelectron-package": "npm run build"
    ```
    These scripts will allow you to start electron in development mode (`npm run electron-dev`), and to build ("package") your application into an executable for the system you're running on (`npm run electron-package`).
  - Modify the `"homepage"` value to read: `"homepage": "./",`. (If it's not there, add it.)
  - Add a new `"build"` section to the file:
    ```
    "build": {
      "appId": "com.loyno-mathcs.your-github-name.weatherstation.wotdevice",
      "files": [ "build/**/*", "node_modules/**/*" ],
      "directories":{
        "buildResources": "assets"
      }
    },
    ```
    (Be sure to replace `your-github-name` above with your actual Github username.)
  - Update the `"name"` value to something more appropriate for this application (i.e., `"name": "wot-device"` or similar).
4. Test running your application in development mode:
   ```
   npm run electron-dev
   ```
   You should see your app launch as a desktop application in a new window, and immediately become fullscreen.
5. Test building your application:
   ```
   npm run electron-package
   ```
   You should find a new `dist` directory with a folder for your operating system. Inside, you should see a new executable. Double-click it to test executing the app you've created.
