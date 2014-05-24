var utils = require('./utils'),
    shell = require('child_process');

exports.default = function() {
    utils.read('/../docs/default.md');
};

exports.version = function() {
    utils.read('/../docs/version.md');
};

exports.help = function() {
    utils.read('/../docs/help.md');
};

exports.listCommands = function() {
    var sh = 'ls ' + __dirname + '/shell/';
    shell.exec(sh, function (error, stdout, stderr) {
        if (error)
            return utils.read('/../docs/default.md');

        console.log(stdout);
    });
};

exports.run = function(pathFile) {
    var sh = 'sh ' + pathFile;
    shell.exec(sh, function (error, stdout, stderr) {
        if (error)
            return console.log('Hey pal, an error occurred\n\n>> ' + error);

        console.log(stdout);
    });
};

exports.save = function(name, sh) {
    utils.saveCommand(name, sh);
};

exports.remove = function(name) {
    utils.removeCommand(name);
};

exports.exec = function(command) {
    var sh = 'sh ' + __dirname + '/shell/' + command + '.sh';
    shell.exec(sh, function (error, stdout, stderr) {
        if (error)
            return utils.read('/../docs/default.md');

        console.log(stdout);
    });
};
