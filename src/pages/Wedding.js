import React from "react"
import Title from "..//components/title/Title"
// import styled from "styled-components"
import Wedding from "..//components/portofolioComponent/wedding/Wedding"
import Subnavbarmenu from "..//components/navbarmenu/subnavbarmenu/subnavbarmenu"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

// const CostumStyle = styled.div`
//   ::before {
//     margin-left: -50px;
//   }
// `
export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      {/* <CostumStyle> */}
      <Title title="Nuntă" />
      {/* </CostumStyle> */}
      <Subnavbarmenu />
      <Wedding />
      <Footer />
    </div>
  )
}
