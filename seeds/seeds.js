const models = require('../models/');
const Project = models.Project;

module.exports = () => {
  // ----------------------------------------
  // Create Users
  // ----------------------------------------
  console.log('Creating Projects');
  const projects = [
    new Project({
      name: "Who Are My Reps",
      url: "https://who-are-my-reps.herokuapp.com/",
      description: "Find your representatives by zipcode and their recent voting history",
      imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1488792316/whoaremyreps_jumpwi.png",
      technologies: ["Express", "Sunlight API"],
      github: "https://github.com/rttomlinson/rep_finder"
    }),
    new Project({
      name: "Royalty Free Music Player",
      url: "https://free-music-player.herokuapp.com/",
      description: "A project focused on eventhandlers",
      imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1488792315/royaltyfreemusicplayer_h40eja.png",
      technologies: ["jQuery", "Web Audio API"],
      github: "https://github.com/rttomlinson/assignment_royalty_free_music_player"
    }),
    new Project({
      name: "Weather App",
      url: "https://minimal-weather-app.herokuapp.com/",
      description: "A weather app using Dark Sky for weather information",
      imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1489202297/weather_app_kccez8.png",
      technologies: ["jQuery"],
      github: "https://github.com/rttomlinson/weather_app"
    }),
    new Project({
      name: "Blood Glucose Tracker",
      url: "Not available",
      description: "An app for tracking and analyzing blood glucose levels throughout the day.",
      imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1494267643/FireShot_Capture_10_-_-_https___personal-projects-rttomlinson.c9users.io_user_dfiurk.png",
      technologies: ["Sequelize", "Bootstrap", "Passport"],
      github: "https://github.com/rttomlinson/blood_sugar_tracker"
    }),
    new Project({
      name: "E-commerce",
      url: "https://e-commerce-site.herokuapp.com/",
      description: "E-commerce site ulilizing POSTGRES, MONGODB, and the Stripe API for payment processing",
      imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1494268301/FireShot_Capture_13_-_-_https___e-commerce-site.herokuapp.com_products_tuhlki.png",
      technologies: ["Mongoose", "Sequlize", "Stripe API"],
      github: "https://github.com/rttomlinson/project_mimirs_market"
    }),
    new Project({
      name: "Superchat",
      url: "https://superchatroom.herokuapp.com/",
      description: "Project using Websockets and Redis. Anonymous real-time chatroom.",
      imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1494268327/FireShot_Capture_11_-_Best_Chatroom_Ever_-_https___superchatroom.herokuapp.com__chxmma.png",
      technologies: ["Redis", "Websockets"],
      github: "https://github.com/rttomlinson/project_superchat"
    }),
    new Project({
      name: "Wildlife Watcher",
      url: "https://lifewatcher.herokuapp.com",
      description: "App for tracking wildlife observation. Ideal for fieldwork. Still in progress",
      imageSource: "http://res.cloudinary.com/dsuajh1lm/image/upload/c_scale,w_450/v1496063351/FireShot_Capture_6_-_React_App_-_https___vikingcodeschool-rttomlinson.c9users.io_dashboard_boards_18_ioeciv.png",
      technologies: ["React", "Webpack", "NodeJS"],
      github: "https://github.com/rttomlinson/project_djello"
    })
  ];

  //Images are 450 x 236
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
