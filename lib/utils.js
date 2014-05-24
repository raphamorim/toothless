var fs = require('fs');

exports.read = function(filename) {
    fs.readFile(__dirname + filename, 'utf8', function(err, data) {
        if (err) throw err;
            console.log(data);
    });
};

exports.removeCommand = function(name) {
    var path = __dirname + '/shell/' + name + '.sh';
    fs.unlink(path, function (err) {
        if (err) throw err;
            console.log('Successfully removed :)\n');
    });
};

exports.saveCommand = function(name, shell) {
    var path = __dirname + '/shell/' + name + '.sh';

    try {
        fs.stat(path, function(err, stat) {
            if(err) {
                fs.readFileSync(shell).toString()
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
