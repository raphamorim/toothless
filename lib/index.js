var toothless = require('./toothless'),
    command = require('./cli')(process.argv);

if (command === '-v' || command === '--version')
    return toothless.version()

if (command === '-h' || command === '--help')
    return toothless.help()

return toothless.default()
