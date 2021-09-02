const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderedDrinkSchema = Schema({
    drinkName:{
        type: String,
        required: true
    },
    drinkId:{
        type: String,
        required: true
    },
    drinkMade:{
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = OrderedDrink = mongoose.model("OrderedDrink", orderedDrinkSchema);