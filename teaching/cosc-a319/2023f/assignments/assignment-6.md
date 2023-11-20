---
layout: page
title: "IP Address Subnetter/Supernetter"
subtitle: COSC A319 Internet Technologies (Fall 2023) - Assignment A6
subtitle-above: true
---
## Summary

In this assignment, you'll create and export a classes that facilitate
subnetting or supernetting of IPv4 networks when provided an IPv4
address and target prefix length, as well as an optional current prefix
length, returning the relevant resulting network information.

## 📆 Schedule

| Assigned       | Tue, Nov 21, 2023 |
| Office hours   | [By appointment](https://bit.ly/mr-harvey-office-hours) |
| Assignment Due | Tue, Nov 28, 2023 |

## Background

### IP Addressing

The IP protocol is the basis for all internet communication, and it
operates at the network layer (layer 3) of the 5-layer Internet model.

IPv4 and IPv6 have significant differences, and almost can be thought
of as distinct protocols. One of the major differences is in the
addressing scheme. IPv4 addresses are 32-bit values often represented
in _dotted-decimal_ format, segmented into 4 8-bit portions, each
portion displayed as a decimal number between 0 and 255, with portions
delimited by a decimal point (`.`). IPv6 addresses, on the other hand, are
128-bit values, represented in 8 16-bit portions in hexadecimal form
delimited by colons (`:`). IPv6 addresses are often abbreviated by leaving
out leading zeros in each portion, replacing all-zero portions with just
a single 0 digit, and by replacing long strings of consecutive all-zero
portions with double-colons (`::`).

IP addresses represent both the ID of the network to which they belong
as well as the ID of the host machine on that network. In order to do
that, a specific number of contiguous bits on the leftmost side of the
address (in binary form) are allocated as the network ID, and the
remainder are allocated to the host ID. This location at which this
change from bits being allocated to network ID to bits being to the host
ID is called the network/host boundary. Traditionally (in IPv4), these
allocations happened at octet boundaries, resulting in network ID lengths of
8, 16, or 24 bits, depending on the type of network and its addressing needs.

For this assignment, we'll be focused on IPv4 addresses only, but the
process of subnetting and supernetting is quite similar for IPv6.

### Classful and Classless (CIDR) IPv4 Addresses

However, the way IPv4 addresses are assigned has changed over time. Early on,
there were a collection of rules for assigning IPv4 network addresses and
and setting the location of the network/host boundary for them that we now
refer to as "classful addressing". These rules resulted in excessive resources
needed to maintain and route IP traffic, particularly with respect to size of
routing tables. As the Internet grew and more networks were added, there were
concerns about exhausting the IPv4 address space. These rules involved assigning
default "subnet masks" to 5 ranges of addresses classified by their initial
1-3 bits:

- **Class A:** Addresses starting with `0` (first octet in decimal between 0
  and 127) for use on networks with between 65,535 and 16,777,214 hosts.
  Default subnet mask: 255.0.0.0
- **Class B:** Addresses starting with `10` (first octet in decimal between
  128 and 191) for use on networks with between 255 and 65,534 hosts.
  Default subnet mask: 255.255.0.0
- **Class C:** Addresses starting with `110` (first octet in decimal between
  192 and 223) for use on networks with 254 or less hosts. Default subnet
  mask: 255.255.255.0
- **Class D:** Addresses starting with `1110` (first octet in decimal between
  224 and 239) for use for IPv4 multicast traffic. Default subnet mask:
  255.255.255.0
- **Class E:** Addresses starting with `1111` (first octet in decimal between
  240 and 255) for experimental purposes. Default subnet mask: 255.255.255.0

In the late 1980s and early 1990s, the explosion of new Internet hosts (a
consequence of what is commonly referred to as the .com boom) caused pressure
on routing tables, and the rate of allocation of Class A and B network
addresses became unsustainable. Because Class C networks were not able to be
combined under the classful system, the end result of this would have been an
exhaustion of available IPv4 network addresses before the end of 1995. To prevent
this, the rules for assigning IPv4 addresses to networks changed in a few important
ways in order to allow setting the network/host address boundary within an IPv4
address optimally for the needs of the network.

The first change was the ability to use variable-length subnet masking (VLSM).
Rather than have fixed subnet masks for each class, the removal of classes as an
address construction principle allowed for any bit-length for the network ID
portion of the IPv4 address. Hence, rather than only allowing subnet masks
of 255.0.0.0 (= `1111 1111 0000 0000 0000 0000 0000 0000`), 255.255.0.0,
(= `1111 1111 1111 1111 0000 0000 0000 0000`) and 255.255.255.0
(= `1111 1111 1111 1111 1111 1111 0000 0000`), the prefix of ones in the subnet
mask could end anywere within an octed. Thus subnet masks could end not only
in 0 and 255, but also at 128, 192, 168, 224, 240, 248, 252, and 254.

Accompanying this change was a change, called classless inter-domain routing (CIDR),
to the way network addresses (and their associated subnet masks) are written.
This method of writing a network address indicates the subnet mask as the length
of the all-1s prefix of the subnet mask after the network address, separated from
the IPv4 address of the network with a slash (`/`). For example, the network address
associated with the IP address `192.168.52.199` with a subnet mask of `255.255.255.192`
would be written in CIDR form as `192.168.52.192/26`, with a host ID of `0.0.0.7`.

### Subnetting &amp; Supernetting (Aggregation)

As mentioned above, the goal of VLSM was to allow for finer-grained control over the
size of an address block assigned to a network by moving the network/host boundary
to a more optimal location within the IPv4 addresses of the network.

## Your Assignment

To complete this assignment, you need to write and export two classes:

### The `IPv4Address` class

An `IPv4Address` class that can be instantiated with:

```{javascript}
  new IPv4Address(
    /* IPv4 address in binary/unsigned integer format */
    0b00001100_00101110_11010101_00111001,
    /* IPv4 subnet mask in binary/unsigned integer format */
    0b11111111_11111111_11000000_00000000
  )
```
  
Instances of the `IPv4Address` class should have properties:

- `networkID` - binary IP network ID
- `hostID` - binary IP host ID
- `prefixLength` - integer network prefix length
- `subnetMask` - binary IP subnet mask
- `network` - an `IPNetwork` instance specifying information about the
  IPv4 network to which this address belongs

And the following methods:

- `display() -> <string>` - to convert the binary form IPv4 address
  into human-readable CIDR format

The `IPv4Address` class should have the following static methods:

- `parseIPAddress(<string> address) -> <number>` - to convert a string format address (without CIDR prefix length) into a binary number format

  - ```
    IPv4Address.parseIPAddress('12.46.213.57')
    ```

- `create(<number|string> ip4Address, <number|string> subnetMask) -> <IPv4Address>` -
  to create `IPv4Address` objects from either binary or string representations of
  the address and possibly the subnet as follows:

  - ```
    IPv4Address.create(
      /* IPv4 address in binary/unsigned integer format */
      0b00001100_00101110_11010101_00111001,
      /* IPv4 subnet mask in binary/unsigned integer format */
      0b11111111_11111111_11000000_00000000
    )
    ```

  - ```
    IPv4Address.create(
      /* IPv4 address in CIDR string format */
      '12.46.213.57/18'
    )
    ```

  - ```
    IPv4Address.create(
      /* IPv4 address on the network in string human-readable format */
      '12.46.213.57',
      /* IPv4 subnet mask on the network in string human-readable format */
      '255.255.192.0'
    )
    ```

### The `IPv4Network` class

The `IPv4Network` class that can be instantiated with:

```{javascript}
new IPv4Network(
  /* IPv4 address on the network in binary/unsigned integer format */
  0b00001100_00101110_11010101_00111001,
  /* IPv4 subnet mask in binary/unsigned integer format */
  0b11111111_11111111_11000000_00000000
)
```

`IPv4Network` instances should should have properties:

- `networkID` - binary IP network address
- `prefixLength` - the network prefix length
- `networkCIDRAddress` - the binary IP network address and integer prefix
  length combined in a human-readable CIDR format string
- `subnetMask` - binary subnet mask for the network's prefix length
- `broadcastAddress` - binary IP address used for broadcast on the network
- `hostAddressRange` - 2-element array containing the minimum and maximum
  binary host IP addresses in the network

Methods on `IPv4Network`:

- Instance method `subnet(<integer> newPrefixLength) -> <IPv4Network[]>` -
  a method that subnets the network and returns an `Array` of `IPv4Network`
  instances for each of the subnets
- Static method `supernet(<IPv4Network[]> networks) -> <IPv4Network[]>` -
  a method that takes a collection of networks and combines them into a
  minimally covering collection of as few networks as possible, returning
  an `Array` of `IPv4Networks`.  _**(Note: you cannot supernet an
  incomplete covering of the address space, so be sure that every
  address in the range of addresses covered by your supernet result
  is also covered by the one of the networks passed in.)**_
- Static method
  `create(<number|string> ip4Address, <number|string> subnetMask) -> <IPv4Network>` -
  a method that takes either an IPv4 address as a CIDR format string, or an IPv4
  address and subnet mask, and creates and returns an `IPv4Network` instance:

  - ```
    IPv4Network.create(
      /* IPv4 address on the network in binary/unsigned integer format */
      0b00001100_00101110_10001000_00101111,
      /* IPv4 subnet mask in binary/unsigned integer format */
      0b11111111_11111111_11000000_00000000
    )
    ```

  - ```
    IPv4Network.create(
      /* IPv4 network address in CIDR string format */
      '12.46.128/18'
    )
    ```

  - ```
    IPv4Network.create(
      /* IPv4 address on the network in CIDR string format */
      '12.46.136.47/18'
    )
    ```

  - ```
    IPv4Network.create(
      /* IPv4 network address in string human-readable format */
      '12.46.136.47',
      /* IPv4 subnet mask in string human-readable format */
      '255.255.192.0'
    )
    ```

### Program Structure

While you must make your implementation pass automated tests that
will only use the exports from `index.js`, you will need to create
the classes each in their own file as a library, and re-export them
from the main `index.js` file.
Each of these classes should be well-tested (repeatably via automation),
so that you can be confident of the accuracy and error-free quality of
your parsing code. Each of the classes and their methods should also
include relevant documentation [in JSdoc format](https://jsdoc.app/)
about why they exist, including expected inputs and outputs with data
types.

In this repo, you will find an `index.js` file, where the classes you are
expected to create are imported and re-exported. You may choose to augment this
with any other objects or funcitons your library needs to provide as part of
its public interface, however you should not need to.  You will also find a
`lib` folder, in which there are two empty JavaScript files -- one for each
class you will create and export.

#### A note on working with binary in JavaScript

In this assignment (as in prior assignments in this course), you'll be
working with binary data in JavaScript. The interface for this work
will almost always be the `Buffer` class and its subclasses. Get to know
the `Buffer` class as soon as possible.

In particular, you'll need to be very familiar with the methods to read
various length unsigned integers, including the little endian (LE) and
big endian (BE) variants and how to choose which variant you need, and the
`subarray` method, as well as the typed subclasses of `Buffer`.

#### Bitwise operations in JavaScript: working with subnet masks

As you'll recall from assignments A4 and A5, to work with individual bits,
you'll need to take a byte and bit-shift or bit-mask it to get the specific
bit you're looking for. For example, you to get the third bit from the left
in `0x6d = 109 = 0b01101101`, you would could do this by:

1. Create a bit mask having all zeros except the bit place you wish to
   extract, and a one in that bit position. For this example, that would
   look like: `0b00100000`.
2. Then, perform a
   [bitwise `AND` operation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
   between the byte you're extracting from and the bit mask you created.
   In JavaScript, this example looks like: `0x6d & 0b00100000`.
3. Finally, bit shift the result to remove the additional bits and get the
   flag value. In the example, you will want to do an
   [unsigned bit shift to the right](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
   by 5 positions (removing the 5 bit positions to the right of the one you
   care about): `(0x6d & 0b00100000) >>> 5`

This has relevance to creating and working with subnet masks, which are
just bit masks that operate across all 32 bits in the IPv4 address at once.

To create a subnet mask from the prefix length, you can begin with a
32-bit binary value comprised of all `1`s and do the following:

1. Start with all `1`s
2. Unsigned right shift (`>>>`) away the bits that should be `0`s
3. Left shift (`<<`) back the same amount to return to the right total length
4. Unsigned right shift (`>>>`) by `0` to ensure an unsigned integer value

For example, if the prefix length is `8`, this looks like:

```{javascript}
const prefixLength = 8;

const SUBNET_MASK_BASE = 0b11111111111111111111111111111111; // => 4294967295

const numZeroBits = 32 - prefixLength;
const subnetMask = (SUBNET_MASK_BASE >>> numZeroBits << numZeroBits >>> 0);

subnetMask // => 4278190080
subnetMask.toString(2) // => '11111111000000000000000000000000'
```

Once you have a subnet mask, finding the network ID is just a bitwise
`AND` operation:

```{javascript}
const ip4addr = Buffer.from([10, 105, 241, 58]).readUInt32BE();
// ip4addr === 0b1010011010011111000100111010
const networkID = subnetMask & ip4addr;
// networkID === 0b1010000000000000000000000000
```

And finding the host ID is a bitwise `AND` operation with the bitwise
negation (`NOT`) of the subnet mask:

```{javascript}
const ip4addr = Buffer.from([10, 105, 241, 58]).readUInt32BE();
// ip4addr === 0b1010011010011111000100111010
const hostID = ~subnetMask & ip4addr;
// hostID === 0b0000000011010011111000100111010
```

#### Getting started on the assignment

As with Assignments A1 and A4, in order to get started with the assignment, you'll want
to do the following things:

- Review this assignment description in detail, particularly the information on IP
  addresses, VLSM and CIDR, and subnetting and supernetting.
- Review JavaScript [Buffer](https://nodejs.org/dist/latest-v12.x/docs/api/buffer.html)
- Review the bitwise operators in the [MDN JavaScript Operators reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
- Clone this repo to your computer
- Re-read the "Your Assignment" section of this description, paying attention to what
  you need to create.
- Run the following at the command line from within the project directory (use
  `cd <path>`, replacing `<path>` with the folder path to your project directory,
  to get there):

  ```{sh}
  nvm install
  nvm use lts/*
  npm install
  npm test
  ```

During development, you may wish to run the tests in _watch_ mode, so that each time
you save a file, the tests that file affects will run. To do this, you can use:

```{sh}
npm test -- --watch
```

This assignment will also automatically check your code style for readability. To run
those tests at your own command line, you can use:

```{sh}
npm run lint
```

### Submission and Feedback

You must submit your changes as commits to a new branch on the repository, and
create a pull request on the repository comparing that branch against the `main`
branch. As you push your commits on the new branch up to Github, they will be
added to the activity on this pull request.

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

Once you feel you have completed the assignment, you should submit the link to your pull
request on the assignment in Canvas.

Good luck, and I look forward to seeing what you create!
