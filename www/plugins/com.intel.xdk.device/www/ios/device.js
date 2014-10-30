cordova.define("com.intel.xdk.device.device-ios", function(require, exports, module) { var exec = require('cordova/exec');

module.exports = {
    _doOrientation : false,
    _orientation : "any",
    _shouldAutoRotate : true,
    
	setAutoRotate : function(shouldAutoRotate){
	    if (this._doOrientation) {
            this._shouldAutoRotate = shouldAutoRotate;
            exec(null, null, "IntelXDKDevice", "_recheckScreenOrientation", []);
	    }
	},

	setRotateOrientation : function(orientation){
	    if (this._doOrientation) {
            this._orientation = orientation;
            exec(null, null, "IntelXDKDevice", "_recheckScreenOrientation", []);
        }
	},
	
	initForOrientation : function(){
        this._doOrientation = ! window.shouldRotateToOrientation;
	    if (this._doOrientation) {
            me = this;
            window.shouldRotateToOrientation = function(orientation){
                orientation = (orientation + 360) % 360;    // -90  => 270
                switch (me._orientation) {
                case "portrait":
                    return (orientation == 0 || orientation == 180);
                case "landscape":
                    return (orientation == 90 || orientation == 270);
                default:
                    return me._shouldAutoRotate;
                }
            }
        }
	}
};

});
