const Drink = require("../models/Drinks.js");

module.exports = class DrinkService {
    static async returnAllDrinks(){
        try {
            const allDrinks = await Drink.find();
            return allDrinks;
        }
        catch(err){
            console.log(`Something happened with ${err}`);
        }
    }

    static async addDrink(data){
        try {
            const newDrink = {
                name: data.name,
                description: data.description,
                ingredients: data.ingredients,
                recipe: data.recipe,
                calories: data.calories
            }
            const response = await new Drink(newDrink).save();
            return response;
        }
        catch(err){
            console.log(`Something happened with ${err}`);
        }
    }

    static async getDrinkById(drinkId){
        try {
            const drink = await Drink.findById({_id:drinkId});
            return drink;
        }
        catch(err){
            console.log(`Something happened with ${err}`);
        }
    }
    
}