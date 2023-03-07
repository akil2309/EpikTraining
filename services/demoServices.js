const axios = require("axios");
const { stringify } = require("querystring");
module.exports = {
  getdemo: async () => {
    try {
      var config = {
        method: "get",
        maxBodyLength: "Infinity",
        url: "https://webhook.site/4a986ff8-aa1f-4909-bb46-f7903422ec39",
        headers: {},
      };
      let response = await axios(config);
      console.log("its a success", JSON.stringify(response.data));
      return response.data;
    } catch (err) {
      console.log(`error`, err);
      return {
        success: false,
        message: err,
      };
    }
  },
};
