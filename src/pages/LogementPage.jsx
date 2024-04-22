import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Slider from "../components/Slider/Slider"
import FicheLogement from "../components/FicheLogement/FicheLogement"
import logements from "../data/logements.json"

function LogementPage() {
   const { id } = useParams()
   const navigate = useNavigate()
   //boucle pour trouver si l'ID d'un logement existe
   let idExiste = false
   for (let i = 0; i < logements.length; i++) {
      if (logements[i].id === id) {
         idExiste = true
         break
      }
   }
   //Redirection vers la page erreur si l'ID de logement n'existe pas...
   useEffect(() => {
      if (!idExiste) {
         navigate("/erreur")
      }
   }, [id, navigate, idExiste])

   //...et aucun "rendu" n'est effectué dans ce cas
   if (!idExiste) {
      return null
   }

   return (
      <>
         <Slider logementId={id}></Slider>
         <FicheLogement logementId={id}></FicheLogement>
      </>
   )
}

export default LogementPage
