import React from "react"
import { Link } from "gatsby"
import "./subnavmenu.css"

const subnavbarmenu = () => {
  return (
    <ul className="submenu-nav">
      <li>
        <Link activeClassName="subnav-is-active" to="/Wedding">
          Nuntă{" "}
        </Link>{" "}
      </li>
      <li>
        <Link activeClassName="subnav-is-active" to="/Christianization">
          Creștinare{" "}
        </Link>{" "}
      </li>
      <li>
        <Link activeClassName="subnav-is-active" to="/Engagement">
          Logodnă{" "}
        </Link>{" "}
      </li>
      <li>
        <Link activeClassName="subnav-is-active" to="/Photoshoots">
          Ședințe foto{" "}
        </Link>{" "}
      </li>
      <li>
        <Link activeClassName="subnav-is-active" to="/Others">
          Diverse{" "}
        </Link>{" "}
      </li>
    </ul>
  )
}
export default subnavbarmenu
