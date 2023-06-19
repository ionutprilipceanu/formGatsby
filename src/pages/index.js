import React, { useEffect } from "react"

import Home from "./Home"
import Seo from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    document.title = "Ionut Prilipceanu - Fotograf eveniment"
  }, [])
  return (
    <section>
      <Home />
    </section>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
