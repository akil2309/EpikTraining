const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const controller = require('./controllers/demoController');
app.use(bodyparser.json())
app.post('/gettest', controller.getdemo);


app.listen(5000)