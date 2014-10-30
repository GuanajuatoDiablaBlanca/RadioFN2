cordova.define("com.intel.xdk.device.device-RemoteDataParameters", function(require, exports, module) { var exec = require('cordova/exec');

module.exports = {
	RemoteDataParameters : function(){
		this.url = "";
		this.id = "";
		this.method = "GET";
		this.body = "";
		this.headers = "";
	},
}

module.exports.RemoteDataParameters.prototype.addHeader = function(name, value){
	if(this.headers != ""){
		this.headers += "&";
	}
	this.headers += (name + "=" + value);
}
});
