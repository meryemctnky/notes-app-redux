import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import AddModal from "./AddModal";


const AddNote = () => {
  const [modalShow, setModalShow] = useState(false);


  return (
    <>
      <div className="card border-primary h-100">
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <AiFillPlusCircle
            size="5.5rem"
            color="528078"
            className="btn"
            onClick={() => setModalShow(true)}
          />
          <div className="card-title text-secondary">Add New Note</div>
        </div>
      </div>

      <AddModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AddNote;
