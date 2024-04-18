import React from "react"
import logoFooter from "../../assets/images/logo-footer.svg"
import logoFooterMobile from "../../assets/images/logo-footer-mobile.svg"
import "./Footer.scss"

function Footer() {
   return (
      <footer>
         <picture>
            <source media="(max-width: 600px)" srcSet={logoFooterMobile} />
            <source media="(min-width: 601px)" srcSet={logoFooter} />
            <img src={logoFooter} alt="Logo" />
         </picture>
         <p>© 2020 Kasa. All rights reserved</p>
      </footer>
   )
}

export default Footer
