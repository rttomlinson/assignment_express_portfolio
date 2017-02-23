"use strict"; //Warming this does not reinforce unquie idenifiers. Highly recommended to create with unique identifiers and store in keys

class Project {
    constructor(name, url, description, imageSource, technologies) {
        this.name = name;
        this.url = url;
        this.description = description;
        this.imageSource = imageSource;
        this.technologies = technologies;
    }
}

const projects = [
    new Project("Weather App", "https://rttomlinson.github.io/weather_app/", "A weather app using Dark Sky for weather information", "http://placehold.it/350x300", ["jQuery"]),
    new Project("Royalty Free Music Player", "https://rttomlinson.github.io/assignment_royalty_free_music_player/", "A project focused on eventhandlers", "http://placehold.it/350x300", ["jQuery", "Web Audio API"])
    ];
    
    
module.exports = {
    Project,
    projects
};