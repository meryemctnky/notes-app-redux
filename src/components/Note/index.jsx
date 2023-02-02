import React from "react";
import Moment from "moment";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/notes/notesSlice";
import { BsTrash } from "react-icons/bs";

const Note = (props) => {
  const dispatch = useDispatch();

  const { id, title, text, color } = props;
  var style = { backgroundColor: color };

  const date = Moment().format("DD/MM/YYYY");

  return (
    <div className="col">
      <div className="card h-100 border-0" style={style}>
        <div className="card-body d-flex flex-column align-items-start">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer bg-transparent d-flex justify-content-between pt-2">
          <h6 className="card-text">{date}</h6>
          <BsTrash
            size="1.3rem"
            className="trash"
            onClick={() => dispatch(deleteNote({ id }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
