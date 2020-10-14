import React from "react"

import "./Sass/index.scss"
import LayoutPrincipal from "../layouts/LayoutPrincipal"
import Perfil from "../components/Perfil"
import SobreMi from "../components/SobreMi"

const IndexPage = (): JSX.Element => {
  return (
    <>
      <LayoutPrincipal colorMenu="transparent">
        <Perfil />
        <SobreMi />
      </LayoutPrincipal>
    </>
  )
}

export default IndexPage
