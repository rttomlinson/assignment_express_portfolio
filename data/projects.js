"use strict"; //Warming this does not reinforce unquie idenifiers. Highly recommended to create with unique identifiers and store in keys

class Project {
    constructor(name, url, description, imageSource, technologies, github, lastUpdate) {
        this.name = name;
        this.url = url;
        this.description = description;
        this.imageSource = imageSource;
        this.technologies = technologies;
        this.github = github;
        this.lastUpdate = lastUpdate;
    }
}

const projects = [
    new Project("Who Are My Reps", "https://who-are-my-reps.herokuapp.com/", "Find your representatives by zipcode and their recent voting history", "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1488792316/whoaremyreps_jumpwi.png", ["Express", "Sunlight API"], "https://github.com/rttomlinson/rep_finder"),
    new Project("Royalty Free Music Player", "https://free-music-player.herokuapp.com/", "A project focused on eventhandlers", "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1488792315/royaltyfreemusicplayer_h40eja.png", ["jQuery", "Web Audio API"], "https://github.com/rttomlinson/assignment_royalty_free_music_player"),
    new Project("Weather App", "https://minimal-weather-app.herokuapp.com/", "A weather app using Dark Sky for weather information", "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1489202297/weather_app_kccez8.png", ["jQuery"], "https://github.com/rttomlinson/weather_app")
    ];
    
    
module.exports = {
    Project,
    projects
};