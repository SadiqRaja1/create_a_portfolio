const express = require("express");
const mongoose = require("./configurations/dbConfig");
const RouteNew = require("./routes/new_R.js");
const cors = require("cors")

const alowedLink = {
    origin:[process.env.Frontend_URL]
}

const app = express();

app.use(express.json());
app.use(cors(alowedLink))
app.use("/data", RouteNew)

app.get("/", (req, res) => {
    res.send("Connected to the root path");
})

app.listen(8080, () => {
    console.log("Server started at port 8080")
})