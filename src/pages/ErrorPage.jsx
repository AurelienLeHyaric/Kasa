import React from "react"
import "./ErrorPage.scss"

function ErrorPage() {
   return (
      <section id="page404">
         <h1>404</h1>
         <p>Oups! La page que vous demandez n'existe pas.</p>
         <a href="/accueil">Retourner sur la page d’accueil</a>
      </section>
   )
}
export default ErrorPage
