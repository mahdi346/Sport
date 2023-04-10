const mongoose = require("mongoose");
// create player schema
const userSchema = mongoose.Schema({
    email : String ,
    firstName : String ,
    lastName : String ,
    pwd : String,
    role : String
});
// create model (PascalCase)
const user = mongoose.model("User",userSchema);
module.exports = user;