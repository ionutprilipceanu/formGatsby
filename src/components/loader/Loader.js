import React from "react"
// import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    // <Triangle
    //   height="80"
    //   width="80"
    //   color="rgb(0, 0, 0, 0.5)"
    //   ariaLabel="triangle-loading"
    //   wrapperStyle={{ margin: "20rem" }}
    //   wrapperClassName=""
    //   visible={true}
    // />
    <div className="fa-3x">
      <i className="fas fa-spinner fa-pulse"></i>
    </div>
  )
}

export default Loader
