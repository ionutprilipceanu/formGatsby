import React from "react"

const FormComponent = () => {
  return (
    <div>
      <form method="POST" name="contact" action="" data-netlify="true">
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
        <input type="submit" value="submit" />
        <div data-netlify-recaptcha="true"></div>
      </form>
    </div>
  )
}

export default FormComponent
