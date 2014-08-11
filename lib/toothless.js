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
            return console.log('Hey pal, an error occurred\n\n>> ' + error);

        console.log(stdout);
    });
};

Toothless.prototype.run = function(pathFile) {
    if(!pathFile) return console.log('Bro, use a valid file path.\n');

    console.log("Toothless say: It's running...");
    console.time('Execution Time');

    var that = this,
    sh = 'sh ' + pathFile;
    
    shell.exec(sh, function (error, stdout, stderr) {
        if (error) return that.default();
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
    });

    console.timeEnd('Execution Time');
    console.log('');
};

Toothless.prototype.save = function(name, shell) {
    if(!name) return console.log('Dude, you\'ve forgotten the command name! \nUse [--help] to see how it works.\n');
    if(!shell) return console.log('Dude, you\'ve forgotten the file path! \nUse [--help] to see how it works.\n');

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
    var errMsg = 'Bro, select an existing command.\nUse [--all] for list all commands\n';
    if(!name) return console.log(errMsg);

    var path = env + '/toothless/' + name + '.sh';
    fs.unlink(path, function (err) {
        if (err)
            return console.log(errMsg);

        console.log('Successfully removed :)\n');
    });
};

Toothless.prototype.exec = function(command) {
    console.log("Toothless say: " + command + " is running...");
    console.time('Execution Time');

    var that = this,
    sh = 'sh ' + env + '/toothless/' + command + '.sh';
    
    shell.exec(sh, function (error, stdout, stderr) {
        if (error) return that.default();
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
    });

    console.timeEnd('Execution Time');
    console.log('');
};

module.exports = new Toothless();
