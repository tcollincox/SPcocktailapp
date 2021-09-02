const express =  require("express");
const router = express.Router();
const OrderedDrinksCtrl = require("../controllers/orderedDrinks.controller.js");

router.get("/", OrderedDrinksCtrl.queue );
router.get("/all", OrderedDrinksCtrl.apiReturnAllOrderedDrinks);
router.post("/add", OrderedDrinksCtrl.apiAddOrderedDrink);
router.get("/orderedDrinks/:id", OrderedDrinksCtrl.apiGetOrderedDrinkById);


module.exports =  router;