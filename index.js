const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyparser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res){
    // console.log(req.body.City)

    // var city = req.body.City;

    // var options = {
        
    // }
    var url = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
    request(url, function(err, response, body){
        console.log(response);
    })
})


app.listen(3001, function(){
    console.log("Server is running on port 3001")
})