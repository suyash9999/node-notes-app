/*const add = require('./util.js')
const sum = add(4,2)
console.log(sum)*/
//const validator = require('validator')
const note = require('./note1.js')
const yargs= require('yargs')

//console.log(validator.isEmail('suyash@example.com'))
//console.log(validator.isURL('www.npm.com'))
const chalk = require('chalk')
console.log(chalk.green.bold.inverse('hello guys..'))
//console.log(process.argv[2])

yargs.command({
    command:'add',
    describe:'adding a note',
    builder:{
        title:{
        describe: 'note title',
        demandoption: true,
        type: 'string'
        },
        body:{
            describe:'body of the add option',
            type:'string',
            demandoption:true,
        }
    },
    handler(argv){
        note.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
        title:{
            describe:'note title',
            demandoption:true,
            type:'string'
        }
    },
    handler(argv){
        note.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'list of notes',
    handler(){
        note.listnotes()
    }
})
yargs.command({
    command:'read',
    describe:'reading a note',
    handler(argv){
        note.read(argv.title)
    }
})
yargs.parse()