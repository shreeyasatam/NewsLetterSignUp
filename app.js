
const express = require("express");
const app = express()
const request = require("request")
const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/signUp.html")
});

app.post("/", function(req, res){
    let fName = req.body.firstName;
    let lName = req.body.lastName;
    let emailId = req.body.emailId;
    res.send(`Welcome ${fName} ${lName} your emil " ${emailId} " has register with us!`);
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
})



//  appkey 0bbeb3647e41d9567b319352c3066cfe-us8

// ukey 5894bea995 