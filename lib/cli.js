var toothless = require('./toothless'),
    command = process.argv[2];

exports.define = function (args, handler) {
    args.forEach(function(input) {
       if(command === input)
            return toothless[handler];
    });
};
