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
}, {
  timestamps: true
});

ProjectSchema.statics.getAllProjects = async function() {
  //get the inventory!
  return await Project.find({});
};

ProjectSchema.statics.getMostRecentProjects = async function(count) {
  //get the inventory!
  return await Project.find({}).limit(count).sort({
    updatedAt: -1
  });
};




ProjectSchema.statics.addNewProject = async function(name, url, description, imageSource, technologies, github) {
  let project = new Project({
    name,
    url,
    description,
    imageSource,
    technologies,
    github
  });
  return await project.save();
};


const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
