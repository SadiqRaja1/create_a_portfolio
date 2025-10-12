const express = require("express")
const NewController = require("../controllers/new_C.js")
const DataController = require("../controllers/data_C.js")

const router = express.Router();

router.post("/new", NewController);
router.get("/fetch/:id", DataController);

module.exports = router;
