'use strict';

var fs = require('fs');

function Utils() {
    this.read = function(filename) {
        fs.readFile(__dirname + filename, 'utf8', function(err, data) {
            if (err) throw err;
                console.log(data);
        });
    }
}

module.exports = new Utils();
