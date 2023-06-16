import React from "react"

const FormComponent = () => {
  const handlesubmit = () => {
    console.log("click")
  }
  return (
    <div>
      <form
        method="POST"
        name="contact"
        // action="/thankyou.html"
        // data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handlesubmit}
      >
        <input type="hidden" name="bot-field" />
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <br />
          <textarea name="comments" id="comments"></textarea>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default FormComponent
