import React, { useContext } from "react";
import "./notesButton.scss";
import { adminContext } from "../../context";

const NotesButton = () => {
  const { setCreateModal } = useContext(adminContext);

  return (
    <div className="notesButton">
      <button onClick={() => setCreateModal("notes")}>Notes</button>
    </div>
  );
};

export default NotesButton;
