import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LogementPage from "./pages/LogementPage"
import ErrorPage from "./pages/ErrorPage"

import "./components/App.scss"

function App() {
   return (
      <div className="App">
         <Router>
            <Layout>
               <Routes>
                  <Route path="/" element={<Navigate replace to="/accueil" />} />
                  <Route path="/accueil" element={<HomePage />} />
                  <Route path="/apropos" element={<AboutPage />} />
                  <Route path="/logement/:id" element={<LogementPage />} />
                  <Route path="*" element={<ErrorPage />} />
               </Routes>
            </Layout>
         </Router>
      </div>
   )
}

export default App
