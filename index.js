/**
 * @fileoverview twitter mini apps
 * @name index.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var express = require('express');
var route = express.Router();
var history = require('./lib/history.js');

//google map home routes
route.get('/', function(req, res) {
    return res.render('addressmaps.jade');
});

route.get('/history', function(req, res) {
    return res.render('history.jade');
});

//save address
route.post('/history', function(req, res) {
    var address = req.body.address;
    console.log(address);
    /*
    history.saveAddress(address, function() {
        return res.redirect('/');
    });
    */
   return;
});

module.exports = route;
