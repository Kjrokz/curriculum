import React from "react"

import { Container } from "react-bootstrap"

/* import { Link } from "gatsby" */

import "./Sass/Menu.scss"

/* import { ReactComponent as Responsive } from "../images/icons/responsive.svg" */
import { BiMenu } from "react-icons/bi"

import Links from "../components/Links"

export interface MenuProps {
  colorMenu?: string
  uri?: string
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu: React.FC<MenuProps> = ({ colorMenu, uri, setSidebar }) => {
  const pagina = uri.replace("/", "")

  return (
    <header className="menu" style={{ backgroundColor: colorMenu }}>
      <Container>
        <Links />
        <h1>{uri === "/" ? "Inicio" : pagina}</h1>
      </Container>
      <button
        onClick={() => {
          setSidebar(true)
        }}
      >
        {/* <Responsive className="icon" /> */}
        <BiMenu size={40} fill="white" />
      </button>
    </header>
  )
}

export default Menu
