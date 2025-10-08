const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb+srv://SadiqRaja:314@cluster0.nsgoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

main().then( () => {
    console.log("connected to db")
}
).catch((error) => {
    console.log("Some error in connecting to db", error);
})

module.exports = mongoose;