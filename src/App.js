import React, { useEffect, useState } from "react";
import "./App.css";
import { ApplicationProvider } from "./context";
import LogInPage from "./pages/LogInPage";
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WizardPage from "./pages/WizardPage";
import CandidateProfilePage from "./pages/CandidateProfilePage";

const App = () => {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [users, setUsers] = useState(null);
  const [accessToken, setAccessToken] = useState(
    JSON.parse(sessionStorage.getItem("accessToken"))
  );
  const [failed, setFailed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [companyID, setCompanyId] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [selectedChar, setSelectedChar] = useState({});
  const [selectReport, setSelectReport] = useState([]);

  function fetchReports() {
    fetch("http://localhost:3333/444/api/reports")
      .then((response) => response.json())
      .then((data) => console.log(data) || setSelectReport(data));
  }
  useEffect(() => {
    fetchReports();
  }, []);

  function fetchUsers() {
    fetch("http://localhost:3333/444/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {}, [accessToken]);
  function fetchCandidates() {
    fetch("http://localhost:3333/api/candidates")
      .then((response) => response.json())
      .then((data) => setCandidates(data));
  }

  useEffect(() => {
    fetchCandidates();
    // eslint-disable-next-line
  }, []);

  function logIn() {
    fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    })
      .then((response) => {
        if (response.status < 400) return response.json();
        else {
          setFailed(!failed);
          setTimeout(() => {
            setFailed(false);
          }, 3000);
        }
      })
      .then((data) => {
        sessionStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        setAccessToken(JSON.parse(sessionStorage.getItem("accessToken")));
      });
  }

  return (
    <ApplicationProvider
      value={{
        failed,
        setFailed,
        users,
        setUser,
        logIn,
        body,
        setBody,
        inputValue,
        setInputValue,
        setAccessToken,
        companyID,
        setCompanyId,
        user,
        candidates,
        setSelectedChar,
        selectedChar,
        selectReport,
        setSelectReport,
      }}
    >
      <div className="app">
        <BrowserRouter>
          {!accessToken && (
            <Routes>
              <Route exact path="/" element={<LogInPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          )}
          {accessToken && user?.admin === false && (
            <Routes>
              <Route
                exact
                path={`/${user.name.toLowerCase()}`}
                element={<LandingPage />}
              />
              <Route
                exact
                path={`/${user.name.toLowerCase()}/:id`}
                element={<CandidateProfilePage selectedChar={selectedChar} />}
              />
              <Route
                path="*"
                element={
                  <Navigate to={`/${user.name.toLowerCase()}`} replace />
                }
              />
            </Routes>
          )}
          {user?.admin === true && accessToken && (
            <Routes>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/wizard" element={<WizardPage />} />
              {/* <Route path="/admin/:company" element={<LandingPage />} /> */}
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </ApplicationProvider>
  );
};

export default App;
