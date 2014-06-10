var toothless = require('./toothless'),
    verify = require('./cli').verify;

if (verify(['-v', '--version']))
    toothless.version();

else if (verify(['-h', '--help']))
    toothless.help();

else if (verify(['-a', '--all']))
    toothless.listCommands();

else if (verify('run'))
    toothless.run(process.argv[3]);

else if (verify('remove'))
    toothless.remove(process.argv[3]);

else if (verify('save'))
    toothless.save(process.argv[3], process.argv[4]);

else if (process.argv[2] && (!process.argv[3]))
    toothless.exec(process.argv[2]);

else
    toothless.default();
