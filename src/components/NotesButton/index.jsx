import React, { useContext } from "react";
import "./notesButton.scss";
import { applicationContext } from "../../context";

const NotesButton = (props) => {
  const { setNotes } = useContext(applicationContext);

  return (
    <div className="notesButton">
      <button onClick={() => setNotes(props.notes)}>Notes</button>
    </div>
  );
};

export default NotesButton;
