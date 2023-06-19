import React from "react"
import ContactForm from "..//components/contactForm/ContactForm"
import Title from "..//components/title/Title"
import styled from "styled-components"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

const CostumStyle = styled.div`
  ::before {
    margin-left: 25px;
  }
`
const Contact = () => {
  return (
    <div>
      <Navbarmenu />
      <CostumStyle>
        <Title title="Contact" subTitle="" />
      </CostumStyle>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
