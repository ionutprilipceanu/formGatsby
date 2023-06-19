import React from "react"
import "./Title.css"

const Title = ({ title, subTitle }) => {
  return (
    <div className="one">
      <h1>
        {title}
        <span>{subTitle}</span>
      </h1>
    </div>
  )
}

export default Title
