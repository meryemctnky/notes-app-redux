import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    searchValue: "",
    filteredNotes: [],
  },
  reducers: {
    addNote: (state, action) => {
    state.notes = [...state.notes, action.payload];
    state.filteredNotes = [...state.notes];
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
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

export const { addNote, deleteNote, search } = notesSlice.actions;

export default notesSlice.reducer;
