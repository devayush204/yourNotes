import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    
            //Get all note
    const getNotes = async () => {
        //todo api calls
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzY2RjNTJiZTNkMmYwMTYyNTRmMzUwIn0sImlhdCI6MTY4MTczNTQ5N30.C2ukc0DOSDC4qPhmvLGTKX-xoxpmVHUMXbDfB4Xv-Bs.eyJ1c2VyIjp7ImlkIjoiNjQzY2RjNTJiZTNkMmYwMTYyNTRmMzUwIn0sImlhdCI6MTY4MTczNTQ5N30.C2ukc0DOSDC4qPhmvLGTKX-xoxpmVHUMXbDfB4Xv-Bs"
            }
            
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }

 
        


   
    //Add a note
    const addNote = async (title, description, tag) => {
        //todo api calls
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzY2RjNTJiZTNkMmYwMTYyNTRmMzUwIn0sImlhdCI6MTY4MTczNTQ5N30.C2ukc0DOSDC4qPhmvLGTKX-xoxpmVHUMXbDfB4Xv-Bs"
            },
            body: JSON.stringify({title, description, tag})
        });
        const note = await response.json();
        setNotes(notes.concat(note))

    }


    //Delete a note
    const deleteNote = async (id) => {

        // api call 
        const response  =await fetch(`${host}/api/notes/deletnote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzY2RjNTJiZTNkMmYwMTYyNTRmMzUwIn0sImlhdCI6MTY4MTczNTQ5N30.C2ukc0DOSDC4qPhmvLGTKX-xoxpmVHUMXbDfB4Xv-Bs"

            }
        });
        const json =response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }



    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzY2RjNTJiZTNkMmYwMTYyNTRmMzUwIn0sImlhdCI6MTY4MTczNTQ5N30.C2ukc0DOSDC4qPhmvLGTKX-xoxpmVHUMXbDfB4Xv-Bs"
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();


        //logic to edit note
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }

    }
    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;