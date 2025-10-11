async function data(req, res) {
    try {
        const newData = req.body;
        console.log(newData);
    }catch (error){
        console.log(error);
    }
}

module.exports = data;