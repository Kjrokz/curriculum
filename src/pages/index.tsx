import React from "react"

import "../pages/index.scss"
import LayoutPrincipal from "../layouts/LayoutPrincipal"
import Perfil from "../components/Perfil"

const IndexPage = () => {
  return (
    <>
      <LayoutPrincipal colorMenu="transparent">
        <Perfil />
        <h1>1</h1>
      </LayoutPrincipal>
    </>
  )
}

export default IndexPage
