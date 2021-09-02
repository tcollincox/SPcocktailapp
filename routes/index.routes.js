const express =  require("express");
const router = express.Router();
const indexCtrl = require("../controllers/index.controller.js");

router.get('/', indexCtrl.homepage);

module.exports =  router;