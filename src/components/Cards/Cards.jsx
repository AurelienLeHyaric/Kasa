import React from "react"
import "./Cards.scss"

function Cards({ cover, title }) {
   return (
      <article className="cards">
         <img src={cover} alt={title} className="card-img" />
         <h2 className="h2-title">{title}</h2>
      </article>
   )
}
export default Cards
