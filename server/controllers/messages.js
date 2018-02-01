var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var jwt = require('jsonwebtoken');
var config = require('../config/database');

module.exports = {

    create: function(req, res) {
        console.log("this is Post Data", req.body)
        var Message = new Message({
            content: req.body.content,

        })
        console.log(Message);
        Message.save(req.body, function(err, data) {
            if (err) {
                console.log("err", err);
                res.json({ message: "error retrieving Messages", err: err });
            } else if (data) {
                console.log("data", data)
                res.json({ message: "Success", data: data })
            }
        })
    },

    viewOne: function(req, res) {
        console.log("this is the id", req.params.id)
        Message.find({ _id: req.params.id }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ status: false, err: err });
            } else if (data) {
                res.json({ status: true, data: data })
            }
        })
    },



}