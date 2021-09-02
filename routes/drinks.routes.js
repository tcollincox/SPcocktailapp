const express =  require("express");
const router = express.Router();
const DrinksCtrl = require("../controllers/drinks.controller.js");

router.get("/", DrinksCtrl.menu );
router.get("/all", DrinksCtrl.apiReturnAllDrinks);
router.post("/add", DrinksCtrl.apiAddDrink);
router.get("/drinks/:id", DrinksCtrl.apiGetDrinkById);
router.get("/detailsQueue/:id", DrinksCtrl.apiGetDrinkByIdDetailsQueue)
router.get("/detailsMenu/:id", DrinksCtrl.apiGetDrinkByIdDetailsMenu)


module.exports =  router;