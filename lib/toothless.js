var utils = require('./utils'),
    shell = require('child_process');

exports.default = function() {
    utils.read('/../docs/default.md')
};

exports.version = function() {
    utils.read('/../docs/version.md')
};

exports.help = function() {
    utils.read('/../docs/help.md')
};
