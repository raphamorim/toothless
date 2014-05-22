var fs = require('fs');

exports.read = function(filename){
    fs.readFile(__dirname + filename, 'utf8', function(err, data) {
        if (err) throw err;
            console.log(data);
    });
};
