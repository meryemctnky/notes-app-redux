import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import { editNote } from '../../redux/notes/notesSlice';

const EditModal = (props) => {
const { show, onHide, noteToEdit } = props;

const dispatch = useDispatch();
const [title, setTitle] = useState(noteToEdit ? noteToEdit.title : '');
const [text, setText] = useState(noteToEdit ? noteToEdit.text : '');
const [color, setColor] = useState(noteToEdit ? noteToEdit.color : '#fec100');

const handleNoteEdit = () => {
    const editedNote = {
        title,
        text,
        color,
        id: noteToEdit.id
    };
    dispatch(editNote(editedNote));
    onHide();
};

const handleTitleChange = (event) => {
setTitle(event.target.value);
};

const handleTextChange = (event) => {
setText(event.target.value);
};

const handleColorChange = (event) => {
    setColor(event.target.value);
};

return (
    <>
    <div className={`modal ${show ? 'd-block' : 'd-none'} mt-0`} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Note</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control mt-1" id="title" value={title} onChange={handleTitleChange} autoFocus />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="description">Description</label>
                <textarea className="form-control mt-1" id="description" rows="3" value={text} onChange={handleTextChange}></textarea>
              </div>
              <div className="form-group mb-2">
              <div className="color-picker">
                   <input type="radio" name="color-pick" value="#528078" id="color6" checked={color === "#528078"} onChange={handleColorChange} />
                   <label className="form-label" htmlFor="color6" style={{backgroundColor: "#528078"}}></label>
                   <input type="radio" name="color-pick" value="#eed75a" id="color7" checked={color === "#eed75a"} onChange={handleColorChange} />
                   <label className="form-label" htmlFor="color7" style={{backgroundColor: "#eed75a"}}></label>
                   <input type="radio" name="color-pick" value="#fec100" id="color8"  checked={color === "#fec100"} onChange={handleColorChange} />
                   <label className="form-label" htmlFor="color8" style={{backgroundColor: "#fec100"}}></label>
                   <input type="radio" name="color-pick" value="#db7474" id="color9" checked={color === "#db7474"} onChange={handleColorChange} />
                   <label className="form-label" htmlFor="color9" style={{backgroundColor: "#db7474"}}></label>
                   <input type="radio" name="color-pick" value="#63e792" id="color10" checked={color === "#63e792"} onChange={handleColorChange} />
                   <label className="form-label" htmlFor="color10" style={{backgroundColor: "#63e792"}}></label>
               </div>
               </div>
            </form>
          </div>
          <div className="modal-footer mt-2">
            <button type="button" className="btn btn-dark" onClick={onHide}>Close</button>
            <button type="button" className="btn btn-primary text-light" onClick={handleNoteEdit}>Edit</button>
          </div>
        </div>
      </div>
    </div>

    </>
)

}


export default EditModal;