import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import Main from "./Main";
import Sidebar from "./Sidebar";


const getNote = () => {
    const note = JSON.parse(localStorage.getItem('notes')) || [];
    return note;
}

const Notepad = () => {
    const [notes, setNotes] = useState(() => getNote()); 
    const [activeNote, setActiveNote] = useState("");

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
      }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuidv4(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        };

        setNotes([newNote, ...notes]);
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if(note.id === activeNote) {
                return updatedNote;
            }

                return note;
        });

        setNotes(updatedNotesArray);
    }

    const onDeleteNote = (idToDelete) => {
        setNotes(notes.filter((note) => note.id !== idToDelete))
    }


    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote) || {}
    }
    return (
        <>
            <Main activeNote={getActiveNote()}
            onUpdateNote={onUpdateNote} />

            <Sidebar 
            notes={notes} 
            onAddNote={onAddNote} 
            onDeleteNote={onDeleteNote}
            activeNote={activeNote} 
            setActiveNote={setActiveNote}
             />
        </>
    );

}

export default Notepad;