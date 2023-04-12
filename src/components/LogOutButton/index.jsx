import React, { useContext } from "react";
import "./logOutButton.scss";
import { applicationContext } from "../../context";

const LogOutButton = () => {
  const { setAccessToken, body, setBody } = useContext(applicationContext);

  return (
    <div className="logOutButton">
      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem("accessToken", "");
          sessionStorage.setItem("user", JSON.stringify(""));
          setAccessToken(sessionStorage.getItem("accessToken"));
          setBody({ ...body, email: "", password: "" });
        }}
      >
        LogOutButton
      </button>
    </div>
  );
};

export default LogOutButton;
