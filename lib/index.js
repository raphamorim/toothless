var toothless = require('./toothless')(),
    args = process.argv;

if (!args[2] || !toothless[args[2]])
    return toothless.default();

if (args[2] === '-v' || args[2] === '--version')
    return toothless.version();

if (args[2] === '-h' || args[2] === '--help')
    return toothless.help();

