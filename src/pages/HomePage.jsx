import React from "react"
import "./HomePage.scss"
import Banner from "../components/Banner/Banner"
import CardsList from "../components/CardsList/CardsList"

function HomePage() {
   return (
      <>
         <div className="homebanner">
            <Banner>
               <h1 className="h1-title">Chez vous, partout et ailleurs</h1>
            </Banner>
         </div>
         <div className="logements-cards">
            <CardsList></CardsList>
         </div>
      </>
   )
}

export default HomePage
