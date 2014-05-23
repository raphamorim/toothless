var toothless = require('./toothless'),
    command = require('./cli')(process.argv);

if (command === '-v' || command === '--version')
    return toothless.version()

else if (command === '-h' || command === '--help')
    toothless.help()

else if (command === '-a' || command === '--all')
    toothless.listCommands()

else if (command === 'run' && (process.argv[3]))
    toothless.run(process.argv[3])

else if (command === 'remove' && (process.argv[3]))
    toothless.remove(process.argv[3])

else if (command && process.argv[3])
    toothless.save(command, process.argv[3])

else if (command && (!process.argv[3]))
    toothless.exec(command)

else
    toothless.default()
