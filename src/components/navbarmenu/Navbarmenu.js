import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi"
import "./Navbarmenu.css"
import logo from "..//../assets/images/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-10.png"

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false)
  const [isResponsiveclose, setResponsiveclose] = useState(false)
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false)
    setResponsiveclose(isResponsiveclose === false ? true : false)
  }

  let boxClass = ["main-menu menu-right menuq1"]
  if (isMenu) {
    boxClass.push("menuq2")
  } else {
    boxClass.push("")
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false)
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false)
  }

  let boxClassSubMenu = ["sub__menus"]
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active")
  } else {
    boxClassSubMenu.push("")
  }

  return (
    <header className="header__middle">
      <div className="container">
        {/* Add Logo  */}
        <div className="header__middle__logo">
          <Link exact="true" activeClassName="is-active" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__middle__menus">
          <nav className="main-nav ">
            {/* Responsive Menu Button */}
            {isResponsiveclose === true ? (
              <>
                <span
                  role="presentation"
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                  onKeyDown={toggleClass}
                >
                  <FiXCircle />{" "}
                </span>
              </>
            ) : (
              <>
                <span
                  role="presentation"
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                  onKeyDown={toggleClass}
                >
                  <FiAlignRight />{" "}
                </span>
              </>
            )}
            <ul className={boxClass.join(" ")}>
              <li className="menu-item">
                <Link
                  exact="true"
                  activeClassName="is-active"
                  onClick={toggleClass}
                  onKeyDown={toggleClass}
                  to="/"
                >
                  Acasă{" "}
                </Link>
              </li>
              <li className="menu-item ">
                <Link
                  onClick={toggleClass}
                  onKeyDown={toggleClass}
                  activeClassName="is-active"
                  to="/About"
                >
                  Despre{" "}
                </Link>{" "}
              </li>
              <li className="menu-item ">
                <Link
                  onClick={toggleClass}
                  onKeyDown={toggleClass}
                  activeClassName="is-active"
                  to="/Services"
                >
                  Servicii{" "}
                </Link>{" "}
              </li>
              <li
                role="presentation"
                onClick={toggleSubmenu}
                onKeyDown={toggleSubmenu}
                className="menu-item sub__menus__arrows"
              >
                <Link to="/Portfolio" activeClassName="is-active">
                  Portfoliu <FiChevronDown />{" "}
                </Link>
                <ul className={boxClassSubMenu.join(" ")}>
                  <li>
                    <Link
                      onClick={toggleClass}
                      onKeyDown={toggleClass}
                      activeClassName="is-active"
                      to="/Wedding"
                    >
                      Nuntă{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      onClick={toggleClass}
                      onKeyDown={toggleClass}
                      activeClassName="is-active"
                      to="/Christianization"
                    >
                      Creștinare{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="/Engagement"
                    >
                      Logodnă{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="/Photoshoots"
                    >
                      Ședințe foto{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="/Others"
                    >
                      Diverse{" "}
                    </Link>{" "}
                  </li>
                </ul>
              </li>
              <li className="menu-item ">
                <Link
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to="/Contact"
                >
                  Contact{" "}
                </Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Navbarmenu
