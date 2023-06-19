import React from "react"
import FormTemp from "./FormTemp"
// import "react-datepicker/dist/react-datepicker.css"
import "./ContactForm.css"

import { FaEnvelope, FaGooglePlusG, FaPhoneAlt } from "react-icons/fa"

const ContactForm = () => {
  return (
    <div>
      <div className="container-form">
        <div className="form-container">
          <div className="form-title">
            <h3>Salutare!</h3>
            <p>Povestește mai multe despre voi și evenimentul vostru</p>
          </div>
          <FormTemp />
        </div>

        <div className="info-container">
          <div className="info-title">
            <h3>Informații utile</h3>
            <p>Dacă ai întrebări, mai jos ai căteva date de contact</p>
          </div>
          <div className="info-contact">
            <ul>
              <li>
                <FaGooglePlusG /> prilipceanu.ionut@gmail.com
              </li>
              <li>
                <FaPhoneAlt /> +40 75 168 4142
              </li>
              <li>
                <FaEnvelope /> Iași, Ro 702555
              </li>
            </ul>
          </div>
          <div className="info-motto">
            <p>
              <i>
                #scriempoveștiîmpreună <br /> #imagineatacontează
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactForm
