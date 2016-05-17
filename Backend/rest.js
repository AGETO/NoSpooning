var mysql = require("mysql");
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
           res.json({"Message" : "Hello World !"});
    });
    router.post("/users",function(req,res){
		var newUser = req.body;
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["user","password","name",md5(newUser.password),newUser.name];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
				res.status(409);
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });
    
    router.post("/user",function(req,res){
    var username    =  req.body.name;
    var password    =  req.body.password;
    var query = "select 1 from ?? where ?? like ? and ?? like ?";
    var table = ["user", "username", username, "password", md5(password)];
    query = mysql.format(query,table);
    var q = connection.query(query,function(err,rows){
        if(err) {
		    res.status(500);
            res.json({"Error" : true, "Message" : "Error executing MySQL query."});
            console.log(err);
        } else if(rows.length > 0) {
            res.json(true);
            console.log(err);
        }else{
            res.json(false);
            console.log(err);
        }});
    });

    router.post("/user/devices",function(req,res){
    var user_id =  req.body.id;
    var query = "select * from ?? where ?? like ?";
    var table = ["device", "user_id", user_id];
    query = mysql.format(query,table);
    var q = connection.query(query,function(err,rows){
        if(err) {
		    res.status(500);
            res.json({"Error" : true, "Message" : "Error executing MySQL query, " + err});
        } else if(rows.length > 0) {
            res.json(rows);
        }else{
            res.json(rows);
        }});
    });
    
    router.post("/user/deviceUpdate",function(req,res){
    var user_id =  req.body.id;
    var device_id = req.body.deviceid;
    var message = req.body.message;
    var query = "update device set ??=? where ??=? AND ??=?";
    var table = ["Maintenance", message, "user_id", user_id, "device_id", device_id];
    query = mysql.format(query,table);
    var q = connection.query(query,function(err,rows){
        if(err) {
		    res.status(500);
            res.json({"Error" : true, "Message" : "Error executing MySQL query, " + err});
        } else if(rows.length > 0) {
            res.json(true);
        }else{
            res.json(true);
        }});
    });
	
}

module.exports = REST_ROUTER;