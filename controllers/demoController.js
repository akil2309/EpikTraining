const service = require("../services/demoServices");
const constants = require("../constants/constant");
const demoServices = require("../services/demoServices");
module.exports = {
  getdemo: async function (req, res) {
    const authkey = req.headers.authentication;
    if (!constants.Allowed_keys.includes(authkey)) {
      res.status(401).send({
        success: false,
        message: "invalid key",
      });
    }

    return res.send(await demoServices.getdemo());
  },
  mediatorpayload: async function (req, res) {
    const mediation = require(`../mediations/${req.params.mediator}`);
    return res.send(await mediation(req.body));
  },
};
