var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var jwtDecode = require('jwt-decode');

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
        const token = req.body.id;
        var decoded = jwtDecode(token);
        console.log(decoded);
        var product = new Product({
            title: req.body.title,
            price: req.body.price,
            images: req.body.images,
            description: req.body.description,
            condition: req.body.condition,
            catalog: req.body.catalog,
            url: req.body.url,
            _user: decoded.userId
        })
        product.save(function(err,data){
            if (err) {
                console.log(err);
                res.json({ message: "error", err: err });
            } else {
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