import React, { useContext } from "react";
import "./logInPage.scss";
import { useRef } from "react";
import { applicationContext } from "../../context";

const LogInPage = () => {
  const { body,setBody,logIn,setUser,users,failed,setFailed,} = useContext(applicationContext);
  return (
    <div className="logInPage">
      <div className="hello-div">
        <img src="" alt="" />
        <p>Welcome to the AlphaAlpha Candidate Review Application!</p>
        <p>Please log in to continue. &#8594; </p>
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
              ) ? users.find(
                (element) => element.email === e.target.value)
              : '';
              sessionStorage.setItem("user", JSON.stringify(user));
              setUser(JSON.parse(sessionStorage.getItem("user")));
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
            onKeyDown={(e)=>{
              if(e.key === 'Enter')logIn()
            }}
            value={body.password}
          />
        </label>
        <div className="invalid-input">{failed && <p>Wrong input!</p>}</div>
        <button onClick={logIn} >Log in</button>
      </div>
    </div>
  );
};

export default LogInPage;
