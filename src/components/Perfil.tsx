import React from "react"

import "./Sass/Perfil.scss"

import { Container, Col, Row, Image } from "react-bootstrap"

import fotoPerfil from "../images/code.jpg"

import Social from "../components/Social"

export interface ProfileProps {}

const data = [
  { titulo: "Email", info: "----@----" },
  { titulo: "Edad", info: "------" },
  { titulo: "Teléfono", info: "------" },
  { titulo: "Dirección", info: "-------" },
]

const Profile: React.SFC<ProfileProps> = (): JSX.Element => {
  return (
    <div className="perfil">
      <div className="pantallaFondo" />
      <div className="opacidad"></div>

      <Container className="contenedor">
        <Row className="informacion">
          <Col xs={12} md={4}>
            <Image src={fotoPerfil} fluid />
          </Col>
          <Col xs={12} md={8} className="informacion__perfil">
            <span>Hola</span>
            <p>Eric Herrera Herrera</p>
            <p>2</p>
            <hr />
            <div className="mas-informacion">
              {data.map((item, index) => (
                <div className="item" key={index}>
                  <p>{item.titulo} :</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}

export default Profile
