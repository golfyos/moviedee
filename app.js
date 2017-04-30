const express   = require("express");
const port      = 3000;
const app       = express();


app.get("/",function(req,res){
    res.send("Hello FUCKer");
});
app.listen(port,function(err){
    if(err) console.log(err);
    console.log("listen on port 3000");
});