const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0') 

//create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            description: 'Note Title',
            demandOption: true,
            type: 'string',

        },
        body: {
            describtion: 'Write the body of the note',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }

    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

//create read sommand
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'Note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler () {
        notes.listNotes()
    }
})

yargs.parse() 