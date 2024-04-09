import React from "react"
import "./HomePage.scss"
import Banner from "../components/Banner/Banner"
import backgroundHome from "../assets/images/banniere_accueil.jpg"

function HomePage() {
   return (
      <>
         <section>
            <Banner bannerImg={backgroundHome} opacity="80%">
               <h1 className="h1-title">Chez vous, partout et ailleurs</h1>
            </Banner>
         </section>
         <section>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
               lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras
               elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non,
               mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum
               diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat
               in, pretium a, enim. Pellentesque congue. Lorem ipsum dolor sit amet, consectetur
               adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
               adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
               massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
               molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.
               Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque
               congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
               Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
               Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod
               non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
               fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
               consequat in, pretium a, enim. Pellentesque congue. Lorem ipsum dolor sit amet,
               consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
               amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
               ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec
               nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis
               semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
               Pellentesque congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
               risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
               dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
               euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
               non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque
               vitae, consequat in, pretium a, enim. Pellentesque congue. Lorem ipsum dolor sit
               amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
               dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
               diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
               porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
               sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
               a, enim. Pellentesque congue.
            </p>
         </section>
      </>
   )
}

export default HomePage
