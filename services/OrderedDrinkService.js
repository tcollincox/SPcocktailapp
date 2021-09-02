const OrderedDrink = require("../models/OrderedDrinks.js");

module.exports = class OrderedDrinkService {
    static async returnAllOrderedDrinks(){
        try {
            const allOrderedDrinks = await OrderedDrink.find();
            return allOrderedDrinks;
        }
        catch(err){
            console.log(`Something happened with ${err}`);
        }
    }

    static async addOrderedDrink(data){
        try {
            const newOrderedDrink = {
                drinkName: data.drinkName,
                drinkId: data.drinkId,
                drinkMade: data.drinkMade
            }
            const response = await new OrderedDrink(newOrderedDrink).save();
            return response;
        }
        catch(err){
            console.log(`Something happened here with ${err}`);
        }
    }

    static async updateOrderedDrink(drinkName, drinkId, drinkMade){
        try {
            const updateResponse =  await OrderedDrink.updateOne(
                {drinkName, drinkId, drinkMade}, 
                {$set: {date: new Date.now()}});

                return updateResponse;
        }
        catch(err){
            console.log(`Something happened here with ${err}`);
        }

    }

    static async getOrderedDrinkById(orderedDrinkId){
        try {
            const orderedDrink = await OrderedDrink.findById({_id:orderedDrinkId});
            return orderedDrink;
        }
        catch(err){
            console.log(`Something happened with ${err}`);
        }
    }
    
}