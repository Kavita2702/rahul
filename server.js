const express=require("express");
const app=express();
app.get("/",function(req,res){
    res.sendFile("./public/index.html",{root:__dirname});

});
app.listen(8900);
console.log("server is running in on port 8900");