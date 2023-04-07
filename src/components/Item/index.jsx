import React from "react";
import "./item.scss";
import NotesButton from "../NotesButton";
import RemoveItem from "../RemoveItem";
import NotesModal from "../NotesModal";

const Item = () => {
  return (
    <div className="item">
      <NotesButton />
      <RemoveItem />
      <NotesModal />
    </div>
  );
};

export default Item;
