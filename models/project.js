"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  },
  description: {
    type: String
  },
  imageSource: {
    type: String
  },
  technologies: [{
    type: String
  }],
  github: {
    type: String
  }
});

ProjectSchema.statics.getAllItems = async function() {
  //get the inventory!
  return await Project.find({});
};

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
