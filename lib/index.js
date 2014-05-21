var toothless = require('./toothless')(),
    args = process.argv;

if (args[2] === '-v' || args[2] === '--version')
    toothless.version();

if (args[2] === '-h' || args[2] === '--help')
    toothless.help();

