import React from "react";
import AddNote from "../AddNote";
import Note from "../Note";
import { useSelector } from "react-redux";
import NotFound from "../NotFound";


const NotesGrid = () => {
  const notes = useSelector((state) => state.notes.filteredNotes);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div className="col">
          <AddNote />
        </div>
        {notes && notes.length !== 0
          ? notes.map((note) => (
              <Note
                key={note.id}
                {...note}
              />
            ))
          : <NotFound />}
      </div>
    </div>
  );
};

export default NotesGrid;
