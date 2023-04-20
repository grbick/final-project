import React, { useContext } from "react";
import "./logInPage.scss";
import { applicationContext } from "../../context";

const LogInPage = () => {
  const { body,setBody,logIn,setUser,users,failed, setCompanyID,} = useContext(applicationContext);
  return (
    <div className="logInPage"> 
      <div className="hello-div">
        <img src="" alt="" />
        <h2>Welcome to the AlphaAlpha Candidate Review Application!</h2>
        <p>Please log in below to continue. </p>
      </div>
      <div className="message">“I’m a greater believer in luck, and I find the harder I work the more I have of it.” — Thomas Jefferson</div>
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
            <p>Just make Your first move, we will do the rest! </p>
      </div>
    </div>
  );
};

export default LogInPage;
