var toothless = require('./toothless')(),
    args = process.argv,
    command = args[2];

if (command === '-v' || command === '--version')
    return toothless.version()

if (command === '-h' || command === '--help')
    return toothless.help()

return toothless.default()
