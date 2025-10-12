const userData = require("../models/userData");

async function fetch(id) {
    try{
        const response = await userData.findById(id);
        return response;
    }catch(error) {
        throw new Error(`Something went wrong ${error}`);
    }
}

module.exports = { fetch };