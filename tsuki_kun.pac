function FindProxyForURL( url, host ) {
    // Default to using no proxy.
    var ProxyConfig = "DIRECT";

    if( dnsDomainIs( host, "netflix.com" ) ) {
        // Requested domain matches, let's use the proxy.
        ProxyConfig = "SOCKS5 192.168.1.5:8080";
    }

    return ProxyConfig;
}