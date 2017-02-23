"use strict";

var express = require('express');
var router = express.Router();

let projects = require("../modules/projects");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects', { projects: projects });
});

module.exports = router;
