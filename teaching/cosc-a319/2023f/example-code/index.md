---
layout: page
title: Useful Code Samples<br/>COSC A319 Internet Technologies<br/>(Fall 2023)
---

The following code examples may be useful.

* <p><a href="./logger.js">logger.js</a> - A logger module exporting two functions, <code>log</code> and <code>id</code>.</p>
  <p><code>log</code> - provides a <code>console.log</code>-like facility for logging arbitrary data, but adds nanosecond times (since process start) to each log entry, helpful in understanding asynchronous operations.</p>
  <p><code>id</code> - provides the ability to create a prefixed random hexadecimal identifier of a given length.</p>
* <p><a href="./ip-formatting.js">ip-formatting.js</a> - A module exporting a single function <code>formatIPAddress</code>.</p>
  <p><code>formatIPAddress</code> - a function that takes a single <code>Buffer</code> argument of either 4 bytes or 16 bytes length, and returns the appropriately formatted human-readable IP address, either IPv4 or IPv6. If run directly, the module executes that function on an example IPv4 and IPv6 address.</p>
