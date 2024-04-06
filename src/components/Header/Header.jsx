import React from "react"
import logo from "../../assets/images/logo-header.svg"
import "./Header.css"

function Header() {
   return (
      <header>
         <img src={logo} alt="Logo" className="logo-header" />
         <nav>
            <ul>
               <li>
                  <a href="/accueil">Accueil</a>
               </li>
               <li>
                  <a href="/apropos">A Propos</a>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header
