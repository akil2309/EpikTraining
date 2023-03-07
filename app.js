const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const controller = require("./controllers/demoController");
app.use(bodyparser.json());
app.use(bodyparser.text({ type: "application/xml", limit: "200mb" }));
app.post("/gettest", controller.getdemo);
app.post("/v1/mediation/:mediator", controller.mediatorpayload);
console.log("running!!!");

app.listen(5000);
