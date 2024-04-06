import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import "./components/App.css"

function App() {
   return (
      <Router>
         <Layout>
            <Routes>
               <Route path="/accueil" element={<HomePage />} />
               <Route path="/apropos" element={<AboutPage />} />
            </Routes>
         </Layout>
      </Router>
   )
}

export default App
