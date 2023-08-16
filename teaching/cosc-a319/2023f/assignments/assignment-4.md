---
layout: page
title: "UDP Packet Parser"
subtitle: COSC A319 Internet Technologies (Fall 2023) - Assignment A4
subtitle-above: true
---
- [Summary](#summary)
- [📆 Schedule](#-schedule)
- [Background](#background)
  - [User Datagram Protocol (UDP)](#user-datagram-protocol-udp)
  - [Ports and Sockets](#ports-and-sockets)
  - [UDP Packet Structure](#udp-packet-structure)
    - [The Checksum Field and IP Pseudo-headers](#the-checksum-field-and-ip-pseudo-headers)
- [Your Assignment](#your-assignment)
  - [Expected Output](#expected-output)
  - [Bonus Challenge: Integration](#bonus-challenge-integration)
  - [Program Structure](#program-structure)
    - [A note on working with binary in JavaScript](#a-note-on-working-with-binary-in-javascript)
    - [Getting started on the assignment](#getting-started-on-the-assignment)
  - [Submission and Feedback](#submission-and-feedback)

## Summary

In this assignment, you'll create and export a function that parses
a User Datagram Protocol (UDP) packet.

## 📆 Schedule

| Assigned       | Tue, Oct 17, 2023  |
| Office hours   | [By appointment](https://bit.ly/mr-harvey-office-hours) |
| Assignment Due | Tue, Oct 24, 2023 |

## Background

### User Datagram Protocol (UDP)

UDP is a Transport layer protocol, operating on layer 4 of the layered
network model, and is often found encapsulated as the payload of Internet
Protocol version 4 (IPv4) or Internet Protocol version 6 (IPv6) packets.

UDP is a simpler protocol than its sibling protocol TCP, which we will
cover later in the course, as it provides no guarantees that a packet
reaches its destination. It is often used for data that is real-time,
or that loses value if it arrives later than intended.

In addition to its current uses, it is used as the basis for [a new proposed
Transport layer protocol QUIC](https://datatracker.ietf.org/doc/draft-ietf-quic-transport/?include_text=1)
(whose packets are encapsulated within UDP datagrams). QUIC is in turn
[proposed as the basis for the new version of the HyperText Transfer Protocol,
HTTP/3](https://datatracker.ietf.org/doc/draft-ietf-quic-http/?include_text=1).

> NOTE: This is an example of the Internet standards process in action, as these
standards, currently having **Internet Draft** status, are currently being
vetted and implemented. You can find various documents and email archives
regarding the decisions being made on these standards at [the QUIC working
group home on IETF.org](https://datatracker.ietf.org/wg/quic/documents/).

### Ports and Sockets

Addresses on the Transport layer are called ports. Ports are
16-bit (2-byte) unsigned integer values (between 0 and 65535),
and address processes on a host. (Recall that host-level
addressing is handled at the Network layer using the Internet
Protocol's addressing schemes -- versions 4 and 6.)

Although ports are represented as simple unsigned integer
values, all ports are not the same. Port numbers are managed
by the Internet Assigned Numbers Authority (IANA) in the
[_Service Name and Transport Protocol Port Numbers Registry_](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml).
There are three classes of ports:

- Well-known ports (0 - 1023): assigned and controlled
- Registered ports (1024 - 49151): not assigned or controlled,
  but can be [registered with IANA](https://www.iana.org/form/ports-services)
  by organizations/entities to prevent duplication
- Dynamic ports (49152 - 65535): used as temporary or
  private ports; not assigned, controlled or registered

You will often make use of several of the well-known ports:

- 20 & 21 - file transfer protocol (FTP), data & control
- 22 - secure shell (SSH) remote server access
- 25 - SMTP email transport
- 53 - domain name service (DNS)
- 67 & 68 - DHCP server & client, likely used by your computer to
  find an available IP address to use on your local network
- 80 - HTTP, used for web pages and web-based communications
- 110 - POP3, email access
- 115 - SFTP, secure FTP using Secure Sockets Layer (SSL) encryption
- 143 - IMAP email access
- 443 - HTTPS, secure HTTP using Secure Sockets Layer (SSL) encryption

In addition, if you use a database, you may also run into
vendor registered ports, for example:

- 1433 - default connection port for MS SQL Server processes
- 3306 - default connection port for MySQL server processes
- 5432 - default connection port for PostgreSQL server processes
- 6379 - default connection port for Redis server processes
- 27017 - default connection port for MongoDB server processes

When combined with an IP address to address a specific process
on a specific host, the combination of port and IP address is
called a socket. A socket is an abstract concept representing
the address of a process on a host, and many programming language
standard libraries have socket abstractions that you can use
when building software.

### UDP Packet Structure

The packet structure of a UDP packet involves a fixed-length
8-byte header containing four 2-byte fields:

- the source port (16-bit unsigned integer)
- the destination port (16-bit unsigned integer)
- the full length in bytes of the packet, including header (16-bit unsigned integer)
- a checksum on the packet (16-bit unsigned integer; see below for details)

The payload, called the Datagram Data, if included, can be up
to 65353 bytes. However, practically, the maximum achievable
packet length is much smaller and is determined by the send and
receive buffer capacity of the end systems, which are often set
to around 8000 bytes.

```{text}
UDP Packet Structure
|----header-----|---payload-. . .-----------|
0       4       8
----------------------------. . .------------
| ' ' ' | ' ' ' | ' ' ' ' ' . . . ' ' ' ' ' |
| 2B| 2B| 2B| 2B|     0 to 65345 bytes      |
|Src|Dst|Len|Chk|       Datagram Data       |
|Prt|Prt|   |sum| (in practice, max ~8000B) |
----------------------------. . .------------
```

#### The Checksum Field and IP Pseudo-headers

The checksum field is a special case in UDP. A product of the long
period during development of the internet when the Network and
Transport layer protocols were not distinct, the checksum of a
UDP packet is calculated on an augmented version of the packet
that includes a _pseudo-header_ of data from the encapsulating
IP packet. Because the fields in the IPv4 and IPv6 packet headers
differ significantly, so also does the UDP IPv4 pseudo-header from
the UDP IPv6 pseudo-header. Both pseudo-headers include the
host addresses for source and destination, as well as the protocol
ID for the encapsulated packet (UDP for IPv4, but could be different
for IPv6), and the UDP length value from the IP packet header. Both
pseudo-headers also employ a filler of all zeros to align data
to 4-byte boundaries.

The UDP IPv4 and UDP IPv6 pseudo-header structures are included below.
Byte 9 in the IPv4 pseudo-header, labeled `Pr` is the _Protocol_ field
of the IPv4 header. Similarly, byte 39 of the IPv6 pseudo-header,
labeled `N H` is the _Next Header_ field of the IPv6 packet header.
These fields are 1 byte each, and take unsigned 8-bit integer values
identifying the protocol of the encapsulated packet. Those [protocol
numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)
are also managed by IANA. The protocol number for UDP is 17.

```{text}
UDP IPv4 Pseudo-header Structure
0           4           8          12
-------------------------------------
|  '  '  '  |  '  '  '  |  '  '  '  |
|  4 bytes  |  4 bytes  |1B|1B| 2B  |
|   Source  |    Dest   |  |Pr| UDP |
|    IPv4   |    IPv4   |0s|  | Len |
-------------------------------------
```

```{text}
UDP IPv6 Pseudo-header Structure
0       4       8      12      16      20      24      28      32      36      40
---------------------------------------------------------------------------------
| ' ' ' | ' ' ' | ' ' ' | ' ' ' | ' ' ' | ' ' ' | ' ' ' | ' ' ' | ' ' ' | ' ' ' |
|           16 bytes            |           16 bytes            |  UDP  |     | |
|      Source IPv6 Address      |   Destination IPv6 Address    |  ULP  |     |N|
|                               |                               |  Len  | 0s  |H|
---------------------------------------------------------------------------------
```

The relevant pseudo-header is attached at the beginning of the packet,
before the UDP header, and the checksum field of the UDP header is
zero-filled. Using that data, the checksum is then calculated as the
16-bit one's compliment of the one's compliment sum of the combined
data.

You can use [the `createChecksum` function of the `raw_sockets` Node.js
package](https://www.npmjs.com/package/raw-socket#rawcreatechecksum-bufferorobject-bufferorobject-)
to compute the proper checksum for the data.

## Your Assignment

To complete this assignment, you need to write the body of the `parse`
function defined and exported from `index.js`. You do not need to worry
about asynchronous operations for this -- just be able to parse the
incoming byte `Buffer`(s) using the UDP protocol.

### Expected Output

Your function should return a JavaScript object with the fields and
structure specified below. Expected data types and descriptions are
included in parentheses.

```{text}
{
  protocol: "UDP",
  header: {
    destination_port: (16-bit Unsigned integer value),
    source_port: (16-bit Unsigned integer value),
    length: (16-bit Unsigned integer value, number of total packet bytes),
    checksum: (16-bit 1's compliment checksum including IP pseudo-header)
  },
  pseudo_header: {
    pseudo_header_protocol: ("IPv4" or "IPv6"),
    source_ip: (IPv4 or IPv6 address),
    destination_ip: (IPv4 or IPv6 address),
    protocol: (Unsigned integer value protocol identifier),
    length: (UDP length)
  },
  payload: (payload data in binary format as an Buffer with appropriate length),
  checksum_valid: (boolean, true if checksum is valid for data in packet)
}
```

### Bonus Challenge: Integration

Once this is complete and passing tests, copy this project into a new folder `lib/udp` in
your Assignment A2 project (similar to what you did with the Assignment A1 code in the
`lib/ethernet` folder). Then, use this to parse the payload from UDP packets found by your
Assignment A2 async parser, and replace the `payload` key's current `Buffer` value with the
object structure above instead.

Note that you'll need to construct a couple dummy Ethernet frames that contain UDP
data. The simplest way to do this is just to capture a few packets on your computer. If
that's too difficult, you can just generate it by following the frame and packet formats.

### Program Structure

While you must make your implementation pass automated tests that
will only use the exported `parse` function, you will likely want
to create several additional functions to help with parsing the data.
Each of these functions should be well-tested (repeatably via automation),
so that you can be confident of the accuracy and error-free quality of
your parsing code. Each of these functions should also include relevant
documentation [in JSdoc format](https://jsdoc.app/) about why they exist,
including expected inputs and outputs with data types.

In this repo, you will find a `lib` folder which contains several things
that should be helpful:

- `udp.js` file - this is where you should put the protocol-specific
  parsing code you write
- `checksum.js` file - this file exports a function `createChecksum`
  that will compute the UDP checksum on an appropriately structured
  `Buffer` (one having the correct pseudo-header prefixed to it, and
  having the checksum field zeroed out)

#### A note on working with binary in JavaScript

In this assignment (as in prior assignments in this course), you'll be
working with binary data in JavaScript. The interface for this work
will almost always be the `Buffer` class and its subclasses. Get to know
the `Buffer` class as soon as possible.

In particular, you'll need to be very familiar with the methods to read
various length unsigned integers, including the little endian (LE) and
big endian (BE) variants and how to choose which variant you need, and the
`subarray` method, as well as the typed subclasses of `Buffer`.

#### Getting started on the assignment

As with Assignment A1, in order to get started with the assignment, you'll want
to do the following things:

- Review this assignment description in detail, particularly the UDP packet structure and
  the notes about checksum calculation oddities
- Explore JavaScript [Buffer](https://nodejs.org/dist/latest-v12.x/docs/api/buffer.html)
- Explore the `raw_socket` library's [createChecksum](https://www.npmjs.com/package/raw-socket#rawcreatechecksum-bufferorobject-bufferorobject-) function
- Clone this repo to your computer
- Read through the comments and code included for you, particularly in `index.js` and `lib/EthernetSocketProcessor.js`
- Copy your the contents of your Assignment A1 repo, which should now be a working ethernet frame parser
  library, into the `lib/ethernet` folder in this repo. (You may want to exclude the `.git`, `.vscode`,
  and `.github` folders from that copy, as it may confuse Visual Studio Code to have those folders at
  multiple levels of the repo.)
- Run the following at the command line from within the project directory (use `cd <path>`, replacing
  `<path>` with the folder path to your project directory, to get there):

  ```{sh}
  nvm install 12.19
  nvm use 12.19
  npm install
  npm test
  ```

During development, you may wish to run the tests in _watch_ mode, so that each time you save a file,
the tests that file affects will run. To do this, you can use:

```{sh}
npm test -- --watch
```

This assignment will also automatically check your code style for readability. To run those tests
at your own command line, you can use:

```{sh}
npm run lint
```

### Submission and Feedback

You must submit your changes as commits to the `main` branch on the repository.
Github Classroom will create a pull request on the repository for you, titled
**Feedback**. As you push your commits on the main branch up to Github, they
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
