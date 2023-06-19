import React from "react"
import Title from "..//components/title/Title"
// import styled from "styled-components"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

// const CostumStyle = styled.div`
//   ::before {
//     display: none;
//   }
// `
export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      {/* <CostumStyle> */}
      <Title title="Termeni și condiții" />
      {/* </CostumStyle> */}
      <Footer />
    </div>
  )
}
