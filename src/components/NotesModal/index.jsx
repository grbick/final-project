import React, { useContext } from "react";
import "./notesModal.scss";
import { adminContext } from "../../context";

const NotesModal = () => {
  const { setCreateModal } = useContext(adminContext);

  return (
    <div className="notesModal">
      <div>
        <button className="closeModal" onClick={() => setCreateModal(null)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotesModal;
