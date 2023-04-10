// import express module
const express = require("express");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import axios module
const axios = require("axios");
// import bcrypt module
const bcrypt = require("bcrypt");
// import mongoose module
const mongoose = require("mongoose");
// Connect App with DataBase (sportDB : Database name)
mongoose.connect('mongodb://localhost:27017/sportDB');
// import body-parser module
const bodyParser = require("body-parser");
// creates express application : app
const app = express ();

app.use('/images', express.static(path.join('backend/images')))
// import Player model
const Player = require("./models/player");
// import Match model
const Match = require("./models/match");
// import Stadium model
const Stadium = require("./models/stadium");
const User = require("./models/user");

// BodyParser Configuration 
//1. send response with JSON Format
app.use(bodyParser.json());
//2. parse request object
app.use(bodyParser.urlencoded({ extended: true }));

//Security Configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//Multer configuration
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }
 const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
  }
  cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const extension = MIME_TYPE[file.mimetype];
  const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
 extension;
  cb(null, imgName);
  }
});

let data = [
    {id :1 ,name :"mahdi"},
    {id :2 ,name :"saleh"},
    {id :3 ,name :"Ali"}

];
app.get("/data", (req,res) => {
  console.log("here into get all data");
  // send response to FE
  res.json({dataTable : data});
});

let players = [
  {id : 1, name : "messi", age : 35, number:10 , position: "mid"},
  {id : 2, name : "ronaldo", age : 37, number:7 , position: "atk"},
  {id : 3, name : "benzema", age : 34, number:9 , position: "atk"}
];
let teams = [
    {id : 1, name :"barcelone", stadium : "camp nou", foundation : 1901, },
    {id : 1, name :"madrid",stadium : "bernabeau", foundation : 1920, },
];
let matches = [
    {id : 1, scoreOne : 5, scoreTwo : 2, teamOne:"FCB" , teamTwo: "RMD", stadium :"rades"},
    {id : 2, scoreOne : 4, scoreTwo : 0, teamOne:"FCB" , teamTwo: "ATM", stadium :"anfield"},
    {id : 3, scoreOne : 0, scoreTwo : 1, teamOne:"CHE" , teamTwo: "LIV", stadium :"camp nou"},
    {id : 4, scoreOne : 2, scoreTwo : 3, teamOne:"JUV" , teamTwo: "ROM", stadium :"bernabeau"}
];
// all business logics
// app.ACTION-HTTP("PATH", (req,res) ==> {
// here business logic
// })
app.get("/matches", (req,res) => {
    console.log("here into get all matches");
    // send response to FE
    // res.json({matchesTable : matches});
    Match.find().then((docs)=>{
      console.log("here docs",docs);
      if (docs) {
        res.json({matchesTable : docs,message:"here all matches"});
      }
    })
});
app.get("/players", (req,res) => {
    console.log("here into get all players");
    Player.find().then((docs)=>{
      console.log("here docs",docs);
      if (docs) {
        res.json({playersTable : docs,message:"here all players"});
      }
    })
});
app.get("/teams", (req,res) => {
    console.log("here into get all teams");
    res.json({teamsTable : teams});
});
app.get("/stadiums",(req,res)=>{
  Stadium.find().then((docs)=>{
    res.json({stadiumsTable : docs});
  })
});

// Buisiness Logic : Request Post object : (adding object)
app.post("/players", multer({ storage: storageConfig }).single('img'),(req,res)=> {
    let player = req.body
    console.log("here into adding player", player);
    const url = req.protocol + '://' + req.get('host');
    console.log("here url", url);
    // player.id = generateId(players) + 1
    // players.push(player);

    // insert player (req.body) into database (players)
    let playerObj = new Player ({
      number : player.number ,
      age : player.age ,
      name : player.name ,
      position : player.position,
      img :  url + '/images/' + req.file.filename
    });
    playerObj.save((err,doc)=>{
      // doc : inserted object (name,numbre,..., _id)
      console.log("here doc",doc);
      console.log("here doc",err);
      if (err) {
        res.json({message : "error adding player"})
      } else {
        res.json({message : "player added with success"})
      }
      // (err)? res.json({message : "error adding player"}) 
      // : res.json({message : "player added with success"});
    });

    // playerObj.save()
    // .then(doc => {
    //   console.log("here doc", doc);
    //   res.json({ message: "player added with success" });
    // })
    // .catch(err => {
    //   console.log("here err", err);
    //   res.json({ message: "error adding player" });
    // });
});
app.post("/teams", (req,res)=> {
    console.log("here into adding team", req.body);
    let team = req.body
    team.id = generateId(teams) + 1
    team.push(team);
    res.json({message : "team added with success"})
});
app.post("/matches", (req,res)=> {
    let match = req.body
    console.log("here into adding match", match);
    // match.id = generateId(matches) + 1
    // match.push(match);
    let matchObj = new Match ({
      scoreOne : match.scoreOne ,
      scoreTwo : match.scoreTwo,
      teamOne : match.teamOne ,
      teamTwo : match.teamTwo
    });
    matchObj.save((err,doc)=>{
      console.log("here error",err);
      if (err) {
        res.json({message : "error adding match"})
      } else {
        res.json({message : "match added with success"})      }
    });

    
    
});
app.post("/stadiums",(req,res)=>{
  console.log("here object",req.body);
  let stadium = new Stadium(req.body);
  stadium.save((err,doc)=>{
    if (err) {
      console.log("here error with DB",err);
    } else {
      res.json({message:"Stadium Added with success"})
    }
  }) 
});
app.post("/users/signup", (req,res)=> {
  let user = req.body

  bcrypt.hash(user.pwd,10).then((cryptedPwd)=>{
    console.log("here into adding user", user);
  // insert user (req.body) into database (players)
  let userObj = new User ({
    email : user.email,
    firstName : user.firstName ,
    lastName : user.lastName,
    pwd:cryptedPwd
  });
  userObj.save((err,doc)=>{
    // doc : inserted object (name,numbre,..., _id)
    console.log("here doc",doc);
    console.log("here doc",err);
    if (err) {
      res.json({message : "error adding user", user})
    } else {
      let userInfo  = {
        firstName : doc.firstName,
        lastName : doc.lastName,
        email : doc.email,
        role :"admin"
      };
      res.json({message : "user added with success",user : userInfo})
    }
    
  });
  })
  
});
app.post("/users/login", (req,res)=> {
  // User.findOne({email : req.body.email, pwd: req.body.pwd}).then((response)=>{
  //   if (response) {
  //     res.json({message : true});
  //   }else{
  //     res.json({message : false});
  //   }
  // })
  User.findOne({email : req.body.email}).then((responseEmail)=>{
    console.log("responseEmail",responseEmail);
    if (!responseEmail) {
      res.json({message : "0"});
    }
    return bcrypt.compare(req.body.pwd,responseEmail.pwd);
  }).then(
    (responsePwd)=>{
      console.log("responsePwd",responsePwd);
      if (!responsePwd) {
        res.json({message : "1"});
      }

      User.findOne({email:req.body.email}).then(
        (finalResult)=>{
          let user= {
            firstName: finalResult.firstName,
            lastName: finalResult.lastName,
            email: finalResult.email,

          }
          res.json({message:"2", user :user})
      })
    });
});

// Buisiness Logic : Request To Display Player by id: 
app.get("/players/:id",(req,res)=>{
    console.log("here id",req.params.id);
    // let findedPlayer;
    // for (let i = 0; i < players.length; i++) {
    //     if (players[i].id== req.params.id) {
    //         findedPlayer = players[i];
    //         console.log(findedPlayer);
    //         break;
    //     }        
    // }
    Player.findOne({_id : req.params.id}).then((doc)=>{
      console.log("here data after findOneById",doc);
      if (doc) {
        res.json({player : doc});
      }
    })
});
app.get("/matches/:id",(req,res)=>{
  console.log("here id",req.params.id);
  Match.findOne({_id : req.params.id}).then((doc)=>{
    console.log("here data after findOneById",doc);
    if (doc) {
      res.json({match : doc});
    }
  })
});
app.get("/stadiums/:id",(req,res)=>{
  Stadium.findOne({_id:req.params.id}).then((doc)=>{
    res.json({stadium : doc});
  })
});

// Buisiness Logic : Request Delete object : 
app.delete("/players/:id",(req,res)=>{
    // activatedRoute.snapshot.paramMap.get(id)
    console.log("here into delete player",req.params.id);
    // let pos;
    // let id = req.params.id;
    // for (let i = 0; i < players.length; i++) {
    //   if (players[i].id == id) {
    //     pos = i;
    //     break;
    //   }
    // }
    // players.splice(pos, 1);
    Player.deleteOne({_id : req.params.id}).then((data)=>{
      console.log("here data after delete",data)
      if (data.deletedCount==1) {
        res.json({message : `"player N ${req.params.id} deleted with success"`});
      }
    });
});
app.delete("/teams/:id",(req,res)=>{
    // activatedRoute.snapshot.paramMap.get(id)
    console.log("here into delete team",req.params.id);
    let pos;
    let id = req.params.id;
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].id == id) {
        pos = i;
        break;
      }
    }
    teams.splice(pos, 1);
    res.json({message : `"team N ${id} deleted with success"`});
});
app.delete("/matches/:id",(req,res)=>{
    // activatedRoute.snapshot.paramMap.get(id)
    console.log("here into delete match",req.params.id);
    // let pos;
    // let id = req.params.id;
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id == id) {
    //     pos = i;
    //     break;
    //   }
    // }
    // matches.splice(pos, 1);
    // res.json({message : `"match N ${id} deleted with success"`});
    Match.deleteOne({_id : req.params.id}).then((data)=>{
      console.log("here data after delete",data)
      if (data.deletedCount==1) {
        res.json({message : `"match N ${req.params.id} deleted with success"`});
      }
    });
});

// Buisiness Logic : Request Edit Player : 
app.put("/players/:id",(req,res)=>{
  console.log("here into edit player",req.body);
  // let id = req.body.id ; 
  // for (let i = 0; i < players.length; i++) {
  //   if (players[i].id ==req.body.id) {
  //     players[i]=req.body
  //     break;
  //   }
  // }
  Player.updateOne({_id:req.params.id},req.body).then((doc)=>{
    console.log("here data after edit",doc);
    if (doc.modifiedCount) {
      res.json({message : "edit with success"})
    }
  })
});
app.put("/matches/:id",(req,res)=>{
  console.log("here into edit player",req.body);
  Match.updateOne({_id:req.params.id},req.body).then((doc)=>{
    console.log("here data after edit",doc);
    if (doc.modifiedCount) {
      res.json({message : "edit with success"})
    }
  })
});
app.put("/stadiums/:id",(req,res)=>{
  console.log("here into edit stadium",req.body);
  Stadium.updateOne({_id:req.params.id},req.body).then((doc)=>{
    console.log("here data after edit",doc);
    if (doc.modifiedCount==1) {
      res.json({message : "edit with success"})
    }
  })
});

// Buisiness Logic : Request Search Match : 
app.post("/search",(req,res)=>{
  console.log("here match", req.body);
  let findedMatches = [];
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].teamOne == req.body.teamOne && matches[i].teamTwo == req.body.teamTwo) {
      findedMatches.push(matches[i]);
    }    
  }
  res.json({allMatches : findedMatches});
});

// Buisiness Logic : Request Search Weather : 
// app.post("/weather", (req,res)=>{
//   console.log("here country",req.body);
//   let 
//   axios.get()
// })

app.post("/weather", (req, res) => {
  console.log('here into country', req.body);
  const country = req.body.country;
  const apiKey = "62ee756a34835483299877a61961cafb";
  const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      country + "&appid=" + apiKey + "&units=metric";
  axios.get(apiUrl).then((response) => {
      console.log('Here response', response);
      const weather = response.data.main;
      console.log('Here weather main', weather);
      const result = {
          temp: weather.temp,
          pressure: weather.pressure,
          humidity: weather.humidity
      }
      res.json({ result: result });
  });
});


function generateId(T) {
    var max;
    if (T.length == 0) {
      max = 0;
    } else {
      max = T[0].id;
      for (let i = 1; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;
        }
      }
    }
    return max;
}
// app is importable from another files
module.exports = app ;

