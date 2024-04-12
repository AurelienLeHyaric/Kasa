import React from "react"
import "./BtnCollapse.scss"

function BtnCollapse({ title }) {
   return (
      <button className="btn-collapse">
         <h3 className="h3-title">{title}</h3>
      </button>
   )
}
export default BtnCollapse
