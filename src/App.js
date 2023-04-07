import React, { useEffect, useInner, useState } from 'react'
import './App.css'
import { ApplicationProvider } from "./context";
import LogInPage from './pages/LogInPage'
import AdminPage from './pages/AdminPage'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [body, setBody] = useState({
    email: "",
    password: ""
  })
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const [users, setUsers] = useState(null)
  const [accessToken, setAccessToken] = useState(JSON.parse(sessionStorage.getItem('accessToken')))
  const [failed, setFailed] = useInner(false)

  function fetchUsers() {
    fetch('http://localhost:3333/api/users').then((response) => response.json()).then((data) => setUsers(data))
  }
  useEffect(() => {
    fetchUsers()
  }, [])


  function logIn() {
    fetch('http://localhost:3333/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      }
    }).then((response) => {
      if (response.status < 400) return response.json();
      else {
        setFailed(!failed);
        console.log(failed);
        setTimeout(()=>{
          setFailed(!failed)
          console.log(failed);
        },3000)
      }
    }).then((data) => {
      sessionStorage.setItem('accessToken', JSON.stringify(data.accessToken));
      setAccessToken(JSON.parse(sessionStorage.getItem('accessToken')))
    })
  }

  return (
    <ApplicationProvider value={{ failed, setFailed, users, setUser, logIn, body, setBody }}>
      <div className='app'>
        <BrowserRouter>
          {!accessToken &&
            <Routes>
              <Route exact path="/" element={<LogInPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>}
          {(accessToken && (user?.admin === false)) &&
            <Routes>
              <Route exact path={`/${user.name.toLowerCase()}`} element={<LandingPage />} />
              <Route path="*" element={<Navigate to={`/${user.name.toLowerCase()}`} replace />} />
            </Routes>}
          {(user?.admin === true && accessToken) &&
            <Routes>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>}
        </BrowserRouter>
      </div>
    </ApplicationProvider>
  )
}

export default App