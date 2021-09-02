const DrinkService = require("../services/DrinkService.js");
const OrderDrinkService = require("../services/OrderedDrinkService.js")

module.exports = class Drink{

    static async apiReturnAllDrinks(req, res, next){
        try{
            const drinks = await DrinkService.returnAllDrinks();
            if(!drinks){
                res.status(404).json("no drinks yet");
            }
            res.json(drinks);
        }
        catch(err){
            res.status(500).json({error:error})
        }
    }

    static async apiGetDrinkById(req, res, next){
        try{
            let id = req.params.id || {};
            const drink = await DrinkService.getDrinkById(id);
            res.json(drink);
        }
        catch(err){
            res.status(500).json({error:error})  
        }
    }

    static async apiAddDrink(req, res, next){
        try{
            const newDrink = await DrinkService.addDrink(req.body);
            res.json(newDrink);
        }
        catch(err){
            res.status(500).json({error:error})
        }
    }

    static async menu(req,res){
        const drinks = await DrinkService.returnAllDrinks();
        res.render('menu.ejs', {drinks: drinks} );
    }

    static async apiGetDrinkByIdDetailsQueue(req, res, next){
        try{
            let id = req.params.id || {};
            const drink = await DrinkService.getDrinkById(id);
            res.render('drinkDetailsQueue.ejs',{drink:drink})
        }
        catch(err){
            res.status(500).json({error:err})  
        }
    }

    static async apiGetDrinkByIdDetailsMenu(req, res, next){
        try{
            let id = req.params.id || {};
            const drink = await DrinkService.getDrinkById(id);
            res.render('drinkDetailsMenu.ejs',{drink:drink})
        }
        catch(err){
            res.status(500).json({error:err})  
        }
    }


}
