import React from "react"
import "./Cards.scss"
import { Link } from "react-router-dom"

function Cards({ id, cover, title }) {
   return (
      <article className="card">
         <Link to={`/logement/${id}`}>
            <img src={cover} alt={title} className="card-img" />
            <h2 className="h2-title">{title}</h2>
         </Link>
      </article>
   )
}
export default Cards
