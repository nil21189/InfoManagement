var express = require('express');
var app = express();

var cust=function(req, res){
  
  var customers = [
  {cust_id:1111,cust_name:"Nilima",Address:"Akurdi",Contact_No:"9730655400"},
  {cust_id:2222,cust_name:"Nikhil",Address:"Pune",Contact_No:"9730655499"},
  {cust_id:3333,cust_name:"Nitesh",Address:"Hydrabad",Contact_No:"9730655500"},
  {cust_id:4444,cust_name:"Savari",Address:"Hinjawadi",Contact_No:"9730655777"},
  {cust_id:5555,cust_name:"Kaustubh",Address:"Hinjawadi",Contact_No:"9730655666"},
   
  ];
  res.send(customers);
};


app.get ('/customers',cust);
var server = app.listen(9999, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Myserver is listening at http://localhost:9999", host, port)
})