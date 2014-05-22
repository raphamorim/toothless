var utils = require('./utils');

exports.default = function() {
    utils.read('/../docs/default.md')
};

exports.version = function() {
    utils.read('/../docs/version.md')
};

exports.help = function() {
    utils.read('/../docs/help.md')
};
