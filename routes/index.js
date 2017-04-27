"use strict";

var express = require('express');
var router = express.Router();
const Project = require('../models').Project;



/* GET home page. */
router.get('/', async function(req, res, next) {
    let projects = await Project.getAllProjects();
    console.log("the projects in the db are", projects);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(projects);


});



module.exports = router;
