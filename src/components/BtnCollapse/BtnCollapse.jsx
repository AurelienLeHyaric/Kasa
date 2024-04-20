import React, { useState } from "react"
import "./BtnCollapse.scss"
import { ReactComponent as Arrow } from "../../assets/images/arrow-up.svg"

function BtnCollapse({ title, id, children }) {
   //détermine si la collapse est ouverte ou fermée (fermé par défaut)
   const [isOpen, setIsOpen] = useState(false)
   //stocke le nom de la classe d'animation qui sera appliquée à l'élément SVG du bouton de la collapse
   const [animationClass, setAnimationClass] = useState("")
   //fonction switchEtat qui gère la classe d'animation à appliquer et l'état ouvert/fermé de la collapse
   const switchEtat = () => {
      setAnimationClass(isOpen ? "rotate-close" : "rotate-open")
      setIsOpen(!isOpen)
   }

   return (
      <>
         <button onClick={switchEtat} id={id} className="btn-collapse">
            <h3 className="h3-title">{title}</h3>
            <Arrow className={animationClass} />
         </button>
         <div className={`collapse-conteneur ${isOpen ? "open" : ""}`}>{children}</div>
      </>
   )
}

export default BtnCollapse
