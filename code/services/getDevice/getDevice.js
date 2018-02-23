function getDevice(req, resp){
    ClearBlade.init({request: req});
	ClearBlade.getDeviceByName("pump101", function(err, data) {
		if(err){
			resp.error("Unable to get device: " + JSON.stringify(data))
		} else {
			resp.success(data)
		}
	});

}