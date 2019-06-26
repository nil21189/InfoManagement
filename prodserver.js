var express = require('express');
var app = express();

var grocery=function(req, res)
{
  
  var products= [
  {pid:2,pname:"Product 2",likes:1234,qty_in_stock:4500},
  {pid:1,pname:"Product 2",likes:500,qty_in_stock:100},
  {pid:3,pname:"Product 3",likes:23,qty_in_stock:1122},
  {pid:4,pname:"Product 4",likes:456,qty_in_stock:4003},
  {pid:5,pname:"Product 5",likes:7000,qty_in_stock:50},
  {pid:6,pname:"Product 6",likes:7888,qty_in_stock:0},
  {pid:7,pname:"Product 7",likes:90,qty_in_stock:0},
  
    {pid:5,pname:"Product 5",likes:7000,qty_in_stock:50},
  {pid:6,pname:"Product 6",likes:7888,qty_in_stock:0},
  {pid:7,pname:"Product 7",likes:90,qty_in_stock:0},
  
   
  ];
  res.send(products);
};


app.get ('/products',grocery);
var server = app.listen(7777, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Myserver is listening at http://localhost:7777", host, port)
})
