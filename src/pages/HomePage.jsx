import React from "react"
import "./HomePage.scss"
import Banner from "../components/Banner/Banner"
import CardsList from "../components/CardsList/CardsList"

function HomePage() {
   return (
      <>
         <section className="homebanner">
            <Banner>
               <h1 className="h1-title">Chez vous, partout et ailleurs</h1>
            </Banner>
         </section>
         <section className="logements-cards">
            <CardsList></CardsList>
         </section>
      </>
   )
}

export default HomePage
