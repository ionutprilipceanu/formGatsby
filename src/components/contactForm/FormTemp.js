import React from "react"

const FormTemp = () => {
  return (
    <div>
      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
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
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default FormTemp
