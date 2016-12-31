(function() {
    DeviceDetect = (typeof DeviceDetect === "undefined") ? {} : DeviceDetect;

    DeviceDetect = function(){
        _this_device = this;
        
        //For Mobile Devices.
        this.isMobile = { 
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            }
        },
        
        //For Tablet Devices.
        this.isTablet = {
            iPad: function() {
                return navigator.userAgent.match(/iPad/i);
            },
            Android: function() {
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                if(width >= 481 && width <= 961)
                    return ["Android-Tablet"];
                else
                    return null;
            },
            any: function() {
                return (this.Android() || this.iPad());
            }
        },

        //For Desktop Devices.
        this.isDesktop = {
            Opera: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)
                    return ["Opera"];
                else
                    return null;
            },
            Firefox: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(typeof InstallTrigger !== 'undefined')
                    return ["Firefox"];
                else
                    return null;
            },
            Safari: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0)
                    return ["Safari"];
                else
                    return null;
            },
            IE: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(/*@cc_on!@*/false || !!document.documentMode)
                    return ["IE"];
                else
                    return null;
            },
            Edge: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(!this.IE() && !!window.StyleMedia)
                    return ["Edge"];
                else
                    return null;
            },
            Chrome: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(!!window.chrome && !!window.chrome.webstore)
                    return ["Chrome"];
                else
                    return null;
            },
            Blink: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if((this.Chrome || this.Opera) && !!window.CSS)
                    return ["Blink"];
                else
                    return null;
            },
            any: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                return (this.Opera() || this.Firefox() || this.Safari() || this.IE() || this.Edge() || this.Chrome() || this.Blink());
            }
        }
    };
})();