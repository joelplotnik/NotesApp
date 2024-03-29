const yargs = require('yargs');
const notes = require('./notes.js');
/*
    - core modules
    - npm packages
    - custom files
*/

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title', // description of argument to be passed
      demandOption: true, // require an argument to be passed from command line
      type: 'string', // must be of type string (can be empty)
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Listing all notes',
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Reading the note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse(); // parses the argument with all config details provided
