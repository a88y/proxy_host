function FindProxyForURL( url, host ) {
    // Default to using no proxy.
    var ProxyConfig = "DIRECT";

    if( shExpMatch( host, "*.netflix.*" ) ) {
        // Requested domain matches, let's use the proxy.
        ProxyConfig = "SOCKS5 192.168.1.5:8080";
    }

    if( shExpMatch( host, "*.nflximg.*" ) ) {
        ProxyConfig = "SOCKS5 192.168.1.5:8080";
    }

    if( shExpMatch( host, "*.nflxvideo.*" ) ) {
        ProxyConfig = "SOCKS5 192.168.1.5:8080";
    }

    if( shExpMatch( host, "*.nflxext.*" ) ) {
        ProxyConfig = "SOCKS5 192.168.1.5:8080";
    }

    if( shExpMatch( host, "*.reddit.com" ) ) {
        ProxyConfig = "SOCKS5 192.168.1.5:8080";
    }

    return ProxyConfig;
}