const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    ingredients: [{
        type:String
    }],
    recipe: [{
        type:String
    }],
    calories:{
        type: String,
        required: true
    }
})

module.exports = Drink = mongoose.model("Drink", drinkSchema);