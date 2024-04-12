import React from "react"
import "./AboutPage.scss"
import Banner from "../components/Banner/Banner"
import BtnCollapse from "../components/BtnCollapse/BtnCollapse"

function AboutPage() {
   return (
      <>
         <div className="aboutbanner">
            <Banner></Banner>
         </div>
         <section className="aboutmenu">
            <BtnCollapse title="Fiabilité"></BtnCollapse>
            <BtnCollapse title="Respect"></BtnCollapse>
            <BtnCollapse title="Service"></BtnCollapse>
            <BtnCollapse title="Sécurité"></BtnCollapse>
         </section>
      </>
   )
}

export default AboutPage
