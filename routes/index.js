"use strict";

var express = require('express');
var router = express.Router();
let {projects} = require("../modules/projects");


/* GET home page. */
router.get('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(projects);
});

module.exports = router;
