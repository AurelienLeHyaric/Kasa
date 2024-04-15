import React, { useState } from "react"
import "./BtnCollapse.scss"
import { ReactComponent as ArrowUp } from "../../assets/images/arrow-up.svg"
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg"

function BtnCollapse({ title, id, children }) {
   const [isOpen, setIsOpen] = useState(false)
   const switchEtat = () => {
      setIsOpen(!isOpen)
   }

   return (
      <>
         <button id={id} className="btn-collapse">
            <h3 className="h3-title">{title}</h3>
            {isOpen ? <ArrowDown onClick={switchEtat} /> : <ArrowUp onClick={switchEtat} />}
         </button>
         {isOpen && <div className="collapse-conteneur">{children}</div>}
      </>
   )
}
export default BtnCollapse
