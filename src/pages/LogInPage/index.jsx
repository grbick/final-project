import React, { useContext } from "react";
import "./logInPage.scss";
import { applicationContext } from "../../context";

const LogInPage = () => {
  const { body,setBody,logIn,setUser,users,failed, setCompanyID,} = useContext(applicationContext);
  return (
    <div className="logInPage">
      <div className="hello-div">
        <img src="" alt="" />
        <p>Welcome to the AlphaAlpha Candidate Review Application!</p>
        <div>Please log in to continue. <span>&#8594;</span> </div>
      </div>
      <div className="log-in-div">
        <label htmlFor="username">
          <p>Email:</p>
          <input
            type="text"
            name=""
            id="username"
            onInput={(e) => {
              setBody({ ...body, email: e.target.value });
              const user = users.find(
                (element) => element.email === e.target.value
              )
                ? users.find((element) => element.email === e.target.value)
                : "";
              sessionStorage.setItem("user", JSON.stringify(user));
              setUser(JSON.parse(sessionStorage.getItem("user")));
              setCompanyID(user?.id)
            }}
            value={body.email}
          />
        </label>
        <label htmlFor="username">
          <p>Password:</p>
          <input
            type="password"
            name=""
            id="password"
            onInput={(e) => {
              setBody({ ...body, password: e.target.value });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") logIn();
            }}
            value={body.password}
          />
        </label>
        <div className="invalid-input">{failed && <p>Wrong input!</p>}</div>
        <button onClick={logIn}>Log in</button>
      </div>
    </div>
  );
};

export default LogInPage;
