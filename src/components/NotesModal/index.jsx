import React, { useContext } from "react";
import "./notesModal.scss";
import { applicationContext } from "../../context";

const NotesModal = () => {
  const { notes, setNotes } = useContext(applicationContext);

  return (
    <div className="notesModal">
      <div>
        <span>{notes}</span>
        <button className="closeModal" onClick={() => setNotes("")}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotesModal;
