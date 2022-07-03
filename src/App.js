import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first Notes",
      date: "2/7/2022",
    },
    {
      id: nanoid(),
      text: "This is my Second Notes",
      date: "3/7/2022",
    },
    {
      id: nanoid(),
      text: "This is my Third Notes",
      date: "4/7/2022",
    },
  ]);

  const [searchNote, setSearchNote] = useState("");

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("react-notes-data"));

    if (saveData) {
      setNotes(saveData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNoteArray = [...notes, newNote];
    setNotes(newNoteArray);
  };

  const [darkNotes, setDarkNotes] = useState(false);

  const deleteNote = (id) => {
    const newNoteArray = notes.filter((note) => note.id !== id);
    setNotes(newNoteArray);
  };

  return (
    <div className={`${darkNotes && "dark-mode"}`}>
      <div className="container">
        <Header handleToggle={setDarkNotes} />
        <Search handleSearchNote={setSearchNote} />
        <NotesList
          notes={notes.filter((note) => note.text.includes(searchNote))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
