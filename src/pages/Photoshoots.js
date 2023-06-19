import React from "react"
import Title from "..//components/title/Title"
// import styled from "styled-components"
import Photoshoots from "..//components/portofolioComponent/photoshoots/Photoshoots"
import Subnavbarmenu from "..//components/navbarmenu/subnavbarmenu/subnavbarmenu"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

// const CostumStyle = styled.div`
//   ::before {
//     margin-left: 10px;
//   }
// `
export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      {/* <CostumStyle> */}
      <Title title="Ședințe foto" />
      {/* </CostumStyle> */}
      <Subnavbarmenu />
      <Photoshoots />
      <Footer />
    </div>
  )
}
