const mongoose = require("mongoose");
// create player schema
const playerSchema = mongoose.Schema({
    number : Number ,
    age : Number ,
    name : String ,
    position : String ,
    img : String
});
// create model (PascalCase)
const player = mongoose.model("Player",playerSchema);
module.exports = player;