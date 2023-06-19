import React from "react"
import Title from "..//components/title/Title"
// import styled from "styled-components"
import Servicing from "..//components/servicing/Servicing"
import servicing from "..//assets/images/servicing/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-9.3.jpg"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

// const CostumStyle = styled.div`
//   .one {
//     width: 75%;
//     margin: 0 auto;
//     background-color: rgba(238, 238, 238, 0.25);
//   }

//   .one h1 {
//     padding-top: 2rem;
//   }

//   ::before {
//     margin-left: -25px;
//   }

//   @media (max-width: 992px) {
//     .one {
//       width: 96%;
//     }
//   }
// `
export default function Services() {
  return (
    <div>
      <Navbarmenu />
      <img src={servicing} alt="logo" style={{ width: "100%" }} />
      {/* <CostumStyle> */}
      <Title title="Servicii" />
      {/* </CostumStyle> */}
      <Servicing />
      <Footer />
    </div>
  )
}
