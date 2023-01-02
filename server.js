const express = require("express");
var app = express();
const bodyparse = require("body-parser");

app.use(bodyparse.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("public/home.html",{root:__dirname})
});

app.get("/schedule",function(req,resp){
    resp.sendFile("public/schedule.html",{root:__dirname})
});


app.listen(3000);
console.log("Server is running on port 3000");