const fs = require('fs')
const chalk = require('chalk')

const getNotes= ()=> {
    return 'Your notes...'
}

const addNote=  (title, body)=> {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    debugger
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
const removeNote = (title)=>{
    const notes = loadNotes()
    const notetokeep = notes.filter((note)=>
        note.title!==title
    )
    if(notes.length>notetokeep.length){
        console.log(chalk.red.inverse('note removed'))
        saveNotes(notetokeep)

    }
    else{
        console.log(chalk.red.inverse('no note exists of such name'))
    }
    
    

}
const listnotes=()=>{
    const notes = loadNotes()
    notes.forEach(function(note){
        console.log(note.title)
    })

}
const read=(title)=>{
    const notes = loadNotes()
    const notesearch = notes.find((note)=>note.title===title)
    if(notesearch){
        console.log(chalk.red.inverse(notesearch.title))
        console.log(notesearch.body)
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listnotes:listnotes,
    read:read
}
