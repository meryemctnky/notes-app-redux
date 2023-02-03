import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/notes/notesSlice";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import EditModal from "../EditModal";

const Note = (props) => {
  const { id, title, text, color, createdAt } = props;
  
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();


  return (
    <>
      <div className="col">
        <div className="card h-100 border-0 shadow" style={{ backgroundColor: color }}>
          <div className="card-body d-flex flex-column align-items-start">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
          </div>
          <div className="card-footer bg-transparent d-flex justify-content-between pt-2">
            <h6 className="card-text">{createdAt}</h6>
            <div>
              <BsTrash
                size="1.3rem"
                className="icon"
                onClick={() => dispatch(deleteNote({ id }))}
              />
              <FiEdit
                size="1.3rem"
                className="icon"
                onClick={() => setModalShow(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        noteToEdit={{ id, title, text, color }}
      />
    </>
  );
};

export default Note;
