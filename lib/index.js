var option = require('./cli').option,
    command = require('./cli').command;

// Options
option(['-h', '--help'], 'help');
option(['-v', '--version'], 'version');
option(['-a', '--all'], 'listCommands');

// Commands
command('run');
command('remove');
command('save');
