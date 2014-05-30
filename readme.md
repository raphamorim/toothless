# Toothless

Create global commands from shell script files. Run these recorded commands in anywhere. Bootstrap your environment faster. Connect with shell script files in one defined repo in git and run they locally. 

Don't be shy, send a Pull Request :)

## Install

Before anything, you need to have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

    $ npm install -g toothless

## Usage

Run shell script (without record):

    $ toothless run [path]

Record command from a shell script:

    $ toothless [command name] [path]

Execute recorded command:

    $ toothless [command name]

Remove recorded command:

    $ toothless remove [command name]


## Options

    toothless [options]

    Options:

        -a, --all                 output saved commands
        -h, --help                output usage information
        -v, --version             output the version number


## About

**License:** MIT ® [Raphael Amorim](https://github.com/raphamorim)

## Changelog

v 0.1.3

*   Fix permission problem
*   Add Grunt and JSHint to project

v 0.1.0

*   Save and execute commands
*   Run shell script files
*   Features working only with permission

