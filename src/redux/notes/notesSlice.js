import { createSlice } from "@reduxjs/toolkit";
import Moment from "moment";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    searchValue: "",
    filteredNotes: [],
  },
  reducers: {
    addNote: (state, action) => {
    state.notes = [...state.notes, { ...action.payload, createdAt: Moment().format("DD/MM/YYYY") }];
    state.filteredNotes = [...state.notes];
    
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
      state.filteredNotes = state.notes;
    },
    editNote: (state, action) => {
      const { id, title, text, color } = action.payload;
      const index = state.notes.findIndex(note => note.id === id);
      state.notes[index].title = title;
      state.notes[index].text = text;
      state.notes[index].color = color;
      state.filteredNotes = state.notes;
    },
    search: (state, action) => {
      state.searchValue = action.payload;
      if (state.searchValue !== '') {
        state.filteredNotes = state.notes.filter((note) =>
          note.text.toLowerCase().indexOf(state.searchValue.toLowerCase()) !== -1 
        );
      } else {
        state.filteredNotes = state.notes;
      }    
    },
  },
});

export const { addNote, deleteNote, editNote, search } = notesSlice.actions;

export default notesSlice.reducer;
