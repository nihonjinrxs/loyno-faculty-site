---
layout: post
title: Network Inspection Basics
---
(Currently a draft... more to come soon.)

Check whether another machine is on and listening for requests

Linux:
    ping google.com
Windows:
    Test-Connection google.com
    Test-NetConnection -ComputerName google.com -InformationLevel Detailed

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



See the network route to a computer

Linux:
    traceroute google.com
    tracepath google.com
Windows:
    Test-NetConnection google.com -TraceRoute


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




See the network interfaces on your computer

Linux:
    ifconfig
Windows PowerShell
    Get-NetAdapter
    Get-NetAdapter -Name *Ethernet*
    Get-NetAdapter | ft Name, Status, LinkSpeed
    Get-NetAdapter | ft Name, DriverName, DriverVersion, DriverInformation, DriverFileName
    Get-NetAdapterHardwareInfo
    Get-NetIPConfiguration
    Get-NetAdapter -Name "Local Area Connection" | Get-NetIPAddress



​C:\Users\rharvey\code\cmder                                                                                            
PS > Get-NetAdapter                                                                                                     
                                                                                                                        
Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed 
----                      --------------------                    ------- ------       ----------             --------- 
Ethernet                  Realtek PCIe GBE Family Controller            5 Up           18-66-DA-23-C7-A3         1 Gbps 
                                                                                                                        
                                                                                                                        
​C:\Users\rharvey\code\cmder                                                                                            
PS > Get-NetAdapter -Name *Ethernet*                                                                                    
                                                                                                                        
Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed 
----                      --------------------                    ------- ------       ----------             --------- 
Ethernet                  Realtek PCIe GBE Family Controller            5 Up           18-66-DA-23-C7-A3         1 Gbps 
                                                                                                                        
                                                                                                                        
​C:\Users\rharvey\code\cmder                                                                                            
PS > Get-NetAdapter | ft Name, Status, LinkSpeed                                                                        
                                                                                                                        
Name     Status LinkSpeed                                                                                               
----     ------ ---------                                                                                               
Ethernet Up     1 Gbps                                                                                                  
                                                                                                                        
                                                                                                                        
​C:\Users\rharvey\code\cmder                                                                                            
PS > Get-NetAdapter | ft Name, DriverName, DriverVersion, DriverInformation                                             
                                                                                                                        
Name     DriverName                                DriverVersion DriverInformation                                      
----     ----------                                ------------- -----------------                                      
Ethernet \SystemRoot\system32\DRIVERS\Rt64win7.sys 7.92.115.2015 Driver Date 2015-01-15 Version 7.92.115.2015 NDIS 6.20 
                                                                                                                        
                                                                                                                        
​C:\Users\rharvey\code\cmder                                                                                            
PS > Get-NetAdapterHardwareInfo                                                                                         
                                                                                                                        
Name                           Segment Bus Device Function Slot NumaNode PcieLinkSpeed PcieLinkWidth Version            
----                           ------- --- ------ -------- ---- -------- ------------- ------------- -------            
Ethernet                             0   2      0        0    8               2.5 GT/s             1 1.1                
                                                                                                                        
                                                                                                                        
​C:\Users\rharvey\code\cmder                                                                                            
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
                                                                                                                        
                                                                                                                        
                                                                                                                        
​C:\Users\rharvey\code\cmder                                                                                            
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
                                                                                                                        


See DNS information

Linux:
    nslookup 

Windows PowerShell:
    Resolve-DnsName google.com
--> Oddities due to Windows DNS caching
    Get-DnsClientCache
    Clear-DnsClientCache

                                                                                                                        
​C:\Users\rharvey\code\cmder                                                                                            
PS > Resolve-DnsName google.com                                                                                         
                                                                                                                        
Name                                           Type   TTL   Section    IPAddress                                        
----                                           ----   ---   -------    ---------                                        
google.com                                     AAAA   276   Answer     2607:f8b0:4009:803::200e                         
google.com                                     A      84    Answer     172.217.4.46                                     
                                                                                                                        

​PS > Get-DnsClientCache

Entry                     RecordName                Record Status    Section TimeTo Data   Data
                                                    Type                     Live   Length
-----                     ----------                ------ ------    ------- ------ ------ ----
38.86.86.99.in-addr.arpa  38.86.86.99.in-addr.arpa  PTR    Success   Answer   78678      8 server-99-86-86-38.iah50.... wiki.archlinux.org        wiki.archlinux.org        CNAME  Success   Answer   17672      8 apollo.archlinux.org
wiki.archlinux.org        apollo.archlinux.org      AAAA   Success   Answer   17672     16 2a01:4f8:172:1d86::1
wiki.archlinux.org        wiki.archlinux.org        CNAME  Success   Answer   16724      8 apollo.archlinux.org
wiki.archlinux.org        apollo.archlinux.org      A      Success   Answer   16724      4 138.201.81.199
array607.prod.do.dsp.m... array607.prod.do.dsp.m... A      Success   Answer    2211      4 40.69.216.251
play.google.com           play.google.com           AAAA   Success   Answer      87     16 2607:f8b0:4009:813::200e
play.google.com           play.google.com           A      Success   Answer      67      4 172.217.0.14
chat-pa.clients6.googl... chat-pa.clients6.googl... AAAA   Success   Answer      76     16 2607:f8b0:4009:810::200a
chat-pa.clients6.googl... chat-pa.clients6.googl... A      Success   Answer      71      4 172.217.4.74
212.154.216.95.in-addr... 212.154.216.95.in-addr... PTR    Success   Answer   58200      8 static.212.154.216.95.cli... ssl.gstatic.com           ssl.gstatic.com           AAAA   Success   Answer      35     16 2607:f8b0:4009:805::2003
ssl.gstatic.com           ssl.gstatic.com           A      Success   Answer      15      4 172.217.6.3
ms-vscode.gallery.vsas... ms-vscode.gallery.vsas... A      Success   Answer    2689      4 13.107.6.175
beacons.gcp.gvt2.com      beacons.gcp.gvt2.com      CNAME  Success   Answer     115      8 beacons-handoff.gcp.gvt2.com beacons.gcp.gvt2.com      beacons-handoff.gcp.gv... AAAA   Success   Answer     115     16 2607:f8b0:4009:816::2003
guake-project.org         guake-project.org         AAAA   Success   Answer    6850     16 2001:4b98:dc0:950::138
guake-project.org         guake-project.org         A      Success   Answer    6850      4 217.70.180.138
software.schmorp.de       software.schmorp.de       CNAME  Success   Answer   17651      8 www2.schmorp.de
software.schmorp.de       www2.schmorp.de           A      Success   Answer   17651      4 5.9.56.12
ctldl.windowsupdate.com   ctldl.windowsupdate.com   CNAME  Success   Answer      18      8 au-bg-shim.trafficmanager... ctldl.windowsupdate.com   au-bg-shim.trafficmana... CNAME  Success   Answer      18      8 audownload.windowsupdate.... ctldl.windowsupdate.com   audownload.windowsupda... CNAME  Success   Answer      18      8 wu.azureedge.net
ctldl.windowsupdate.com   wu.azureedge.net          CNAME  Success   Answer      18      8 wu.ec.azureedge.net
ctldl.windowsupdate.com   wu.ec.azureedge.net       CNAME  Success   Answer      18      8 wu.wpc.apr-52dd2.edgecast... ctldl.windowsupdate.com   wu.wpc.apr-52dd2.edgec... CNAME  Success   Answer      18      8 hlb.apr-52dd2-0.edgecastd... ctldl.windowsupdate.com   hlb.apr-52dd2-0.edgeca... CNAME  Success   Answer      18      8 cs11.wpc.v0cdn.net
ctldl.windowsupdate.com   cs11.wpc.v0cdn.net        A      Success   Answer      18      4 72.21.81.240
131.192.58.216.in-addr... 131.192.58.216.in-addr... PTR    Success   Answer   27374      8 ord36s01-in-f131.1e100.net
131.192.58.216.in-addr... 131.192.58.216.in-addr... PTR    Success   Answer   27374      8 ord36s01-in-f3.1e100.net
www.google.com            www.google.com            AAAA   Success   Answer     149     16 2607:f8b0:4009:810::2004
www.google.com            www.google.com            A      Success   Answer      34      4 172.217.9.36
zoomdv176mmr.dv.zoom.us   zoomdv176mmr.dv.zoom.us   A      Success   Answer   60848      4 162.255.38.176
67.9.217.172.in-addr.arpa 67.9.217.172.in-addr.arpa PTR    Success   Answer   56009      8 ord38s09-in-f3.1e100.net
137.205.226.13.in-addr... 137.205.226.13.in-addr... PTR    Success   Answer   37604      8 server-13-226-205-137.dfw... array608.prod.do.dsp.m... array608.prod.do.dsp.m... A      Success   Answer    1941      4 40.69.221.239
dev-prod05.conferdeplo...                           AAAA   NoRecords
beacons.gvt2.com          beacons.gvt2.com          AAAA   Success   Answer      86     16 2607:f8b0:4009:815::2003
mail.google.com           mail.google.com           CNAME  Success   Answer      96      8 googlemail.l.google.com
mail.google.com           googlemail.l.google.com   AAAA   Success   Answer      96     16 2607:f8b0:4009:816::2005
mail.google.com           mail.google.com           CNAME  Success   Answer     217      8 googlemail.l.google.com
mail.google.com           googlemail.l.google.com   A      Success   Answer     217      4 172.217.9.69
ms-vscode.gallerycdn.v... ms-vscode.gallerycdn.v... CNAME  Success   Answer     379      8 35563.wpc.azureedge.net
ms-vscode.gallerycdn.v... 35563.wpc.azureedge.net   CNAME  Success   Answer     379      8 cs10.wpc.v0cdn.net
ms-vscode.gallerycdn.v... cs10.wpc.v0cdn.net        AAAA   Success   Answer     379     16 2606:2800:11f:7de:d31:7db... ms-vscode.gallerycdn.v... ms-vscode.gallerycdn.v... CNAME  Success   Answer     742      8 35563.wpc.azureedge.net
ms-vscode.gallerycdn.v... 35563.wpc.azureedge.net   CNAME  Success   Answer     742      8 cs10.wpc.v0cdn.net
ms-vscode.gallerycdn.v... cs10.wpc.v0cdn.net        A      Success   Answer     742      4 93.184.215.201
google.com                google.com                AAAA   Success   Answer     247     16 2607:f8b0:4009:803::200e
google.com                google.com                A      Success   Answer      55      4 172.217.4.46
google.com                google.com                AAAA   Success   Answer     247     16 2607:f8b0:4009:803::200e
google.com                google.com                A      Success   Answer      55      4 172.217.4.46
www.telerik.com           www.telerik.com           CNAME  Success   Answer   60701      8 telerik.com
www.telerik.com           telerik.com               A      Success   Answer   60701      4 50.56.19.112
onegetcdn.azureedge.net   onegetcdn.azureedge.net   CNAME  Success   Answer     931      8 onegetcdn.ec.azureedge.net
onegetcdn.azureedge.net   onegetcdn.ec.azureedge... CNAME  Success   Answer     931      8 cs9.wpc.v0cdn.net
onegetcdn.azureedge.net   cs9.wpc.v0cdn.net         AAAA   Success   Answer     931     16 2606:2800:11f:17a5:191a:1... array609.prod.do.dsp.m... array609.prod.do.dsp.m... A      Success   Answer    2608      4 40.69.218.62
codestats.net             codestats.net             AAAA   Success   Answer      76     16 2a01:4f9:c010:12cc::1
codestats.net             codestats.net             A      Success   Answer      76      4 95.216.154.212
addons-pa.clients6.goo... addons-pa.clients6.goo... A      Success   Answer      53      4 216.58.192.170
github.githubassets.com   github.githubassets.com   A      Success   Answer     316      4 185.199.108.154
github.githubassets.com   github.githubassets.com   A      Success   Answer     316      4 185.199.109.154
github.githubassets.com   github.githubassets.com   A      Success   Answer     316      4 185.199.110.154
github.githubassets.com   github.githubassets.com   A      Success   Answer     316      4 185.199.111.154
www.chilton-computing.... www.chilton-computing.... CNAME  Success   Answer    3251      8 www.dataweb.clrc.ac.uk
www.chilton-computing.... www.dataweb.clrc.ac.uk    A      Success   Answer    3251      4 130.246.135.175

PS > Clear-DnsClientCache
​PS > Get-DnsClientCache
​PS > 


Get connection information for interface connections

Linux:
    netstat -p (open sockets/ports)
    netstat -s (statistics on all ports)
    netstat -r (routing table info)
    ss -ta (all tcp sockets, connected + listening)
    ss -lt (all listening tcp sockets)
    ss -ua (all udp sockets)
    ss -lx )all unix sockets)
Windows PowerShell:
    Get-NetTCPConnection
    Get-NetTCPConnection -State Established



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
::                                  49666     ::                                  0          Listen
::                                  49665     ::                                  0          Listen
::                                  49664     ::                                  0          Listen
::                                  7680      ::                                  0          Listen
::                                  445       ::                                  0          Listen
::                                  135       ::                                  0          Listen
0.0.0.0                             52049     0.0.0.0                             0          Bound
0.0.0.0                             52013     0.0.0.0                             0          Bound
0.0.0.0                             51322     0.0.0.0                             0          Bound
0.0.0.0                             50061     0.0.0.0                             0          Bound
0.0.0.0                             50060     0.0.0.0                             0          Bound
0.0.0.0                             50059     0.0.0.0                             0          Bound
0.0.0.0                             50058     0.0.0.0                             0          Bound
0.0.0.0                             50057     0.0.0.0                             0          Bound
0.0.0.0                             50056     0.0.0.0                             0          Bound
0.0.0.0                             49803     0.0.0.0                             0          Bound
0.0.0.0                             49758     0.0.0.0                             0          Bound
0.0.0.0                             49753     0.0.0.0                             0          Bound
0.0.0.0                             49744     0.0.0.0                             0          Bound
0.0.0.0                             49738     0.0.0.0                             0          Bound
0.0.0.0                             49704     0.0.0.0                             0          Bound
0.0.0.0                             49678     0.0.0.0                             0          Bound
0.0.0.0                             49677     0.0.0.0                             0          Bound
192.168.1.124                       52543     52.204.191.76                       443        TimeWait
192.168.1.124                       52541     34.224.141.128                      443        TimeWait
192.168.1.124                       52013     18.205.93.255                       443        CloseWait   Internet
127.0.0.1                           51755     0.0.0.0                             0          Listen
127.0.0.1                           51754     0.0.0.0                             0          Listen
127.0.0.1                           51753     0.0.0.0                             0          Listen
127.0.0.1                           51752     0.0.0.0                             0          Listen
127.0.0.1                           51711     0.0.0.0                             0          Listen
127.0.0.1                           51677     0.0.0.0                             0          Listen
192.168.1.124                       51322     52.202.62.229                       443        CloseWait   Internet
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
127.0.0.1                           49676     0.0.0.0                             0          Listen
0.0.0.0                             49670     0.0.0.0                             0          Listen
0.0.0.0                             49668     0.0.0.0                             0          Listen
0.0.0.0                             49667     0.0.0.0                             0          Listen
0.0.0.0                             49666     0.0.0.0                             0          Listen
0.0.0.0                             49665     0.0.0.0                             0          Listen
0.0.0.0                             49664     0.0.0.0                             0          Listen
127.0.0.1                           5939      127.0.0.1                           49738      Established Internet
127.0.0.1                           5939      0.0.0.0                             0          Listen
0.0.0.0                             5040      0.0.0.0                             0          Listen
192.168.1.124                       139       0.0.0.0                             0          Listen
0.0.0.0                             135       0.0.0.0                             0          Listen


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
