const userData = require("../models/userData");

async function post(data) {
    try {
        const  newData = new userData(data);
        const response = await newData.save();
        return response._id;
    }catch(error) {
        console.log(error);
        throw new Error(`Something went wrong ${error}`);
    }
    
}

module.exports = {post};