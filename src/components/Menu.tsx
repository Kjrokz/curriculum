import React from "react"

import { Container } from "react-bootstrap"

import { Link } from "gatsby"

import "./Sass/Menu.scss"

export interface MenuProps {
  colorMenu?: string
}

const Menu: React.SFC<MenuProps> = ({ colorMenu }) => {
  return (
    <header className="menu" style={{ backgroundColor: colorMenu }}>
      <Container>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Menu
