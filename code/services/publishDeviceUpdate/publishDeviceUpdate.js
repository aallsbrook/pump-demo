function publishDeviceUpdate(req, resp){
    ClearBlade.init({request: req});
    //log(req)
    
    var msg = ClearBlade.Messaging();
    msg.publish("device/pump/"+req.params.deviceName,JSON.stringify(req.params.changes));
    resp.success("we were called: "+JSON.stringify(req));
}