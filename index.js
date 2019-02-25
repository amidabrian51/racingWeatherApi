const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const ejs = require("ejs");

const homeStartingContent = "This is a really cool site about formula 1 weather"

const app = express();
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended: true}))

app.get("/", function(req, res){
    //res.sendFile(__dirname + "/index.html")
    res.render('home',{startingContent: homeStartingContent})

});

app.post("/", function(req, res){
    // console.log(req.body.City)

     var city = req.body.City;
     var APP_ID = "8a99df7bf7ef4a4a202732c392b2d240"

    // var options = {
        
    // }
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`
    request(url, function(err, response, body){
        //console.log(body);
       
        var data = JSON.parse(body)
        var main = data.weather[0].main;
        //var temp = data.main.temp
        console.log(main)
        res.write(`<p>The current weather in ${city} 
        is ${main}`)
    })
})


app.listen(3001, function(){
    console.log("Server is running on port 3001")
})