---
layout: post
title: Network Inspection Basics
tags:
- how-to
- cosc-a319
- networking
- internet
- wireshark
- powershell
- bash
---
- [Packet Capture and Inspection with Wireshark](#packet-capture-and-inspection-with-wireshark)
- [Command-line tools for network inspection](#command-line-tools-for-network-inspection)
  - [Check whether another machine is on and listening for requests](#check-whether-another-machine-is-on-and-listening-for-requests)
  - [See the network route to a computer](#see-the-network-route-to-a-computer)
  - [See the network interfaces on your computer](#see-the-network-interfaces-on-your-computer)
  - [See DNS information](#see-dns-information)
  - [Get connection information for interface connections](#get-connection-information-for-interface-connections)

## Packet Capture and Inspection with Wireshark

In order to inspect network traffic, you can use a packet capture tool. These tools watch network traffic as it comes through, and collect the packets in memory or in a file, and are then able to parse and display such packet data for human inspection.

One of the most popular of these is [Wireshark](https://www.wireshark.org/) (along with its command-line companion `tshark`).

To install it, download the installer and follow the various instructions, including installing whichever additional tools are needed.

Once installed, you can start the application, then click the shark fin at the top left to being recording packet traffic. Viewing the center area of the app, recorded packets show in the first pane, with parsed layers/protocols in the second and raw data in the third.

You can also do similar recording from the command line using the `tshark` tool that is installed with Wireshark. For more on how `tshark` works, use `tshark --help`.

## Command-line tools for network inspection

In the following sections, I'll present examples of various network inspection tasks you may want to do, as well as a few options for how to do them in a Linux/Mac setting from the `bash` shell and in a Windows setting from a PowerShell.

### Check whether another machine is on and listening for requests

On Linux/Mac:

```{bash}
$ ping google.com
PING google.com(dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e)) 56 data bytes
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=1 ttl=114 time=43.5 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=2 ttl=114 time=51.0 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=3 ttl=114 time=45.3 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=4 ttl=114 time=39.8 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=5 ttl=114 time=37.9 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=6 ttl=114 time=38.0 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=7 ttl=114 time=39.7 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=8 ttl=114 time=40.5 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=9 ttl=114 time=37.6 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=10 ttl=114 time=39.7 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=11 ttl=114 time=46.2 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=12 ttl=114 time=38.7 ms
64 bytes from dfw25s26-in-x0e.1e100.net (2607:f8b0:4000:813::200e): icmp_seq=13 ttl=114 time=37.5 ms
^C
--- google.com ping statistics ---
13 packets transmitted, 13 received, 0% packet loss, time 12017ms
rtt min/avg/max/mdev = 37.527/41.233/51.009/3.955 ms
```

On Windows, in PowerShell:

```{powershell}
PS > Test-Connection google.com

Source        Destination     IPV4Address      IPV6Address                              Bytes    Time(ms)
------        -----------     -----------      -----------                              -----    --------
COSCLAB08     google.com      172.217.9.46     2607:f8b0:4009:816::200e                 32       57
COSCLAB08     google.com      172.217.9.46     2607:f8b0:4009:816::200e                 32       60
COSCLAB08     google.com      172.217.9.46     2607:f8b0:4009:816::200e                 32       69
COSCLAB08     google.com      172.217.9.46     2607:f8b0:4009:816::200e                 32       55


​PS > Test-NetConnection -ComputerName google.com -InformationLevel Detailed


ComputerName           : google.com
RemoteAddress          : 2607:f8b0:4009:816::200e
NameResolutionResults  : 2607:f8b0:4009:816::200e
                         172.217.9.46
InterfaceAlias         : Ethernet
SourceAddress          : 2600:6c63:4380:14b7:bc61:889c:f8ef:4efd
NetRoute (NextHop)     : fe80::6238:e0ff:fea5:d398
PingSucceeded          : True
PingReplyDetails (RTT) : 57 ms
```

### See the network route to a computer

On Linux/Mac:

```{bash}
$ traceroute google.com
traceroute to google.com (172.217.9.142), 64 hops max
  1   192.0.2.1  97.860ms  97.688ms  93.933ms 
  2   141.164.4.1  96.170ms  94.909ms  * 
  3   141.164.5.41  94.872ms  94.588ms  89.150ms 
  4   4.16.100.25  147.672ms  139.255ms  146.496ms 
  5   *  *  * 
  6   *  *  * 
  7   *  *  * 
  8   172.217.9.142  140.854ms  142.441ms  143.628ms
```

```{bash}
$ tracepath google.com
 1?: [LOCALHOST]                        0.014ms pmtu 1500
 1:  2600:6c63:4380:14b7:6238:e0ff:fea5:d398               2.847ms 
 1:  2600:6c63:4380:14b7:6238:e0ff:fea5:d398               4.298ms 
 2:  no reply
 3:  2001-0506-0100-0862-0000-0000-0000-0004.inf6.spectrum.com  17.261ms 
 4:  2001-0506-0100-0865-0000-0000-0000-000b.inf6.spectrum.com  23.269ms 
 5:  2001-0506-0100-0826-0000-0000-0000-0002.inf6.spectrum.com  18.322ms 
 6:  bbr02slidla-tge0-0-2-0.slid.la.charter.com           14.976ms asymm  5 
 7:  bbr01sgnwmi-tge0-2-0-2.sgnw.mi.charter.com           45.626ms asymm  6 
 8:  prr01snjsca-tge1-2.snjs.ca.charter.com               50.761ms asymm  7 
 9:  2001:4860:1:1:0:1:0:e8                               42.139ms 
10:  no reply
11:  no reply
12:  no reply
13:  no reply
14:  no reply
15:  no reply
16:  no reply
17:  no reply
18:  no reply
19:  no reply
20:  no reply
21:  no reply
22:  no reply
23:  no reply
24:  no reply
25:  no reply
26:  no reply
27:  no reply
28:  no reply
29:  no reply
30:  no reply
     Too many hops: pmtu 1500
     Resume: pmtu 1500
```

On Windows in PowerShell:

```{powershell}
​PS > Test-NetConnection google.com -TraceRoute


ComputerName           : google.com
RemoteAddress          : 2607:f8b0:4009:816::200e
InterfaceAlias         : Ethernet
SourceAddress          : 2600:6c63:4380:14b7:bc61:889c:f8ef:4efd
PingSucceeded          : True
PingReplyDetails (RTT) : 59 ms
TraceRoute             : 2600:6c63:4380:14b7:6238:e0ff:fea5:d398
                         ::
                         2001:506:100:842::4
                         2001:506:100:803::7
                         2001:506:100:807::9
                         2001:506:100:53::1
                         ::
                         2001:4860:1:1:0:1:0:e8
                         2607:f8b0:8220::1
                         2001:4860:0:1::56a
                         2001:4860:0:1167::3
                         2001:4860::c:4001:557a
                         ::
                         2001:4860::9:4000:eeb8
                         2001:4860:0:1::2169
                         2607:f8b0:4009:816::200e
```

### See the network interfaces on your computer

On Linux/Mac:

```{bash}
$ ifconfig
docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        ether 02:42:2c:42:08:1c  txqueuelen 0  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 1654595  bytes 201631581 (201.6 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 1654595  bytes 201631581 (201.6 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlp59s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.137  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 2600:6c63:4380:14b7:4265:4fa1:b7ea:99c4  prefixlen 64  scopeid 0x0<global>
        inet6 2600:6c63:4380:14b7:548b:484a:1f81:f0e0  prefixlen 64  scopeid 0x0<global>
        inet6 fe80::7da6:5ccf:9865:42a5  prefixlen 64  scopeid 0x20<link>
        ether 18:56:80:b6:19:ee  txqueuelen 1000  (Ethernet)
        RX packets 786306  bytes 839939553 (839.9 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 270490  bytes 84509961 (84.5 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

On Windows in PowerShell:

```{powershell}
PS > Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Realtek PCIe GBE Family Controller            5 Up           18-66-DA-23-C7-A3         1 Gbps
```

```{powershell}
PS > Get-NetAdapter -Name *Ethernet*

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Realtek PCIe GBE Family Controller            5 Up           18-66-DA-23-C7-A3         1 Gbps
```

```{powershell}
PS > Get-NetAdapter | ft Name, Status, LinkSpeed

Name     Status LinkSpeed
----     ------ ---------
Ethernet Up     1 Gbps
```

```{powershell}
PS > Get-NetAdapter | ft Name, DriverName, DriverVersion, DriverInformation

Name     DriverName                                DriverVersion DriverInformation
----     ----------                                ------------- -----------------
Ethernet \SystemRoot\system32\DRIVERS\Rt64win7.sys 7.92.115.2015 Driver Date 2015-01-15 Version 7.92.115.2015 NDIS 6.20
```

```{powershell}
PS > Get-NetAdapterHardwareInfo

Name                           Segment Bus Device Function Slot NumaNode PcieLinkSpeed PcieLinkWidth Version
----                           ------- --- ------ -------- ---- -------- ------------- ------------- -------
Ethernet                             0   2      0        0    8               2.5 GT/s             1 1.1
```

```{powershell}
PS > Get-NetIPConfiguration

InterfaceAlias       : Ethernet
InterfaceIndex       : 5
InterfaceDescription : Realtek PCIe GBE Family Controller
NetProfile.Name      : Network 2
IPv6Address          : 2600:6c63:4380:14b7:bc61:889c:f8ef:4efd
IPv4Address          : 192.168.1.124
IPv6DefaultGateway   : fe80::6238:e0ff:fea5:d398
IPv4DefaultGateway   : 192.168.1.1
DNSServer            : 2600:6c63:4380:14b7:6238:e0ff:fea5:d398
                       2600:6c63:4380:14b7:6238:e0ff:fea5:d398
                       192.168.1.1
```

```{powershell}
PS > Get-NetAdapter -Name "Ethernet" | Get-NetIPAddress

IPAddress         : fe80::bc61:889c:f8ef:4efd%5
InterfaceIndex    : 5
InterfaceAlias    : Ethernet
AddressFamily     : IPv6
Type              : Unicast
PrefixLength      : 64
PrefixOrigin      : WellKnown
SuffixOrigin      : Link
AddressState      : Preferred
ValidLifetime     : Infinite ([TimeSpan]::MaxValue)
PreferredLifetime : Infinite ([TimeSpan]::MaxValue)
SkipAsSource      : False
PolicyStore       : ActiveStore

IPAddress         : 2600:6c63:4380:14b7:e9ed:2362:7268:c42f
InterfaceIndex    : 5
InterfaceAlias    : Ethernet
AddressFamily     : IPv6
Type              : Unicast
PrefixLength      : 128
PrefixOrigin      : RouterAdvertisement
SuffixOrigin      : Random
AddressState      : Preferred
ValidLifetime     : 3.05:08:57
PreferredLifetime : 16:29:59
SkipAsSource      : False
PolicyStore       : ActiveStore

IPAddress         : 2600:6c63:4380:14b7:bc61:889c:f8ef:4efd
InterfaceIndex    : 5
InterfaceAlias    : Ethernet
AddressFamily     : IPv6
Type              : Unicast
PrefixLength      : 64
PrefixOrigin      : RouterAdvertisement
SuffixOrigin      : Link
AddressState      : Preferred
ValidLifetime     : 3.05:08:57
PreferredLifetime : 3.05:08:57
SkipAsSource      : False
PolicyStore       : ActiveStore

IPAddress         : 192.168.1.124
InterfaceIndex    : 5
InterfaceAlias    : Ethernet
AddressFamily     : IPv4
Type              : Unicast
PrefixLength      : 24
PrefixOrigin      : Dhcp
SuffixOrigin      : Dhcp
AddressState      : Preferred
ValidLifetime     : 16:50:55
PreferredLifetime : 16:50:55
SkipAsSource      : False
PolicyStore       : ActiveStore
```

### See DNS information

On Linux/Mac:

```{bash}
$ nslookup google.com
Server:		141.164.24.204
Address:	141.164.24.204#53

Non-authoritative answer:
Name:	google.com
Address: 172.217.9.142
Name:	google.com
Address: 2607:f8b0:4000:813::200e
```

```{bash}
$ dig google.com

; <<>> DiG 9.11.3-1ubuntu1.13-Ubuntu <<>> google.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 42738
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 4, ADDITIONAL: 9

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
; COOKIE: 8db9db3b3299199175d14a255f51f340e4c5bc5dd2ca3e05 (good)
;; QUESTION SECTION:
;google.com.			IN	A

;; ANSWER SECTION:
google.com.		68	IN	A	172.217.9.142

;; AUTHORITY SECTION:
google.com.		41332	IN	NS	ns1.google.com.
google.com.		41332	IN	NS	ns3.google.com.
google.com.		41332	IN	NS	ns2.google.com.
google.com.		41332	IN	NS	ns4.google.com.

;; ADDITIONAL SECTION:
ns2.google.com.		41332	IN	A	216.239.34.10
ns1.google.com.		41332	IN	A	216.239.32.10
ns3.google.com.		41332	IN	A	216.239.36.10
ns4.google.com.		41332	IN	A	216.239.38.10
ns2.google.com.		41332	IN	AAAA	2001:4860:4802:34::a
ns1.google.com.		41332	IN	AAAA	2001:4860:4802:32::a
ns3.google.com.		41332	IN	AAAA	2001:4860:4802:36::a
ns4.google.com.		41332	IN	AAAA	2001:4860:4802:38::a

;; Query time: 98 msec
;; SERVER: 141.164.24.204#53(141.164.24.204)
;; WHEN: Fri Sep 04 02:56:48 CDT 2020
;; MSG SIZE  rcvd: 331
```

On Windows in PowerShell:

```{powershell}
PS > Resolve-DnsName google.com

Name                                           Type   TTL   Section    IPAddress
----                                           ----   ---   -------    ---------
google.com                                     AAAA   276   Answer     2607:f8b0:4009:803::200e
google.com                                     A      84    Answer     172.217.4.46
```

NOTE: Unlike Linux, Windows maintains a DNS cache table which can sometimes have stale data. To see what's in the cache:

```{powershell}
​PS > Get-DnsClientCache

Entry                     RecordName                Record Status    Section TimeTo Data   Data
                                                    Type                     Live   Length
-----                     ----------                ------ ------    ------- ------ ------ ----
38.86.86.99.in-addr.arpa  38.86.86.99.in-addr.arpa  PTR    Success   Answer   78678      8 server-99-86-86-38.iah50.... wiki.archlinux.org        wiki.archlinux.org        CNAME  Success   Answer   17672      8 apollo.archlinux.org
wiki.archlinux.org        apollo.archlinux.org      AAAA   Success   Answer   17672     16 2a01:4f8:172:1d86::1
wiki.archlinux.org        wiki.archlinux.org        CNAME  Success   Answer   16724      8 apollo.archlinux.org
wiki.archlinux.org        apollo.archlinux.org      A      Success   Answer   16724      4 138.201.81.199
...
addons-pa.clients6.goo... addons-pa.clients6.goo... A      Success   Answer      53      4 216.58.192.170
github.githubassets.com   github.githubassets.com   A      Success   Answer     316      4 185.199.108.154
github.githubassets.com   github.githubassets.com   A      Success   Answer     316      4 185.199.109.154
github.githubassets.com   github.githubassets.com   A      Success   Answer     316      4 185.199.110.154
github.githubassets.com   github.githubassets.com   A      Success   Answer     316      4 185.199.111.154
www.chilton-computing.... www.chilton-computing.... CNAME  Success   Answer    3251      8 www.dataweb.clrc.ac.uk
www.chilton-computing.... www.dataweb.clrc.ac.uk    A      Success   Answer    3251      4 130.246.135.175
```

And to clear the DNS cache:

```{powershell}
PS > Clear-DnsClientCache
​PS > Get-DnsClientCache
​PS >
```

### Get connection information for interface connections

On Linux/Mac:

```{bash}
# see open sockets/ports
netstat -p

# statistics on all ports
netstat -s

# routing table info
netstat -r
```

```{bash}
# all tcp sockets, connected + listening
ss -ta

# all listening tcp sockets
ss -lt

# all udp sockets
ss -ua

# all unix sockets
ss -lx
```

On Windows in PowerShell:

```{powershell}
​PS > Get-NetTCPConnection

LocalAddress                        LocalPort RemoteAddress                       RemotePort State       AppliedSetting ------------                        --------- -------------                       ---------- -----       -------------- ::                                  52544     ::                                  0          Bound
::                                  49828     ::                                  0          Bound
::                                  49672     ::                                  0          Bound
2600:6c63:4380:14b7:e9ed:2362:72... 52544     2607:f8b0:4009:816::2005            443        Established Internet
2600:6c63:4380:14b7:e9ed:2362:72... 52538     2606:2800:11f:85d:13e0:11e9:1a6:... 80         TimeWait
2600:6c63:4380:14b7:e9ed:2362:72... 49828     2607:f8b0:4001:c12::bc              5228       Established Internet
2600:6c63:4380:14b7:e9ed:2362:72... 49672     2605:380:57:351:162:250:7:74        5938       Established Internet
::                                  49670     ::                                  0          Listen
::                                  49668     ::                                  0          Listen
::                                  49667     ::                                  0          Listen

...

0.0.0.0                             49704     0.0.0.0                             0          Bound
0.0.0.0                             49678     0.0.0.0                             0          Bound
0.0.0.0                             49677     0.0.0.0                             0          Bound
192.168.1.124                       52543     52.204.191.76                       443        TimeWait
192.168.1.124                       52541     34.224.141.128                      443        TimeWait
192.168.1.124                       52013     18.205.93.255                       443        CloseWait   Internet
127.0.0.1                           51755     0.0.0.0                             0          Listen
192.168.1.124                       49803     192.168.1.142                       8009       Established Internet
192.168.1.124                       49758     18.205.93.208                       443        Established Internet
```

```{powershell}
​PS > Get-NetTCPConnection -State Established

LocalAddress                        LocalPort RemoteAddress                       RemotePort State       AppliedSetting ------------                        --------- -------------                       ---------- -----       -------------- 2600:6c63:4380:14b7:e9ed:2362:72... 52544     2607:f8b0:4009:816::2005            443        Established Internet
2600:6c63:4380:14b7:e9ed:2362:72... 49828     2607:f8b0:4001:c12::bc              5228       Established Internet
2600:6c63:4380:14b7:e9ed:2362:72... 49672     2605:380:57:351:162:250:7:74        5938       Established Internet
192.168.1.124                       49803     192.168.1.142                       8009       Established Internet
192.168.1.124                       49758     18.205.93.208                       443        Established Internet
192.168.1.124                       49753     52.202.62.248                       443        Established Internet
127.0.0.1                           49744     127.0.0.1                           49743      Established Internet
127.0.0.1                           49743     127.0.0.1                           49744      Established Internet
127.0.0.1                           49738     127.0.0.1                           5939       Established Internet
192.168.1.124                       49704     52.230.222.68                       443        Established Internet
127.0.0.1                           49678     127.0.0.1                           49676      Established Internet
127.0.0.1                           49677     127.0.0.1                           49676      Established Internet
127.0.0.1                           49676     127.0.0.1                           49677      Established Internet
127.0.0.1                           49676     127.0.0.1                           49678      Established Internet
127.0.0.1                           5939      127.0.0.1                           49738      Established Internet
```
