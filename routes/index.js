"use strict";

var express = require('express');
var router = express.Router();
const http = require('http');
let {projects} = require("../modules/projects");

http.get('https://rttomlinson-public-projects.herokuapp.com/', (res) => {
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];
    
    let error;
    
    if (statusCode !== 200) {
        error = new Error(`Request failed.\n Status code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error(`Invalid content type.\n Content type is: ${contentType}. Need JSON. Check request headers`);
    }
    if (error) {
        console.log(error);
        res.resume();
        return;
    }
    
    res.setEncoding('utf-8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        try {
            let parsedData = JSON.parse(rawData);
            console.log(parsedData);
        }
        catch(e) {
            console.log(`An error occured in parsing JSON try/catch: ${e.message}`);
        }
    });

}).on('error', (e) => {
    console.log(`Error message caught by http get request: ${e.message}`);
});





/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(projects);
});

module.exports = router;
