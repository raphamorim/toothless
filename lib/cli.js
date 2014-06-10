var toothless = require('./toothless'),
    input = process.argv[2],
    out = process.argv[3];

// format = toothless [-o, --options]
exports.option = function (args, handler) {
    args.forEach(function(arg) {
        if(input === arg)
            return toothless[handler]();
    });
};

// format = toothless [command] [out]
exports.command = function(command, format) {
    if (input === command && (!format))
        return toothless[command](out);
    else if (format === 'standart')
        return toothless[command](input, out);
}
