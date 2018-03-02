const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Client = require("../models/clientModel.js");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const config = require("../../config");
const superSecret = config.secret;

router.post("/signIn", (req, res, next)=>{
    console.log(req);
    let client = new Client({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        password: req.body.password,
        correo: req.body.correo,
        login: req.body.login,
        admin: false
        
    });
    client.save();
   res.status(200).json({
      message: "Thank You for signin in" 
   });
});

router.post("/login", (req, res, next) =>{
    let plogin = req.body.login;
    let ppassword = req.body.password;
    Client.findOne({login: plogin})
    .exec()
    .then(doc => {
        if(doc === undefined){
                res.json({
                    success: false,
                    message: "Authentication failed, user not found"
                });
            }
            else{
                if(doc.password != ppassword){
                    res.json({
                        success: false,
                        message: "Authentication failed, wrong password"
                    });
                }
                else{
                    let token = jwt.sign({
                        name: doc.name,
                        login: doc.login,
                        admin: doc.admin
                    }, superSecret, {expiresIn: 60 * 30}
                                        );

                    res.json({
                        succes: true,
                        message: "Authenticated",
                        token: token
                    });
                }
            }
    })
    .catch(err =>{
        console.log(err);
    })
});


module.exports = router;