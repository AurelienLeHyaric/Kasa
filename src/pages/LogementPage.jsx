import React from "react"
import { useParams } from "react-router-dom"
import Slider from "../components/Slider/Slider"
import FicheLogement from "../components/FicheLogement/FicheLogement"

function LogementPage() {
   const { id } = useParams()

   return (
      <>
         <Slider logementId={id}></Slider>
         <FicheLogement logementId={id}></FicheLogement>
      </>
   )
}

export default LogementPage
