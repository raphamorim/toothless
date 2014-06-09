var define = require('./cli').define;

// Options
define(['-h', '--help'], 'help');
define(['-v', '--version'], 'version');
define(['-a', '--all'], 'listCommands');

// Commands
