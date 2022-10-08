/*
    - core modules
    - npm packages
    - custom files
*/
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title', // description of argument to be passed
      demandOption: true, // require an argument to be passed from cl
      type: 'string', // must be of type string (can be empty)
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing a note!');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Listing all notes',
  handler: function () {
    console.log('Listing out all notes!');
  },
});

// Create readd command
yargs.command({
  command: 'read',
  describe: 'Reading the note',
  handler: function () {
    console.log('Reading a note!');
  },
});

yargs.parse(); // parses the argument with all config details provided
//console.log(yargs.argv);
