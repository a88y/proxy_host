function FindProxyForURL( url, host ) {
    // Default to using no proxy.
    var ProxyConfig = "DIRECT";

    if( dnsDomainIs( host, "api.foobar.com" ) ) {
        // Requested domain matches, let's use the proxy.
        ProxyConfig = "SOCKS5 127.0.0.1:12345";
    }

    return ProxyConfig;
}