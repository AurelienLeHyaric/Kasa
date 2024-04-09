import React from "react"
import logo from "../../assets/images/logo-footer.svg"
import "./Footer.scss"

function Footer() {
   return (
      <footer>
         <img src={logo} alt="Logo" className="logo-footer" />
         <p>© 2020 Kasa. All rights reserved</p>
      </footer>
   )
}

export default Footer
