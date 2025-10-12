const dataFetchService = require("../services/data_S")

async function dataFetch(req, res) {
    try{
        const id = req.params.id;
        const response = await dataFetchService.fetch(id);
        res.status(201).json({response});
    }catch(error){
        res.status(401).json({message : error});
    }
}

module.exports = dataFetch;