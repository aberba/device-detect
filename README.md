# Disclaimer

Functionality needs to be verfied before usage as browser environment can
frequently change due to updates.


# Client side js library for browser detection.

This library is helpful to detect the client browser environment.


# Usage


<script type="text/javascript" src="device-detect.js"></script>

```

    // Call constructure
    var DD = new DeviceDetect();
    var isMobile = DD.isMobile;
    var isDesktop = DD.isDesktop;
    var isTablet = DD.isTablet;

    // TO check device type and name
    console.log(isMobile.any());
    console.log(isDesktop.any());
    console.log(isTablet.any());

    // Target mobile specific device
    console.log(isMobile.Android());
    console.log(isMobile.BlackBerry());
    console.log(isMobile.Opera());
    console.log(isMobile.Windows());


    // Target mobile tablet device
    console.log(isTablet.iPad());
    console.log(isTablet.Android());


    // Target browser name
    console.log(isDesktop.Opera());
    console.log(isDesktop.Firefox());
    console.log(isDesktop.Safari());
    console.log(isDesktop.IE());
    console.log(isDesktop.Edge());
    console.log(isDesktop.Chrome());
    console.log(isDesktop.Blink());```
