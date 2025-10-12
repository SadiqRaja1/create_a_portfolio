const postDataServices = require("../services/postData_S")

async function data(req, res) {
    try {
        const data = req.body;
        const response = await postDataServices.post(data);
        res.status(200).json({id : response});
    }catch (error){
        res.status(400).json({message: error})
    }
}

module.exports = data;