'use strict';

var path = require('path'),
    util = require('./util');

module.exports = function() {
    return {
        default: function() {
            util.read('/../docs/default.md');
        },
        version: function() {
            util.read('/../docs/version.md');
        },
        help: function() {
            util.read('/../docs/help.md')
        }
    };
}
