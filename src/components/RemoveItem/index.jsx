import React, { useContext } from "react";
import "./removeItem.scss";
import { adminContext } from "../../context";
import { applicationContext } from "../../context";

const RemoveItem = (props) => {
  const { freshData, setFreshData } = useContext(applicationContext);
  const { data } = useContext(adminContext);

  function remove(itemID) {
    fetch(`http://localhost:3333/api/${data}/${itemID}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    setFreshData(!freshData);
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
