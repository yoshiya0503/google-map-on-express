/**
 * @fileoverview search history
 * @name history.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var _ = require('lodash');
var moment = require('moment');
var mongoskin = require('mongoskin');
var config = require('../config');
var db = mongoskin.db(config.mongo);
var history = db.collection('history');

/**
 * @method getHistorys
 * @callback {Function} callback
 */
exports.getHistorys = function(callback) {
    history.find({}).toArray(function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

/**
 * save address in mongoDB
 * @method saveAddress
 * @param {String} address
 * @callback {Function} callback
 */
exports.saveAddress = function(address, callback) {
    var query = {
        time: moment().format(),
        address: address,
    };
    history.insert(query, function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(null, query);
    });
};
