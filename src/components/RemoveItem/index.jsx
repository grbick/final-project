import React from "react";
import "./removeItem.scss";

const RemoveItem = (props) => {
  function remove(itemID) {
    fetch(`http://localhost:3333/api/companies/${itemID}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
  }
  return (
    <div className="removeItem">
      <button className="removeButton" onClick={() => remove(props.id)}>
        RemoveButt
      </button>
    </div>
  );
};

export default RemoveItem;
