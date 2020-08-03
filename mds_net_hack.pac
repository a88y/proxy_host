function FindProxyForURL(url, host) {
 


// If the requested website is hosted within the internal network, send direct.
    if (isPlainHostName(host) ||
		shExpMatch(host, "*.local") ||
		shExpMatch(host, "10.*") ||
		shExpMatch(host, "172.*") ||
		shExpMatch(host, "172.17.6.51") ||
		shExpMatch(host, "172.17.*.*") ||
		shExpMatch(host, "172.17.2.11") ||
		shExpMatch(host, "172.17.2.15") ||
		shExpMatch(host, "172.21.*.*") ||
		shExpMatch(host, "172.22.*.*") ||
		shExpMatch(host, "172.23.*.*") ||
		shExpMatch(host, "192.168.*") ||        
		shExpMatch(host, "127.0.0.1") ||
		shExpMatch(host, "ofa*.*") ||
		shExpMatch(host, "rms*.*") ||
		shExpMatch(host, "csa*.*") ||
		shExpMatch(host, "hris*.*") ||
		shExpMatch(host, "wms*.*") ||
		shExpMatch(host, "bms*.*") ||
		shExpMatch(host, "reim*.*") ||
		shExpMatch(host, "jktwpap90109*.*") ||
		shExpMatch(host, "jktnpap90110*.*") ||
		shExpMatch(host, "jktndap90101*.*") ||
		shExpMatch(host, "new-intranet*.*") ||
		shExpMatch(host, "172.17.6.36") ||
		shExpMatch(host, "inetav") ||
		shExpMatch(url, "http://JKTWPAP90121.matahari.id:8530") ||
		shExpMatch(host, "JKTWPAP90121") ||
		shExpMatch(host, "172.17.2.24") ||
		shExpMatch(host, "") ||
		shExpMatch(host, "rsim*.*") ||
		shExpMatch( host, "*.netflix.*" ) ||
		shExpMatch( host, "*.nflximg.*" ) ||
		shExpMatch( host, "*.nflxvideo.*" ) ||
		shExpMatch( host, "*.nflxext.*" )
	)
        	return "DIRECT";
 
// If the IP address of the local machine is within a defined
// subnet, send to a specific proxy.
   if (isInNet(myIpAddress(), "172.17.0.0", "255.255.0.0"))
       return "PROXY 172.17.2.11:3128";
 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "PROXY 172.17.2.11:3128";
 
}