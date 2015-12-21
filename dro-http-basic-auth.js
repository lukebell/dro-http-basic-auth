var cfg = require("../../lib/plugin.js").cfg;
var auth = require('basic-auth');

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
    var user = auth(req);
    if (_['basicAuth'] && _['basicAuth'].user && _['basicAauth'].pass && _['basicAuth'].user === user.name &&
        _['basicAauth'].pass === user.pass) {
        cb();
    } else {
        res.set({
            'WWW-Authenticate': 'Basic realm=Authorization Required'
        }).send(401);
    }
}

/**
 * Public Inteface
 * @type {{plugin:plugin}}
 */
module.exports = {
    plugin: plugin
};