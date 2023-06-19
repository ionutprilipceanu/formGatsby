import React from "react"
import { useState, useEffect } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"
import imagesGalleryItems from "./imagesGalleryItems"
import "./gallery.css"
import Loader from "../loader/Loader"

const Gallery = () => {
  const galleryImages = imagesGalleryItems
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState([])

  useEffect(() => {
    const imagePromises = galleryImages.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = image.src
        img.onload = resolve
        img.onerror = reject
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        setIsLoading(false)
      })
      .catch(error => {
        console.error("Error loading images:", error)
        setIsLoading(false)
      })
  }, [galleryImages])

  useEffect(() => {
    setLoadedImages(galleryImages.map(image => image.src))
  }, [galleryImages])

  const handleOpenModal = index => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <IoCloseSharp className="btnClose" onClick={handleCloseModal} />
          <FaAngleLeft className="btnPrev" onClick={prevSlide} />
          <FaAngleRight className="btnNext" onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].src} alt="" />
          </div>
        </div>
      )}

      <div className="galleryWrap">
        {isLoading ? (
          <Loader />
        ) : (
          galleryImages.map((slide, index) => {
            return (
              <div
                role="presentation"
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
                onKeyDown={() => handleOpenModal(index)}
              >
                <img
                  className="image"
                  src={slide.src}
                  alt="Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași"
                />
              </div>
            )
          })
        )}
      </div>
      {loadedImages.length === galleryImages.length && isLoading}
    </div>
  )
}

export default Gallery
