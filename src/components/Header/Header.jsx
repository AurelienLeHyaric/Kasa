import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo-header.svg"
import "./Header.scss"

function Header() {
   return (
      <header>
         <img src={logo} alt="Logo" className="logo-header" />
         <nav>
            <ul>
               <li>
                  <Link to="/accueil">Accueil</Link>
               </li>
               <li>
                  <Link to="/apropos">A Propos</Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header
