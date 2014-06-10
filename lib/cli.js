var toothless = require('./toothless'),
    input = process.argv[2],
    out = process.argv;

// format = toothless [-o, --options]
exports.option = function (args, handler) {
    args.forEach(function(arg) {
        if(input === arg)
            return toothless[handler]();
    });
};

// format = toothless [command] [out]
exports.command = function(command) {
    if (input === command)
        return toothless[command](out[3], out[4]);
}
