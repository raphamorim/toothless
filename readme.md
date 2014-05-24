# Toothless

Create global commands from shell script files. Run these recorded commands in anywhere. Using to build and make the process more faster. Connect with shell script files in one defined repo in git and run they locally. Don't be shy :)

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
