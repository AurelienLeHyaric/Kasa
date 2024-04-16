import React, { useState } from "react"
import "./Slider.scss"
import logements from "../../data/logements.json"
import { ReactComponent as ArrowLeft } from "../../assets/images/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg"

function Slider({ logementId }) {
   // On utilise un state pour suivre l'indice de l'image courante
   const [currentImage, setCurrentImage] = useState(0)
   // trouve le logement correspondant par son ID dans la liste des logements
   const logement = logements.find((i) => i.id === logementId)

   const nextImage = () => {
      setCurrentImage((Index) => (Index === logement.pictures.length - 1 ? 0 : Index + 1))
   }

   const prevImage = () => {
      setCurrentImage((Index) => (Index === 0 ? logement.pictures.length - 1 : Index - 1))
   }

   return (
      <>
         <div className="logement-slider">
            {/* Affiche l'image courante du logement trouvé */}
            <img src={logement.pictures[currentImage]} alt="" />
            {/* Affiche les boutons seulement si plus d'une image */}
            {logement.pictures.length > 1 && (
               <>
                  <button className="btn-prev" onClick={prevImage}>
                     <ArrowLeft />
                  </button>
                  <button className="btn-next" onClick={nextImage}>
                     <ArrowRight />
                  </button>
               </>
            )}
         </div>
      </>
   )
}

export default Slider
