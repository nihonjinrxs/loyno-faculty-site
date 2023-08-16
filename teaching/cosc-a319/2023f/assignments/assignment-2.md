---
layout: page
title: "Asynchronous JavaScript:<br />Ethernet Frame Data Parser"
subtitle: COSC A319 Internet Technologies (Fall 2023) - Assignment A2
subtitle-above: true
---
- [📆 Schedule](#-schedule)
- [Background](#background)
  - [Ethernet Packets, Ethernet Frames and the Inter-packet Gap](#ethernet-packets-ethernet-frames-and-the-inter-packet-gap)
- [Your Assignment](#your-assignment)
  - [Expected Output](#expected-output)
  - [Program Structure](#program-structure)
    - [A note on working with asynchronous events and streams in JavaScript](#a-note-on-working-with-asynchronous-events-and-streams-in-javascript)
    - [Getting started on the assignment](#getting-started-on-the-assignment)
  - [Submission and Feedback](#submission-and-feedback)

In this assignment, you'll create and export a class that attaches
to a socket interface that presents a `stream.Readable`-compatible
interface to read a stream of binary network data and parse out
Ethernet frames as they occur, handling both the DIX Ethernet II
and IEEE 802.3 formats.

Ethernet frame addressing, being a data link layer protocol, uses a
point-to-point addressing scheme called the media access control (MAC)
addressing, a hardware-based addressing scheme that assigns a unique
identifier to each network interface controller (NIC), usually available
burned into the NIC's firmware.

## 📆 Schedule

| Assigned       | Tue, Sep 19, 2023  |
| Office hours   | [By appointment](https://bit.ly/mr-harvey-office-hours) |
| Assignment Due | Tue, Sep 26, 2023 |

## Background

### Ethernet Packets, Ethernet Frames and the Inter-packet Gap

Ethernet lives on layer 2 (Data Link) of the layered network model,
but is transmitted over layer 1 (Physical). On the Physical layer,
Ethernet packets are transmitted over transmission media separated
by an inter-packet gap of minimum 12 bytes (octets). When designed, this
gap was intended to provide a delay between packets; now, however, a
12 byte gap provides minimal time delay, and acts simply as a separation
between packets. Because of this, in some cases, that gap is now reduced
to 8 bytes. (In this assignment, to simplify things, we'll only be concerned
with an inter-packet gap of at least 12 bytes.) Inter-packet gap looks
like idle signal, generally a high voltage level on the wire, or all `1`
bits. You can find idle signal by searching for repeated `FF` octets.

A new Ethernet packet is signified by a preamble of 7 bytes (octets) of
alternating 1s and 0s, followed by a 1-byte *start frame delimiter (SFD)*
`10101011`. In hexadecimal, this preamble and SFD sequence is
`AA AA AA AA AA AA AA AB`.

An Ethernet frame is the layer 2 routing portion of the packet, and begins
immediately after the SFD.

So, to find an Ethernet frame in a stream of data, you'll need to first
identify the preamble and SFD. Then, capture from the octet after the SFD
until you see 12 or more octets of idle signal. The captured packet can
then be trimmed of the additional idle signal and parsed. Use the frame
check sequence to ensure that you've captured a complete frame.

## Your Assignment

To complete this assignment, you need to write the body of the `parseFrames`
function defined and exported from `index.js`. In addition, you'll need to
implement the `EthernetSocketProcessor`, an `EventEmitter` class that listens
to a socket and parses Ethernet frames as data arrives and emits them in
`data` events.

This processing is inherently asychronous. Sockets generally implement the
`streams.Readable` interface, so you can look at that class in the Node.js
documentation to get an idea of how data will come into your class.

Once you've found the frames that must be parsed, you'll use your frame
parser from assignment A1 to parse the fields out of the frame, so that you
can emit a parsed JavaScript object representing the frame's data.

### Expected Output

Your class should extend/implement either `events.EventEmitter` or one of the
writable `stream` classes (which implement `events.EventEmitter` already), and
emit 'data' events with the same JavaScript object structure as in Assignment A1
(included below, inside the array, as a reminder) as the event's message. The
exported function in `index.js` should also capture all frames parsed along the
way, and should return a JavaScript `Promise` object that resolves with an array
of those parsed frame objects once the socket is closed.

```{text}
[
  {
    protocol: (either "Ethernet II" or "IEEE 802.3"),
    header: {
      destinationMAC: (MAC address binary value as length 6 Buffer),
      destination: (MAC Address human-readable text string),
      sourceMAC: (MAC address binary value as length 6 Buffer),
      source: (MAC Address human-readable text string),
      type: (16-bit Unsigned integer value),
      length: (16-bit Unsigned integer value, number of payload bytes),
      llc: { // only include if relevant to protocol
        dsap: (Unsigned Integer),
        ssap: (Unsigned Integer),
        control: (Unsigned Integer)
      },
      snap_oui: (MAC OUI binary value as length 3 Buffer, if relevant to protocol)
    },
    payload: (payload data in binary format as an Buffer with appropriate length),
    frame_check: (Integer CRC-32 frame check sequence value),
    frame_check_valid: (Boolean, true if computed FCS matches)
  },
  ...
]
```

### Program Structure

While you must make your implementation pass automated tests that
will only use the exported `parseFrames` function and the
`EthernetSocketProcessor`, class you may want to add additional methods
or classes that assist in finding, segmenting and parsing the stream data.
Each of these functions should be well-tested (repeatably via automation),
so that you can be confident of the accuracy and error-free quality of
your parsing code. Each of these functions should also include relevant
documentation [in JSdoc format](https://jsdoc.app/) about why they exist,
including expected inputs and outputs with data types. (Existing code
both here and in Assignment A1 are documented using this format, and some
documentation has already been written for you for the `EthernetSocketProcessor`
class, which you can use as a specification for what that class should do.)

In this repo, you will find a `lib` folder which contains several things
that should be helpful:

- `ethernet` folder - this is where you should copy the entire assignment A1
  project directory so that you can import it as `ethernet` into your new project
- `EthernetSocketProcessor.js` - an empty module where you can create your
  socket processor class that emits the appropriate events.

In addition to that, you'll find the main files in the repo root containing
helpful tests and starter code:

- `index.js` - the starting point for your class, which should _only_ import and
  export the class for use (the class should be created in its own module in `lib`).
- `index.test.js` - a suite of tests that will assess the correctness of your
  your implementation.

#### A note on working with asynchronous events and streams in JavaScript

In this assignment, you'll be working with binary data coming into your
class through a mock network socket which is a subclass of the `stream.Readable`
class in JavaScript. Data pushed over the this mock socket will be in the form
of binary data `Buffer` objects. There are several ways to handle `stream`-based data,
which you can learn about
[in the Node.js docs on `Stream`](https://nodejs.org/dist/latest-v12.x/docs/api/stream.html).

The output of your class should be communicated by emitting JavaScript `events`.
You can learn more about working with events
[in the Node.js docs on `Events`](https://nodejs.org/dist/latest-v12.x/docs/api/events.html).

Because the output of your class will need to emit events, you may want to try
[making your class subclass `EventEmitter`](https://eloquentjavascript.net/06_object.html),
and then using the event-based reading mode of the input `stream.Readable`-compatible class,
adding listeners for relevant events to get the input data from the mock network socket.

#### Getting started on the assignment

As with Assignment A1, in order to get started with the assignment, you'll want
to do the following things:

- Review this assignment description in detail
- Explore JavaScript [Events and `EventEmitter`](https://nodejs.org/dist/latest-v12.x/docs/api/events.html)
- Explore JavaScript [Readable Streams](https://nodejs.org/dist/latest-v12.x/docs/api/stream.html#stream_readable_streams)
- Clone this repo to your computer
- Read through the comments and code included for you, particularly in `index.js` and `lib/EthernetSocketProcessor.js`
- Copy your the contents of your Assignment A1 repo, which should now be a working ethernet frame parser
  library, into the `lib/ethernet` folder in this repo. (You may want to exclude the `.git`, `.vscode`,
  and `.github` folders from that copy, as it may confuse Visual Studio Code to have those folders at
  multiple levels of the repo.)
- Run the following at the command line from within the project directory (use `cd <path>`, replacing
  `<path>` with the folder path to your project directory, to get there):

  ```{sh}
  nvm use 12.18
  npm install
  npm test
  ```

This assignment will also automatically check your code style for readability. To run those tests
at your own command line, you can use:

```{sh}
npm run lint
```

### Submission and Feedback

You must submit your changes as commits to the `master` branch on the repository.
Github Classroom will create a pull request on the repository for you, titled
**Feedback**. As you push your commits on the master branch up to Github, they
will be added to the activity on this pull request.

In addition to the synchronous mechanism of requesting help via office hours
appointments, this pull request will be your mechanism for asking questions and
requesting help asynchronously during the course of this assignment. I will also
use this pull request to provide feedback on your work. I will provide feedback on
the completed assignment within a week of the due date of the assignment.
If you push your code earlier than the due date, I will try to provide
feedback as needed earlier.

I suggest that you push your work to Github as you make commits, and that you make
commits frequently as you work on the assignment. This way, if you have questions,
I will be able to review your work-in-progress and give more relevant answers and
feedback. If you have a question specific to a particular area of the code, note that
you can add comments inline on the pull request by clicking on the **Files changed** tab
of the pull request, then clicking the little blue `+` icon that appears when you hover
over a specific line of code.

I will do my best to respond to questions posed during the course of the assignment with
in a day of the ask. **If you want to ask a question or request early feedback, please tag
me in a comment on the pull request: `@nihonjinrxs`.**

Good luck, and I look forward to seeing what you create!
