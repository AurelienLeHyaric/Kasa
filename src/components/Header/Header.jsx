import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.scss"
import logoHeader from "../../assets/images/logo-header.svg"
import logoHeaderMobile from "../../assets/images/logo-header-mobile.svg"

function Header() {
   return (
      <header>
         <picture>
            <source media="(max-width: 600px)" srcSet={logoHeaderMobile} />
            <source media="(min-width: 601px)" srcSet={logoHeader} />
            <img src={logoHeader} alt="Logo" />
         </picture>
         <nav>
            <ul>
               <li>
                  <NavLink to="/accueil" activeClassName="active">
                     Accueil
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/apropos" activeClassName="active">
                     A Propos
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header
