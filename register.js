const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
var mysql = require("mysql");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "50mb" }));

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommercestore",
  });
  
  conn.connect(function (err) {
    if (err) throw err;
  
    console.log("Connection Sucessful");
  });


  //for register customer page
  app.post("/registercustomer", function (req, res) {
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var mobileno = req.body.mobileno;
    var address = req.body.address;
  
    var sql = `insert into registercustomer(customer_username, customer_name,customer_email,customer_pass,customer_mobile,customer_address ) values( '${username}', '${name}','${email}','${password}','${mobileno}','${address}')`;
  
    conn.query(sql, function (err, results) {
      if (err) throw err;
  
      res.send("<h1>Data Inserted.</h1>");
    });
  });



  //for register store page
  app.post("/registerstore", function (req, res) {
    var name = req.body.name;
    var storename = req.body.storename;
    var email = req.body.email;
    var password = req.body.password;
    var mobileno = req.body.mobileno;
    var address = req.body.address;
    var storetype = req.body.storetype;
  
    var sql = `insert into registerstore(name, storename, email, password, mobileno, address, storetype) values( '${name}', '${storename}','${email}','${password}','${mobileno}','${address}','${storetype}')`;
  
    conn.query(sql, function (err, results) {
      if (err) throw err;
  
      res.send("<h1>Data Inserted.</h1>");
    });
  });

 /* app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});*/


  app.listen(4000, ()=>{
    console.log("Server started on port 4000")
  })