// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./ContactForm.css";
// import Button from "react-bootstrap/Button";
// import { FaEnvelope, FaGooglePlusG, FaPhoneAlt } from "react-icons/fa";

// const ContactForm = () => {
//   const phoneRegExp =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//   const initialValues = {
//     name: "",
//     email: "",
//     message: "",
//     phoneNumber: "",
//     events: "",
//     doe: "",
//     city: "",
//     location: "",
//     profile: "",
//   };
//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Numele este obligatoriu"),
//     email: Yup.string()
//       .email("Introdu o adresă de email validă")
//       .required("Adresa de email este obrigatorie"),
//     message: Yup.string().required(
//       "Dă-mi căteva detalii despre evenimentul tău"
//     ),
//     phoneNumber: Yup.string().matches(
//       phoneRegExp,
//       "Numărul introdus nu este unul valid"
//     ),
//     events: Yup.string().required("Numele evenimentului este obligatoriu"),
//     doe: Yup.date().required("Ziua evenimentului este obligatorie"),
//     city: Yup.string().required(
//       "Introdu numele orașului unde va avea loc evenimentul"
//     ),
//     location: Yup.string().required("Locația este obligatorie"),
//     profile: Yup.string().required("Numele de pe facebook este obligatoriu"),
//   });
//   const [startDate, setStartDate] = useState("");
//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log(values);
//     setSubmitting(false);
//   };
//   return (
//     <div>
//       <div className="container-form">
//         <div className="form-container">
//           <div className="form-title">
//             <h3>Salutare!</h3>
//             <p>Povestește mai multe despre voi și evenimentul vostru</p>
//           </div>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             <Form name="contact" netlify>
//               <div className="sections">
//                 <div className="general-sections">
//                   <div className="form-group">
//                     <Field
//                       type="text"
//                       name="name"
//                       className="form-control"
//                       required
//                       placeholder="Nume"
//                     />
//                     <ErrorMessage
//                       name="name"
//                       component="div"
//                       className="error"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <Field
//                       type="email"
//                       name="email"
//                       className="form-control"
//                       required
//                       placeholder="Email"
//                     />
//                     <ErrorMessage
//                       name="email"
//                       component="div"
//                       className="error"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <Field
//                       type="phoneNumber"
//                       name="phoneNumber"
//                       className="form-control"
//                       required
//                       placeholder="Telefon"
//                     />
//                     <ErrorMessage
//                       name="phoneNumber"
//                       component="div"
//                       className="error"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="event-sections">
//                   <div className="form-group">
//                     <Field
//                       type="events"
//                       name="events"
//                       className="form-control"
//                       required
//                       placeholder="Tipul de eveniment"
//                     />
//                     <ErrorMessage
//                       name="events"
//                       component="div"
//                       className="error"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <DatePicker
//                       type="doe"
//                       name="doe"
//                       className="form-control"
//                       required
//                       selected={startDate}
//                       onChange={(date) => setStartDate(date)}
//                       placeholderText={"Data"}
//                     />
//                     <ErrorMessage
//                       name="doe"
//                       component="div"
//                       className="error"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <Field
//                       type="text"
//                       name="location"
//                       className="form-control"
//                       required
//                       placeholder="Locația"
//                     />
//                     <ErrorMessage
//                       name="name"
//                       component="div"
//                       className="error"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="form-group">
//                 <Field
//                   type="text"
//                   name="profile"
//                   className="form-control"
//                   required
//                   placeholder="Facebook"
//                 />
//                 <ErrorMessage
//                   name="profile"
//                   component="div"
//                   className="error"
//                 />
//               </div>
//               <div className="form-group">
//                 <Field
//                   as="textarea"
//                   name="message"
//                   className="form-control"
//                   required
//                   rows={6}
//                   placeholder="Mesaj"
//                 />
//                 <ErrorMessage
//                   name="message"
//                   component="div"
//                   className="error"
//                 />
//               </div>
//               <Button variant="dark" className="btn-contact" type="submit">
//                 Trimite
//               </Button>
//             </Form>
//           </Formik>
//         </div>
//         <div className="info-container">
//           <div className="info-title">
//             <h3>Informații utile</h3>
//             <p>Dacă ai întrebări, mai jos ai căteva date de contact</p>
//           </div>
//           <div className="info-contact">
//             <ul>
//               <li>
//                 <FaGooglePlusG /> prilipceanu.ionut@gmail.com
//               </li>
//               <li>
//                 <FaPhoneAlt /> +40 75 168 4142
//               </li>
//               <li>
//                 <FaEnvelope /> Iași, Ro 702555
//               </li>
//             </ul>
//           </div>
//           <div className="info-motto">
//             <p>
//               <i>
//                 #scriempoveștiîmpreună <br /> #imagineatacontează
//               </i>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ContactForm;

import React from "react"
import FormTemp from "./FormTemp"
// import "react-datepicker/dist/react-datepicker.css";
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
