import React from "react"
import { useState, useEffect } from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaPinterestP,
  FaAngleDoubleUp,
} from "react-icons/fa"
// import { Link } from "react-router-dom";
import "./Footer.css"
import { Link } from "gatsby"

export default function Footer() {
  const toggleClick = () => {
    window.scroll({ top: 0, behavior: "smooth" })
  }

  const [date, setDate] = useState("")
  useEffect(() => {
    const newDate = new Date()
    let year = newDate.getFullYear()
    setDate(year)
  }, [])

  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="/">Acasă</a>
        <a href="/Portfolio">Portofoliu</a>
        <a href="/Contact">Contact</a>
      </div>
      <div className="footer-social">
        <a
          href="https://www.facebook.com/ionutprilipceanuimage"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/ionutprilipceanu"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=mm#inbox?compose=GTvVlcRwRrtXznxwhmqsKMfkkZVlPCsxqVrQKSFTMhzJMRrccFcCZNTWpcQHFVPVrvKtltNlqxFsx"
          target="_blank"
          rel="noreferrer"
        >
          <FaGooglePlusG />
        </a>
        <a
          href="https://ro.pinterest.com/ionutip/wedding-image/"
          target="_blank"
          rel="noreferrer"
        >
          <FaPinterestP />
        </a>
        <button onClick={toggleClick} className="arrowUp">
          <FaAngleDoubleUp />
        </button>
      </div>
      <div className="documentatie">
        <ul className="scris_sus">
          <li>Ionut Prilipceanu - Image&copy;</li>
          <li className="bara">|</li>
          <li>#scriempoveștiîmpreună</li>
          <li className="bara">|</li>
          <li>#imagineatacontează</li>
          <li className="bara">|</li>
          <li>075 168 4142</li>
          <li className="location"> Iași, România {date}</li>
        </ul>

        <ul className="scris_jos">
          <li>
            <Link to="/Politics" target="_blank">
              Politica de confidențialitate
            </Link>
          </li>
          <li className="bara">|</li>
          <li>
            <Link to="/Terms" target="_blank">
              Termeni și condiții
            </Link>
          </li>
          <li className="bara">|</li>
          <li>
            <Link to="/Cookies" target="_blank">
              Cookie și altele
            </Link>
          </li>
          <li className="bara">|</li>
          <li className="location"> Iași, România {date}</li>
        </ul>
      </div>
    </footer>
  )
}
