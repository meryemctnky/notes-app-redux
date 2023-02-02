import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../../redux/notes/notesSlice'

const Header = () => {
  const searchValue = useSelector((state) => state.notes.searchValue)
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    dispatch(search(e.target.value.toLowerCase()))
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <div className="navbar-brand text-light fw-bold">NotesApp</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <form className="ms-auto">
            <input className="form-control mt-3 mt-lg-0 w-100" type="text" placeholder="Search..." value={searchValue} onChange={(e) => handleSearch(e)} />
          </form>
        </div>
      </div>
    </nav>
  )
};

export default Header;
