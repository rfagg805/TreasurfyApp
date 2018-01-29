var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

    create: function(req, res) {
        console.log("this is Post Data", req.body)
        User.create(req.body, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: "error retrieving Users", err: err });
            } else if (data) {

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

}