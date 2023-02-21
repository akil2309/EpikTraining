const axios = require('axios');
const { stringify } = require('querystring');
module.exports = {
    getdemo : async () => {
        try{
            var config = {
                method: 'get',
                maxBodyLength: "Infinity",
                url: 'https://webhook.site/b7fc9edb-402f-44db-8329-20e711b725d7',
                headers: {}
            };
             let response = await axios(config);
            console.log('its a success',JSON.stringify(response.data));
            return response.data;
        }
        catch(err){
            console.log(`error`,err);
            return{
                success: false,
                message: err
            }
        }
    }
}