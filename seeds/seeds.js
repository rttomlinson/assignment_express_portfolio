const models = require('../models/');
const Project = models.Project;

module.exports = () => {
  // ----------------------------------------
  // Create Users
  // ----------------------------------------
  console.log('Creating Projects');
  const projects = [
    new Project({name: "Who Are My Reps", url: "https://who-are-my-reps.herokuapp.com/", description: "Find your representatives by zipcode and their recent voting history", imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1488792316/whoaremyreps_jumpwi.png", technologies: ["Express", "Sunlight API"], github: "https://github.com/rttomlinson/rep_finder"}),
    new Project({name: "Royalty Free Music Player", url: "https://free-music-player.herokuapp.com/", description: "A project focused on eventhandlers", imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1488792315/royaltyfreemusicplayer_h40eja.png", technologies: ["jQuery", "Web Audio API"], github: "https://github.com/rttomlinson/assignment_royalty_free_music_player"}),
    new Project({name: "Weather App", url: "https://minimal-weather-app.herokuapp.com/", description: "A weather app using Dark Sky for weather information", imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1489202297/weather_app_kccez8.png", technologies: ["jQuery"], github: "https://github.com/rttomlinson/weather_app"})
    ];


  // ----------------------------------------
  // Finish
  // ----------------------------------------
  console.log('Saving...');

  var promises = [];
  [projects].forEach(collection => {
    collection.forEach(model => {
      promises.push(model.save());
    });
  });
  return Promise.all(promises);
};
