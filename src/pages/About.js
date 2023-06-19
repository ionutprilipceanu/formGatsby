import React from "react"
import Title from "..//components/title/Title"
// import styled from "styled-components"
import { AboutComponent } from "..//components/about/AboutComponent"
import logo from "..//assets/images/about/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-1.1.jpg"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

// const CostumStyle = styled.div`
//   position: absolute;
//   margin: 13vw;
//   z-index: 999;
//   ::before {
//     margin-left: -50px;
//   }
// `
export default function About() {
  return (
    <div>
      <Navbarmenu />
      {/* <CostumStyle> */}
      <Title title="Despre" />
      {/* </CostumStyle> */}
      <img src={logo} alt="logo" style={{ width: "100%" }} />
      <AboutComponent />
      <Footer />
    </div>
  )
}
