const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
return res.send ('Welcome to Bakery API');
})
 
app.get('/ad', function (req, res) {
   return res.send ('Welcome to Ads');
   })
 
app.get('/cakebase', function (req, res) {
return res.send ('Welcome to cake bases');
   })
 
 
 
app.listen(process.env.PORT || 3000);