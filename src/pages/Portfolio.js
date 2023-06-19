import React from "react"
import Title from "..//components/title/Title"
// import styled from "styled-components"
import CardEvent from "..//components/cardEvent/CardEvent"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

// const CostumStyle = styled.div`
//   ::before {
//     margin-left: 0px;
//   }
// `
export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      {/* <CostumStyle> */}
      <Title title="Portofoliu" />
      {/* </CostumStyle> */}
      <CardEvent />
      <Footer />
    </div>
  )
}
