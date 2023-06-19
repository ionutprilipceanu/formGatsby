import React from "react"
import Title from "..//components/title/Title"
// import styled from "styled-components"
import Christianization from "..//components/portofolioComponent/christianization/Christianization"
import Subnavbarmenu from "..//components/navbarmenu/subnavbarmenu/subnavbarmenu"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

// const CostumStyle = styled.div`
//   ::before {
//     margin-left: -30px;
//   }
// `
export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      {/* <CostumStyle> */}
      <Title title="Creștinare" />
      {/* </CostumStyle> */}
      <Subnavbarmenu />
      <Christianization />
      <Footer />
    </div>
  )
}
