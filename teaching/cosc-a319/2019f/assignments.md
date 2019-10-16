---
layout: page
title: Assignments<br/>COSC A319 Internet Technologies<br/>(Fall 2019)
---

* [PROJECT DAY 1](#project-day-1) - Web Client (Thu, Sep 12, 2019)
* [PROJECT DAY 2](#project-day-2) - Server API (Tue, Sep 24, 2019)
* [PROJECT DAY 3](#project-day-3) - IoT/WoT Device #1 (Thu, Oct 3, 2019)
* [PROJECT DAY 4](#project-day-4) - IoT/WoT Device #2 (Thu, Oct 17, 2019)
* [PROJECT DAY 5](#project-day-5) - Integration #1: API <-> Device (Tue, Oct 22, 2019)
* [PROJECT DAY 6](#project-day-6) - Integration #2: Web <-> API (Thu, Oct 24, 2019)
* [PROJECT DAY 7](#project-day-7) - Mobile Client (Tue, Nov 19, 2019)

---------------------------------------------

<a name="project-day-1"></a>

## 🏗 PROJECT DAY 1 - Web Client

For PROJECT DAY 1, you'll build the web application that will eventually display data from the sensors on the device (which you haven't built yet) and allow you to view it from whereever you may have an Internet connection and a web browser.

### 📆 Schedule

| Intro/Demo     | Tue, Sep 10, 2019 |
| PROJECT DAY    | Thu, Sep 12, 2019 |
| Assignment Due | Tue, Sep 24, 2019 |

### 💯 Points Possible: **300**

### 🛠 The Tools

To do this, we'll use JavaScript with HTML and CSS, as you might expect, but we'll also use two key JavaScript libraries and four infrastructure tools/services:

#### 📦 JavaScript Libraries

* [React](https://reactjs.org/) - a library for building dynamic web interfaces using JavaScript in a componentized and manageable way. Along with React, [create-react-app](https://create-react-app.dev/) is a companion library that scaffolds a web-based application for you using React for components. (This scaffolding piece will be done for you for this first project day.)
* [Jest](https://jestjs.io/) - a testing library included with the project scaffold created by create-react-app that allows testing your code. Along with Jest, [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) is a companion library that provides easy ways to render components and assert properties on them when testing.

#### 🏭 Infrastructure Services

* [Github](https://github.com) - a web service providing hosting and additional features for the [git](https://git-scm.com/) distributed version control system. You'll be using git and Github to manage your codebase.
* [Travis CI](https://education.travis-ci.com) - a continuous integration platform that you'll use to ensure every commit you push to Github passes all automated tests.
* [Docker (Community Edition)](https://hub.docker.com/search/?type=edition&offering=community) - a software containerization platform that allows building an image of your software and deploying that built image.
* [Amazon Web Services](https://aws.amazon.com/) - a suite of cloud services where we will deploy our work. (You should already have applied for, and hopefully received, [AWS Educate](https://aws.amazon.com/education/awseducate/) membership, which provides some free credits in addition to the free services you get during the first year of AWS membership.)

### ✅ Requirements for the Assignment

Create a web-based application that provides an interface to the data collected by your IoT/WoT Device Weather Station, displaying temperature and humidity data using the user's choice of scale for temperature display.

Assume that data reported by the Weather Station is in Celsius degrees for temperature and in percentage for humidity.

#### ⚙️ Functional Requirements

1. Build an application that is viewable through a web browser.
2. The application should have a single page that shows a title and well-formatted temperature and humidity values.
3. The page should be decorated with an image background.
4. The application should simulate real data for display by generating random numbers in a realistic range (about 7°C &ndash; 33°C for temperature and about 5% &ndash; 98% for humidity).
5. The application should display real-time updates of the data on the page without refreshing the page in the browser.
6. The application should allow the user to select the temperature display units, and should display the data in the requested units without refreshing the page in the browser.

#### 🔩 Source Code, Process & Deployment Requirements

1. Code for the application should be well-organized, using components and folders to keep related code together.
2. The application should make use of Github for version control. Commits should be small, be well-described in their commit messages, and contain a single change to the application.
3. All code for the application should be well-tested. (This means that for each function you write, you should write at least one, and possibly several, tests.) Automated tests should run on every commit and pull request to the repo.
4. The application should be deployed to Amazon Web Services as a Docker Container, and should be live (that is, publicly available on the Internet).

---------------------------------------------

<a name="project-day-2"></a>

## 🏗 PROJECT DAY 2 - Server API

For PROJECT DAY 2, you'll build the server API that will collect and serve data collected from your sensors.

### 📆 Schedule

| Intro/Demo     | Thu, Sep 19, 2019 |
| PROJECT DAY    | Tue, Sep 24, 2019 |
| Assignment Due | Tue, Oct 1, 2019  |

### 💯 Points Possible: **500**

### 🛠 The Tools

To do this, we'll use JavaScript in its Node.js form, but we'll also use a few key JavaScript libraries and four infrastructure tools/services:

#### 📦 JavaScript Libraries

* [Express](https://expressjs.com/) - a library for building web servers.
* [Jest](https://jestjs.io/) - a testing library (chosen because this is hat was used for Project Day 1, included with the project scaffold created by create-react-app) that allows testing your code. Along with Jest, [jest-express](https://www.npmjs.com/package/jest-express) is a companion library that provides easy ways to interact with the core objects in the Express library.

#### 🏭 Infrastructure Services

* [Github](https://github.com) - a web service providing hosting and additional features for the [git](https://git-scm.com/) distributed version control system. You'll be using git and Github to manage your codebase.
* [Travis CI](https://education.travis-ci.com) - a continuous integration platform that you'll use to ensure every commit you push to Github passes all automated tests.
* [Docker (Community Edition)](https://hub.docker.com/search/?type=edition&offering=community) - a software containerization platform that allows building an image of your software and deploying that built image.
* [Amazon Web Services](https://aws.amazon.com/) - a suite of cloud services where we will deploy our work. (You should already have applied for, and hopefully received, [AWS Educate](https://aws.amazon.com/education/awseducate/) membership, which provides some free credits in addition to the free services you get during the first year of AWS membership.)

### ✅ Requirements for the Assignment

In this portion of the project, you'll build an API with endpoints that allow getting weather sensor data, updating weather sensor data, and eventually registering sensors with the API to handle multiple sensors.

#### ⚙️ Functional Requirements

1. Create a new Express-based API with a single `GET` endpoint at the path `/beacon` that responds with a `200` status code, and the plain text `OK`. Appropriate response headers should be set when the API returns a response.
2. Create a new `GET` endpoint at `/weather-sensor/data` to get data from the sensor. The endpoint should respond with JSON-format data with keys `"temperature"` and `"humidity"`. Appropriate response headers should be set when the API returns a response. Values for temperature and humidity can be generated randomly upon request for now.
3. Create a new `POST` endpoint at `/weather-sensor/update` to allow a sensor to send new data to the API. Successful operation should result in a `201` status code. Appropriate response headers should be set when the API returns a response.
4. Update the API to maintain a list of registered sensors in memory, and modify the previously created `GET` and `POST` requests to accept a path-based parameter `:id` for the sensor identifier, moving their mount points to `/weather-sensors/:id/{data|update}`.
5. Create a new `GET` endpoint at `/weather-sensors` that returns a list of sensors registered with the API. Appropriate response status code and headers should be set when the API returns a response.
6. Create a new `POST` endpoint at `/weather-sensors/register` that allows a weather sensor device to register itself with the API. Appropriate response status code and headers should be set when the API returns a response.

#### 🔩 Source Code, Process & Deployment Requirements

1. Code for the application should be well-organized, using components and folders to keep related code together.
2. The application should make use of Github for version control. Commits should be small, be well-described in their commit messages, and contain a single change to the application.
3. All code for the application should be well-tested. (This means that for each function you write, you should write at least one, and possibly several, tests.) Automated tests should run on every commit and pull request to the repo.
4. The application should be deployed to Amazon Web Services as a Docker Container, and should be live (that is, publicly available on the Internet).

---------------------------------------------

<a name="project-day-3"></a>

## 🏗 PROJECT DAY 3 - IoT/WoT Device #1

For PROJECT DAY 3, you'll begin building and programming the device that will house the sensors and send data to the Server API.

### 📆 Schedule

| Intro/Demo     | Tue, Oct  1, 2019 |
| PROJECT DAY    | Thu, Oct  3, 2019 |
| Assignment Due | Tue, Oct 29, 2019 |

### 💯 Points Possible: **400**

### 🛠 The Tools

For this project day, you begin working with hardware. During this assignment, you'll be creating a device with several hardware components:

* a Raspberry Pi 3B+ - the controller device used to coordinate the interaction of all the sensors and actuators, and to run the software you write
* a DHT22 temperature/humidity sensor - used to retrieve atmospheric data to feed into the Server API
* a multi-color LED - used for immediate display of temperature range by color
* a passive infrared (PIR) sensor - used to detect when there is someone near the device
* a single-color LED - used to indicate when the PIR sensor detects someone
* an LED touch screen - (in a future assignment) used to display the on-board app that shows sensor values

[![Raspberry Pi 3B+ with Breadboard layout](../COSC-A319-Class-Project_bb.png)](../COSC-A319-Class-Project_bb.png)

Recall, the GPIO pin layout on the Raspberry Pi 3B+ is as follows.

![Raspberry Pi 3B+ GPIO pin layout](https://i2.wp.com/www.fypsolutions.com/wp-content/uploads/2018/02/boardvsbcm.png?w=2400)

In addition to this, you'll be using two Node.js-based libraries to interact with the hardware (in addition to the installed hardware driver software for the components):

* **[onoff](https://www.npmjs.com/package/onoff)** - a library for interacting with devices on the GPIO pins of the Raspberry Pi
* **[node-dht-sensor](https://www.npmjs.com/package/node-dht-sensor)** - a library for interacting with the DHT22 sensor specifically, as it has a proprietary binary protocol for its data

### ✅ Requirements for the Assignment

#### ⚙️ Functional Requirements

1. **LED Library** For the single-color LED (an actuator), create an importable library file that exports the following interface functions to control the LED: `turnOn()`, `turnOff()`, `lightSwitch(booleanValue)`. The library should also export an `init(gpioPin)` function to identify the GPIO pin on which the LED resides.
2. **MulticolorLED Library** For the multi-color LED (also an actuator), create an importable library file that exports the following interface functions to control the LED: `turnOn()`, `turnOff()`, `setColor(colorArg)`, where `colorArg` is either a hexadecimal color value string (i.e., `'#54A5B3'`) or an object with `red`, `green` and `blue` property values. The library should also export an `init(gpioPins)` function to identify the GPIO pins that control the color values for the LED (where `gpioPins` is an object with `red`, `green` and `blue` property values).
3. **PIR Library** For the PIR sensor, create an importable library file that exports the following interface functions to read from the PIR sensor: `watch()` - generates events that can be acted upon on a change of value, `seesSomething()` - returns a boolean. The library should also export an `init(gpioPin)` function to identify the GPIO pin on which to listen for data.
4. **DHT Library** For the DHT22 sensor, create an importable library file that exports the following interface functions to read from the DHT sensor: `watch()` - generates events that can be acted upon on a change of value, `read()` - reads the current data from the sensor, `intervalRead(intervalMilliseconds, callbackFunction)` - reads data from the sensor on an interval and calls the callback function with the data. The library should also export an `init(gpioPin)` function to identify the GPIO pin on which to listen for data.
5. **PIR controls LED** Write a program that imports the PIR sensor and single-color LED actuator libraries, and make the LED turn on when the PIR sensor sees something, and turn off when it does not. Be sure to use asynchronous methods, so that none of the listening activity blocks other processes running simultaneously in your program. Also, be sure to handle turning everything off when the program stops (see "Error handling" below).
6. **DHT controls MulticolorLED** Write a program that imports the DHT sensor and multi-color LED actuator libraries, and make the LED actuator display a range from blue (approximately 7°C) to red (approximately 33°C) based on the temperature value read from the sensor. Be sure to use asynchronous methods, so that none of the listening activity blocks other processes running simultaneously in your program. Also, be sure to handle turning everything off when the program stops (see "Error handling" below).
7. **Main program** Write a wrapper program that imports the programs you wrote for requirements 5 and 6, and starts them both.

#### 🔩 Source Code, Process & Deployment Requirements

1. **Hardware build** Your device should be built so that it works as described in the functional requirements above. Provided system diagrams are a recommendation, but if you find that a different wiring better suits your needs, you should feel free to implement it.
2. **Code organization and style** Code for the application should be well-organized, using components and folders to keep related code together. Code should be written asynchronously where possible in order to allow for multiple simultaneous activities.
3. **Tests** All code for the application should be well-tested. (This means that for each function you write, you should write at least one, and possibly several, tests.) Automated tests should run on every commit and pull request to the repo.
4. **Error handling** Code should also handle errors and software termination (premature or otherwise) gracefully. For software termination, you may want to look at handling the following events on the `process` object: `exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, and `unhandledRejection`.
5. **Version control** The application should make use of Github for version control. Commits should be small, be well-described in their commit messages, and contain a single change to the application.
6. **Deployment** Software should be deployed on your device, and you should be able to demonstrate its operation in class on the due date of the assignment.

---------------------------------------------

<a name="project-day-4"></a>

## 🏗 PROJECT DAY 4 - IoT/WoT Device #2

For PROJECT DAY 4, you'll finish building and programming the device that will house the sensors and send data to the Server API.

### 📆 Schedule

| PROJECT DAY    | Thu, Oct 17, 2019 |
| Assignment Due | Tue, Oct 29, 2019 |

💯 Points Possible: **400**

### 🛠 The Tools

During this assignment, you'll continue working the tools mentioned for PROJECT DAY 1 and PROJECT DAY 3, and combine them by using the following JavaScript libraries:

* **[Electron](https://electronjs.org/)** - a library for creating desktop applications using web technologies like HTML, CSS and JavaScript.
* **[Electron Builder](https://www.electron.build/)** - a companion library for Electron that builds your application as a desktop app.
* **[ElectronIsDev](https://www.npmjs.com/package/electron-is-dev)** - a companion library for Electron that identifies whether an Electron app is running in development mode or as a built application artifact.
* **[Concurrently](https://www.npmjs.com/package/concurrently)** - a library that lets you run start multiple processes concurrently from the command line.
* **[wait-on](https://www.npmjs.com/package/wait-on)** - a library that provides a command-line way to wait for a specified dependency to be available before running the next command.

In addition, you'll be attaching the **[LCD TFT TouchScreen Display](http://www.lcdwiki.com/3.5inch_RPi_Display)** to your Raspberry Pi, and using the **[LCD-show](https://github.com/goodtft/LCD-show)** software to control the display output on your device. Your display is the Raspberry Pi 3.5in Display.

You can switch video output to the attached LCD display by running the `LCD35-show` program from the command line. To switch back to the HDMI port, you can run the `HDMI-show` program. These programs, and the display drivers, are already installed on your Raspberry Pi 3B+.

### ✅ Requirements for the Assignment

#### ⚙️ Functional Requirements

1. Make a copy of your Web Client application in a new folder, then follow [the instructions for converting your Create React App application to an Electron application](../converting-cra-to-electron). Once done, you should have an application that is runnable as a desktop application in development, and that can be built into a desktop executable for your computer and for the Raspberry Pi 3B+. (Be sure to test building on both systems.)
2. Add the sensor library code you wrote for the last assignment to your web app in a new folder, `<web client root>/lib/sensors`.
3. Modify and import the sensor libraries as needed in your application in order to enable the data displayed on the application interface to be the actual data coming off the sensors. Be sure to use the integrations you did for the last assignment to ensure that the hardware indicators of sensor value (i.e., the LEDs) are also enabled.
4. Convert the `div` element that wraps the content rendered by your `App` component into a new `WeatherStationDisplay` component. This should include moving all relevant state and props values to the new component.
5. Add a new component to your React app that displays a completely black screen with no content. Modify your `App` component to display that new blank screen component as default, and to display the `WeatherStationDisplay` component when the PIR sensor sees something. After switching to the `WeatherStationDisplay` component, the app should wait 30 seconds after the PIR sensor no longer sees anything before switching back to the blank screen component.
6. Build the application on the Raspberry Pi 3B+, and enable running it on boot in the `/etc/rc.local` file. **Note: do NOT do this until you know it's running without failing.** To do so, you can edit the file using `sudo nano /etc/rc.local`, and add the full absolute path to the built executable as a new line in the file, and end that new line with an ampersand (`&`) to run the program as a background job. If not there already, be sure to add a line at the end of the file that says `exit 0`.

#### 🔩 Source Code, Process & Deployment Requirements

1. **Hardware build** Your device should be built so that it works as described in the functional requirements above. Provided system diagrams are a recommendation, but if you find that a different wiring better suits your needs, you should feel free to implement it.
2. **Code organization and style** Code for the application should be well-organized, using components and folders to keep related code together. Code should be written asynchronously where possible in order to allow for multiple simultaneous activities.
3. **Tests** All code for the application should be well-tested. (This means that for each function you write, you should write at least one, and possibly several, tests.) Automated tests should run on every commit and pull request to the repo.
4. **Error handling** Code should also handle errors and software termination (premature or otherwise) gracefully. For software termination, you may want to look at handling the following events on the `process` object: `exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, and `unhandledRejection`.
5. **Version control** The application should make use of Github for version control. Commits should be small, be well-described in their commit messages, and contain a single change to the application.
6. **Deployment** Software should be deployed on your device, and you should be able to demonstrate its operation in class on the due date of the assignment.

---------------------------------------------

<a name="project-day-5"></a>

## 🏗 PROJECT DAY 5 - Integration #1: Server API <-> IoT/WoT Device

For PROJECT DAY 5, you'll teach your device how to report data from its sensors back to the Server API, and teach your Server API how to accept that data.

### 📆 Schedule

| PROJECT DAY    | Tue, Oct 22, 2019 |
| Assignment Due | Tue, Nov  5, 2019 |

💯 Points Possible: **250**

### 🛠 The Tools

More to come soon.

### ✅ Requirements for the Assignment

#### ⚙️ Functional Requirements

More to come soon.

#### 🔩 Source Code, Process & Deployment Requirements

More to come soon.

---------------------------------------------

<a name="project-day-6"></a>

## 🏗 PROJECT DAY 6 - Integration #2: Web Client <-> Server API

For PROJECT DAY 5, you'll teach your Server API how to serve up data in real-time to your Web Client, and teach your Web Client to read its data from the Server API.

### 📆 Schedule

| PROJECT DAY    | Thu, Oct 24, 2019 |
| Assignment Due | Thu, Nov  5, 2019 |

💯 Points Possible: **250**

### 🛠 The Tools

More to come soon.

### ✅ Requirements for the Assignment

#### ⚙️ Functional Requirements

More to come soon.

#### 🔩 Source Code, Process & Deployment Requirements

More to come soon.

---------------------------------------------

<a name="project-day-7"></a>

## 🏗 PROJECT DAY 7 - Mobile Client

For PROJECT DAY 7, you'll create a mobile app that will read and display sensor data served by the Server API.

### 📆 Schedule

| PROJECT DAY    | Tue, Nov 19, 2019 |
| Assignment Due | Tue, Dec 3, 2019  |

💯 Points Possible: **300**

### 🛠 The Tools

More to come soon.

### ✅ Requirements for the Assignment

#### ⚙️ Functional Requirements

More to come soon.

#### 🔩 Source Code, Process & Deployment Requirements

More to come soon.
