var cfg = require("../../lib/plugin.js").cfg;
var express = require('express');

/**
 * http-basic-auth plugin for Dromedary library.
 * Sets a basic authentication for the route
 * @param req the HTTP request
 * @param res the HTTP response
 * @param cb the callback function
 */
function plugin(req, res, cb) {
    console.log("->dro-http-basic-auth   ");
    var _ = cfg(req);
    var auth;
    if(_['basic-auth'] && _['basic-auth'].user && _['basic-auth'].pass) {
        auth = express.basicAuth(_['basic-auth'].user, _['basic-auth'].pass);
    }
    cb();
}

/**
 * Public Inteface
 * @type {{plugin:plugin}}
 */
module.exports = {
    plugin: plugin
};