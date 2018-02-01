var products = require('../controllers/products.js');
var users = require('../controllers/users.js');
var messages = require('../controllers/messages.js');
var path = require('path');


module.exports = function(app) {

    app.get('/product', function(req, res) {
        products.viewAll(req, res);
    })

    app.post('/product', function(req, res) {
        products.create(req, res);
    })

    app.get('/product/:id', function(req, res) {
        products.viewOne(req, res);
    })

    app.patch('/product/:id', function(req, res) {
        products.update(req, res);
    })

    app.delete('/product/:id', function(req, res) {
        products.delete(req, res)
    })

    app.post('/user', function(req, res) {
        users.create(req, res);
    })

    app.get('/user/:token', function(req, res){
        users.decoded(req, res);
    })

    app.patch('/user', function(req, res) {
        users.login(req, res);
    })

    app.get('/user/:id', function(req, res) {
        users.viewOne(req, res);
    })

    app.patch('/user/:id', function(req, res) {
        users.update(req, res);
    })

    app.post('/message', function(req, res) {
        users.create(req, res);
    })

    app.get('/message/:id', function(req, res) {
        users.viewOne(req, res);
    })

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}