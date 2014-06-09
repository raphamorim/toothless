var toothless = require('./toothless');

exports.define = function (args, handler) {
    var command = process.argv[2];

    args.forEach(function(input) {
        if(command === input)
            return toothless[handler]();
    });
};
