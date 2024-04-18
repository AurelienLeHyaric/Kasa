import React from "react"
import { ReactComponent as ActiveStar } from "../../assets/images/star-active.svg"
import { ReactComponent as InactiveStar } from "../../assets/images/star-inactive.svg"

function Notation({ rating }) {
   const totalStars = 5
   let stars = []
   for (let i = 0; i < totalStars; i++) {
      // Si  i est inférieur au 'rating', ajoute une étoile active à la liste 'stars'
      if (i < rating) {
         stars.push(<ActiveStar key={i} />)
         // Si i n'est pas inférieur au 'rating', ajoutee une étoile inactive
      } else {
         stars.push(<InactiveStar key={i} />)
      }
   }

   return <div>{stars}</div>
}

export default Notation
