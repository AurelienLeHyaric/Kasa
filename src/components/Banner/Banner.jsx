import React from "react"
import "./Banner.scss"

function Banner({ bannerImg, opacity, children }) {
   return (
      <section
         className="banner"
         style={{
            backgroundImage: `url(${bannerImg})`,
            opacity: opacity,
         }}
      >
         {children}
      </section>
   )
}

export default Banner
