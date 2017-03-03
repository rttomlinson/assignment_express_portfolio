"use strict";

var express = require('express');
var router = express.Router();

let {projects} = require("../modules/projects.js");

function findProjectByName(projectName) {
    return projects.find(function (project) {
        return project.name == projectName;
    });
}
router.use(function(request, response, next) {
    console.log("Inside /project route");
    next();
});

router.get("/:name", function (request, response, next) {
    console.log("Value from URL is", request.params.name);
    const projectName = request.params.name;
    let project = findProjectByName(projectName);
    response.render("projects-page", { project : project, "title": project.name});
});

module.exports = router;