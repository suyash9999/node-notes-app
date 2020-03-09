/*const add = function(a,b){
    return a+b
}
console.log('util.js')
module.exports = add*/
const fs=require('fs')
const getNotes= function(){
    return 'notes taken'
}

const addnote = function(title,body){
 const note= loadnotes()
 note.push({
     title: title,
     body: body
 })
 
}
const savenotes = function(note){
    const datajson=JSON.stringify(note)
    fs.writeFileSync('note.json',datajson)
}
const loadnotes=function(){

    try{
        const databuffer=fs.readFileSync('notes.json')
    const datajson= databuffer.toString()
    return JSON.parse(datajson)
    }
    catch(e){
        return []
    }
    
}
module.exports= {
    getNotes:getNotes,
    addnote:addnote
}

