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
  const [userReports, setUserReports] = useState(null);
  const [users, setUsers] = useState(null);
  const [accessToken, setAccessToken] = useState(
    sessionStorage.getItem("accessToken")
  );
  const [failed, setFailed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [companyID, setCompanyID] = useState("");
  const [candidates, setCandidates] = useState(null);
  const [companies, setCompanies] = useState(null);
  const [reports, setReports] = useState(null);
  const [notes, setNotes] = useState(null)
  const [side, setSide] = useState(null)
  const [sideFilter, setSideFilter] = useState(null)
  const [freshData, setFreshData] = useState(false)

  function fetchUsers() {
    fetch("http://localhost:3333/444/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }
  function fetchCandidates() {
    fetch("http://localhost:3333/664/api/candidates")
      .then((response) => response.json())
      .then((data) => setCandidates(data));
  }
  function fetchCompanies() {
    fetch("http://localhost:3333/664/api/companies")
      .then((response) => response.json())
      .then((data) => setCompanies(data));
  }
  function fetchReports() {
    fetch("http://localhost:3333/664/api/reports")
      .then((response) => response.json())
      .then((data) => setReports(data));
  }
  useEffect(() => {
    fetchUsers();
  }, [freshData]);
  useEffect(() => {
    fetchCompanies();
  }, [freshData]);
  useEffect(() => {
    fetchCandidates();
  }, [freshData]);
  useEffect(() => {
    fetchReports();
  }, [freshData]);

  // function paginate(array){

  // }
  // function getInteresting(candidateID){
  //   const company = companies?.filter((company)=>user?.id===company.id)
  //   console.log(company);
  //   return company?[0].interesting.find(candidateID);
  // }
  function setInteresting(id) {
    const company = companies?.find((company) => user?.id === company.id)
    fetch(`http://localhost:3333/api/companies/${company?.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        interesting: [...company.interesting, id]
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
  }
  function removeInteresting(id) {
    const company = companies?.find((company) => user?.id === company.id)
    fetch(`http://localhost:3333/api/companies/${company?.id}`, {
      method: "DELETE",
      body: JSON.stringify({
        interesting: [...company.interesting, id]
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
  }

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
        sessionStorage.setItem("accessToken", data.accessToken);
        setAccessToken(sessionStorage.getItem("accessToken"));
      });
  }

  return (
    <ApplicationProvider
      value={{
        failed,
        setFailed,
        users,
        user,
        setUser,
        logIn,
        body,
        setBody,
        inputValue,
        setInputValue,
        setAccessToken,
        companyID,
        setCompanyID,
        candidates,
        companies,
        reports,
        notes,
        setNotes,
        freshData,
        setFreshData,
        side,
        setSide,
        sideFilter,
        setSideFilter,
        userReports,
        setUserReports,
        // getInteresting,
        setInteresting,
        removeInteresting
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
                element={<CandidateProfilePage />}
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
