var shell = require('child_process'),
    fs = require('fs'),
    env = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

var Toothless = function() {
    var path = env + '/toothless/';

    fs.stat(path, function(err, stat) {
        if(err) {
            var sh = 'mkdir ' + env + '/toothless/';
            shell.exec(sh, function (error, stdout, stderr) {
                console.log(stdout);
            });
        }
    });
};

Toothless.prototype.default = function() {
    this.read('/../docs/default.md');
};

Toothless.prototype.version = function() {
    this.read('/../docs/version.md');
};

Toothless.prototype.help = function() {
    this.read('/../docs/help.md');
};

Toothless.prototype.read = function(filename) {
    fs.readFile(__dirname + filename, 'utf8', function(err, data) {
        if (err) throw err;
            console.log(data);
    });
};

Toothless.prototype.listCommands = function() {
    var sh = 'ls ' + env + '/toothless/';
    shell.exec(sh, function (error, stdout, stderr) {
        if (error)
            return utils.read('/../docs/default.md');

        console.log(stdout);
    });
};

Toothless.prototype.run = function(pathFile) {
    var sh = 'sh ' + pathFile;
    shell.exec(sh, function (error, stdout, stderr) {
        if (error)
            return console.log('Hey pal, an error occurred\n\n>> ' + error);

        console.log(stdout);
    });
};

Toothless.prototype.save = function(name, shell) {
    var path = env + '/toothless/' + name + '.sh';

    try {
        fs.stat(path, function(err, stat) {
            if(err) {
                fs.readFileSync(shell)
                .toString()
                .split('\n')
                .forEach(function(line) {
                    fs.appendFileSync(path, line + '\n');
                });
            } else {
                console.log('Kakaroto, this command already exists.\n');
            }
        });
    } catch (e) {
        console.log('Hey pal, an error occurred\n\n>> ' + e);
    }
};

Toothless.prototype.remove = function(name) {
    var path = env + '/toothless/' + name + '.sh';
    fs.unlink(path, function (err) {
        if (err) throw err;
            console.log('Successfully removed :)\n');
    });
};

Toothless.prototype.exec = function(command) {
    var sh = 'sh ' + env + '/toothless/' + command + '.sh';
    shell.exec(sh, function (error, stdout, stderr) {
        if (error)
            return utils.read('/../docs/default.md');

        console.log(stdout);
    });
};

module.exports = new Toothless();
