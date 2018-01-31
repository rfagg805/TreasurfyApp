var mongoose = require('mongoose');
var User = mongoose.model('User');

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
        user.save(req.body, function(err, data){
            if (err) {
                console.log("err",err);
                res.json({ message: "error retrieving Users", err: err });
            } else if (data) {
                console.log("data",data)
                res.json({ message: "Success", data: data })
            }
        })
    },

    viewOne: function(req, res) {
        console.log("this is the id", req.params.id)
        User.find({ _id: req.params.id }, function(err, data) {
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
        User.update({ _id: req.params.id }, req.body, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: "error retrieving quotes", err: err });
            } else if (data) {
                res.json({ message: "Success", data: data })
            }
        })
    },

    login: function(req, res){
        console.log("login", req.body);
        User.findOne({email: req.body.email}, function(err, data){
            if (err) {
                console.log(err);
                res.json({ message: "error retrieving quotes", err: err });
            } else {
                data.comparePassword(req.body.password, function(err, isMatch){
                    if(err){
                        console.log(err);
                        res.json({ message: "error retrieving quotes", err: err });
                    }
                    else{
                        console.log(isMatch);
                        res.json({ message: "Success", data: isMatch })
                    }
                })
            }
        })
    }

}