const mongoose = require("../configurations/dbConfig")
const postDataServices = require("../services/postData_S")

async function data(req, res) {
    try {
        const data = req.body;
        const response = postDataServices.post(data);
        res.status(200).json({message : response});
    }catch (error){
        res.status(400).json({message: error})
    }
}

module.exports = data;