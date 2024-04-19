import React from "react"
import "./FicheLogement.scss"
import logements from "../../data/logements.json"
import BtnCollapse from "../BtnCollapse/BtnCollapse"
import Notation from "../Rating/Rating"

function FicheLogement({ logementId }) {
   const logement = logements.find((index) => index.id === logementId)
   const { title, tags, host, location, description, equipments } = logement
   return (
      <section id="fiche-section">
         <h2 className="title">{title}</h2>
         <h3 className="location">{location}</h3>
         <div className="tags">
            {tags.map((tag, index) => (
               <p key={index} className="tag">
                  {tag}
               </p>
            ))}
         </div>
         <div className="host">
            <p className="hostname">{host.name}</p>
            <img className="hostpicture" src={host.picture} alt={`${host.name}`} />
         </div>
         <div className="rating">
            <Notation rating={logement.rating} />
         </div>
         <BtnCollapse id="description" title="Description">
            {description}
         </BtnCollapse>
         <BtnCollapse id="equipments" title="Équipements">
            {equipments.map((equipments, index) => (
               <p key={index}>{equipments}</p>
            ))}
         </BtnCollapse>
      </section>
   )
}

export default FicheLogement
