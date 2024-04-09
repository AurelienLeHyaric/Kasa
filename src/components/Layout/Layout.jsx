import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Layout.scss"

function Layout({ children }) {
   return (
      <div>
         <Header />
         <main>{children}</main>
         <Footer />
      </div>
   )
}

export default Layout
