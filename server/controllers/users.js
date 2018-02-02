var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var jwtDecode = require('jwt-decode');

module.exports = {

    create: function(req, res) {
        console.log("this is Post Data", req.body)
        var user = new User ({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            picture:req.body.picture,
            zipcode:req.body.zipcode
        })
        console.log(user);
        user.save(function(err, data){
            if (err) {
                console.log("err",err);
                res.json({ message: "error creating Users", err: err });
            } else if (data) {
                console.log("data",data)
                const token = jwt.sign({userId: data._id}, config.secret, {expiresIn: '24h'});
                res.json({ message: "Success", data: true, token: token, user: {username: data.name} })
            }
        })
    },

    viewOne: function(req, res) {
        console.log("this is the id", req.params.id)
        User.find({ _id: req.params.id }).populate('_products').exec(function(err, data) {
            if (err) {
                console.log(err);
                res.json({ status: false, err: err });
            } else if (data) {
                res.json({ status: true, data: data })
            }
        })
    },

    update: function(req, res) {
        console.log("This is the update data", req.body);
        User.findOne({_id: req.params.id}, function(err, data){
            if (err) {
                console.log(err);
                res.json({ message: "Can't find by email", err: err });
            } else {
                    data.name = req.body.name,
                    data.email =req.body.email,
                    data.password =req.body.password,
                    data.picture = req.body.picture,
                    data. zipcode=req.body.zipcode
                console.log(data);
                data.save(function(err,data){
                    if (err) {
                        console.log("err",err);
                        res.json({ message: "error retrieving Users", err: err });
                    } else if (data) {
                        console.log("data",data)
                        const token = jwt.sign({userId: data._id}, config.secret, {expiresIn: '24h'});
                        res.json({ message: "Success", data: true, token: token, user: {username: data.name} })
                    }
                })
            }
        })
    },

    login: function(req, res){
        console.log("login", req.body);
        User.findOne({email: req.body.email}, function(err, data){
            if (err) {
                console.log(err);
                res.json({ message: "Can't find by email", err: err });
            } else {
                if(data != null){
                    data.comparePassword(req.body.password, function(err,isMatch){
                        if(err){
                            console.log(err);
                            res.json({ message: "error", err: isMatch });
                        }
                        else{
                            console.log(isMatch);
                            const token = jwt.sign({userId: data._id}, config.secret, {expiresIn: '24h'});
                            res.json({ message: "Success", data: isMatch, token: token, user: {username: data.name} })
                        }
                    })
                }
                else{
                    res.json({ message: "Can't find by email", err: data });
                }
            }
        })
    },

    decoded: function(req, res){
        console.log(req.params)
        var decoded = jwtDecode(req.params.token);
        console.log(decoded);
        res.json({id:decoded.userId})
    }

}