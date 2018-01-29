var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = {

    viewAll: function(req, res) {
        Product.find({}, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: "error", err: err });
            } else {
                res.json({ message: "Success", data: data })
            }
        })
    },

    create: function(req, res) {
        console.log("this is Post Data", req.body)
        Product.create(req.body, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: "error retrieving Products", err: err });
            } else if (data) {

                res.json({ message: "Success", data: data })
            }
        })
    },

    viewOne: function(req, res) {
        console.log("this is the id", req.params.id)
        Product.find({ _id: req.params.id }, function(err, data) {
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
        Product.update({ _id: req.params.id }, req.body, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: "error retrieving quotes", err: err });
            } else if (data) {
                res.json({ message: "Success", data: data })
            }
        })
    },

    delete: function(req, res) {
        console.log("This is the id to be remove", req.params.id)
        Product.remove({ _id: req.params.id }, function(err) {
            if (err) {
                res.json({ status: false, err: err })
            }
        })
    }

}