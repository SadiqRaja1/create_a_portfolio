const express = require("express")
const NewController = require("../controllers/new_C.js")

const router = express.Router();

router.post("/new", NewController);

module.exports = router;
