'use strict';

var path = require('path'),
    util = require('./util');

module.exports = function() {
    return {
        set: function() {
            return 'function example';
        },
        version: function() {
            util.read('/../docs/version.md');
        },
        help: function() {
            util.read('/../docs/help.md')
        }
    };
}
