import React from "react"
import { Link } from "react-router-dom"
import "./Header.scss"
import logoHeader from "../../assets/images/logo-header.svg"
import logoHeaderMobile from "../../assets/images/logo-header-mobile.svg"

function Header() {
   return (
      <header>
         <picture>
            <source media="(max-width: 768px)" srcSet={logoHeaderMobile} />
            <source media="(min-width: 769px)" srcSet={logoHeader} />
            <img src={logoHeader} alt="Logo" className="logo-header" />
         </picture>
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
