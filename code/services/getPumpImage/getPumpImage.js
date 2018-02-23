function getPumpImage(req, resp){
    ClearBlade.init({"request":req});
    var query = ClearBlade.Query({collectionName: "map_images"});
	query.columns(["image_base64"]);
	query.equalTo("device_id",req.params.deviceName)
    query.fetch(function(err, data){
		if (err) {
   	    	resp.error("fetch error : " + JSON.stringify(data));
   	    } else {
   	    	resp.success(data.DATA[0]);
   	    }
	})

}