import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../../../redux/notes/notesSlice';

const AddModal = (props) => {
  const { show, onHide } = props;
  
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState('#fec100');

 
  const handleNoteAdd = () => {
    const newNote = {
      title,
      text,
      color,
      id: Date.now()
    };
    dispatch(addNote(newNote));
    setTitle('');
    setText('');
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
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Note</h5>
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
              <div className="color-picker" onChange={handleColorChange}>
                   <input type="radio" name="color-pick" value="#528078" id="color1" />
                   <label className="form-label" htmlFor="color1" style={{backgroundColor: "#528078"}}></label>
                   <input type="radio" name="color-pick" value="#eed75a" id="color2" />
                   <label className="form-label" htmlFor="color2" style={{backgroundColor: "#eed75a"}}></label>
                   <input type="radio" name="color-pick" value="#fec100" id="color3" />
                   <label className="form-label" htmlFor="color3" style={{backgroundColor: "#fec100"}}></label>
                   <input type="radio" name="color-pick" value="#db7474" id="color4" />
                   <label className="form-label" htmlFor="color4" style={{backgroundColor: "#db7474"}}></label>
                   <input type="radio" name="color-pick" value="#63e792" id="color5" />
                   <label className="form-label" htmlFor="color5" style={{backgroundColor: "#63e792"}}></label>
               </div>
               </div>
            </form>
          </div>
          <div className="modal-footer mt-2">
            <button type="button" className="btn btn-dark" onClick={onHide}>Close</button>
            <button type="button" className="btn btn-primary text-light" onClick={handleNoteAdd}>Add</button>
          </div>
        </div>
      </div>
    </div>

    </>
)

}


export default AddModal;