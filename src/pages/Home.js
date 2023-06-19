import React from "react"
import CarouselImages from "..//components/carousel/Carousel"
import Gallery from "..//components/gallery/gallery"
import Reviews from "..//components/reviews/reviews"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

export default function Home() {
  return (
    <div>
      <Navbarmenu />
      <CarouselImages />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  )
}
