"use strict";

var express = require('express');
var router = express.Router();
const Project = require('../models');


// function findProjectByName(projectName) {
//     return projects.find(function (project) {
//         return project.name == projectName;
//     });
// }

// router.get("/:name", function (request, response, next) {
//     console.log("Value from URL is", request.params.name);
//     const projectName = request.params.name;
//     let project = findProjectByName(projectName);
//     response.render("projects-page", { project : project, "title": project.name});
// });

/* GET home page. */
router.get('/all', async function(req, res, next) {
    let projects = await Project.getAllProjects();
    console.log("the projects in the db are", projects);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(projects);


});

/* Get new project page form. */
router.get('/new', function(req, res, next) {
    res.render("project/new");
});


/* Post new project page. */
router.post('/new', async function(req, res, next) {
    let { name, url, description, imageSource, technologies, github } = req.body;
    //Make technologies an array. Will be recieved as a string of space separated techs
    technologies = technologies.split(" ");
    let project = await Project.addNewProject({name, url, description, imageSource, technologies, github});
    res.end(`Posting new project to database: ${project}`);


});



module.exports = router;