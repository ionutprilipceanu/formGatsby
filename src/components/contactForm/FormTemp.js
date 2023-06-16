import React from "react"

const FormTemp = () => {
  return (
    <div>
      <form
        method="post"
        name="Contact Form 2"
        action="/thank-you"
        data-netlify-recaptcha="true"
        netlify-honeypot="hpfield"
        data-netlify="true"
      >
        <input type="hidden" name="hpfield" />
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </p>
        <p>
          <label htmlFor="comments">Comment:</label>
          <br />
          <textarea name="comments" id="comments"></textarea>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <input type="submit" />
        </p>
      </form>
    </div>
  )
}

export default FormTemp
