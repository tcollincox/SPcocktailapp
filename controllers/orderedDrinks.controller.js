const OrderedDrinkService = require("../services/OrderedDrinkService.js");

module.exports = class OrderedDrink{

    static async apiReturnAllOrderedDrinks(req, res, next){
        try{
            const orderedDrinks = await OrderedDrinkService.returnAllOrderedDrinks();
            if(!orderedDrinks){
                res.status(404).json("no drinks yet");
            }
            res.json(orderedDrinks);
        }
        catch(err){
            res.status(500).json({error:error})
        }
    }

    static async apiGetOrderedDrinkById(req, res, next){
        try{
            let id = req.params.id || {};
            const orderedDrink = await OrderedDrinkService.getOrderedDrinkById(id);
            res.json(orderedDrink);
        }
        catch(err){
            res.status(500).json({error:error})  
        }
    }

    static async apiAddOrderedDrink(req, res, next){
        try{
            const newOrderedDrink = await OrderedDrinkService.addOrderedDrink(req.body);
            res.json(newOrderedDrink);
        }
        catch(err){
            res.status(500).json({error:error})
        }
    }

    static async queue(req,res){
        const queue = await OrderedDrinkService.returnAllOrderedDrinks();
        res.render('queue.ejs', {queue: queue});
    }

    


}