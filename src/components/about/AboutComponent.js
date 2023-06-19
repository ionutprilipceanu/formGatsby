import React, { useState } from "react"
import "./About.css"
import aboutImageGallery from "./aboutImageGallery"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"

export const AboutComponent = () => {
  const imageMapped = aboutImageGallery
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

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
      ? setSlideNumber(imageMapped.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === imageMapped.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className="intro">
      {openModal && (
        <div className="sliderWrap">
          <IoCloseSharp className="btnClose" onClick={handleCloseModal} />
          <FaAngleLeft className="btnPrev" onClick={prevSlide} />
          <FaAngleRight className="btnNext" onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={imageMapped[slideNumber].src} alt="" />
          </div>
        </div>
      )}
      <div className="scris">
        <h1> Salutare,</h1>
        <p>
          Voi începe prin a mă prezenta, numele meu este Ionuț Prilipceanu, de
          loc sunt din Botoșani dar momentan frecventez mai mult orașul Iași,
          unde m-am și stabilit, deoarece am studiat la Facultatea Construcții
          de Mașini și Management Industrial, cam ciudat să vezi un inginer
          obișnuit doar cu calcule și rezolvarea problemelor mai mult sau mai
          puțin de natură matematică având de-a face cu arta fotografică, ce să
          zic...omul e plin de surprize.
        </p>

        <p>
          Pasiunea pentru fotografie a început pur și simplu în momentul când
          mi-am cumpărat primul aparat de fotografiat, pe atunci încă eram la
          liceu, ea s-a dezvoltat mai mult în anii de studenție participând la
          evenimente studențești iar mai apoi câștigând premii la diferite
          festivaluri din Iași și Tg. Mureș.
        </p>

        <p>
          Treaba a devenit serioasă în toamna anului 2016 cand m-am întors din
          America cu câteva echipamente dar și cu un aparat nou, mai performant.
          De atunci am colaborat cu fotografi din Iași și Botoșani unde am
          reușit să învăț multe de la ei iar cu această ocazie le mulțumesc și
          le sunt recunoscător pentru toate informațiile pe care le-am acumulat.
        </p>

        <p>
          Între timp am hotărât să fac pasul cel mare alături de Daniela, o
          femeie deosebită ce îmi este alături în orice clipa. Mă ajută foarte
          mult și pe partea de fotografie deoarece îmi oferă suport la
          evenimente ca asistentă iar asta înseamnă că munca ei se reflectă în
          rezultatul final pe care îl predau.
        </p>

        <p>
          Momentan cam atât ar fi de povestit, pentru mai multe detalii mă
          găsești la câteva click-uri distanță.
        </p>

        <p>Mulțumesc!</p>
      </div>

      <div className="box">
        {imageMapped &&
          imageMapped.map((slide, index) => {
            return (
              <div
                role="presentation"
                key={index}
                onClick={() => handleOpenModal(index)}
                onKeyDown={() => handleOpenModal(index)}
              >
                <img
                  className="poze"
                  src={slide.src}
                  alt="Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași"
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
