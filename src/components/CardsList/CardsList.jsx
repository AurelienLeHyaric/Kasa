import React from "react"
import Cards from "../Cards/Cards"
import "./CardsList.scss"
import logements from "../../data/logements.json"

function CardsList() {
   return (
      <div className="cards-list">
         {logements.map((logement) => (
            <Cards
               key={logement.id}
               id={logement.id}
               cover={logement.cover}
               title={logement.title}
            />
         ))}
      </div>
   )
}

export default CardsList
