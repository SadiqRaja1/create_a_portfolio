const express = require("express");
const mongoose = require("./configurations/dbConfig");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Connected to the root path");
})

app.listen(8080, () => {
    console.log("Server started at port 8080")
})