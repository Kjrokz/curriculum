import React from "react"

import "./Sass/Perfil.scss"

import { Container, Col, Row, Image } from "react-bootstrap"

/* import fotoPerfil from "../images/code.jpg" */

import { motion } from "framer-motion"

import Social from "../components/Social"

const data = [
  { titulo: "Email", info: "Eric2_15@hotmail.com" },
  { titulo: "Rut", info: "18.411.148-9" },
  { titulo: "Teléfono", info: "+56983536187" },
  {
    titulo: "Dirección",
    info: "Carlos Pratt, #332, Villa Portal del Valle, Arauco",
  },
]

const initial = {
  scale: 0.8,
  opacity: 0,
}

const animate = {
  scale: 1,
  opacity: 1,
  transition: { delay: 0.4 },
}

const Profile: React.FC = (): JSX.Element => {
  return (
    <div className="perfil">
      <div className="pantallaFondo" />
      <div className="opacidad"></div>

      <Container className="contenedor">
        <Row className="informacion">
          <Col xs={12} md={4}>
            <Image src={require("../images/code.jpg")} fluid />
          </Col>
          <Col xs={12} md={8} className="informacion__perfil">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                initial,
                animate,
              }}
              className="animacion"
            >
              <div className="span">
                <span>Hola</span>
              </div>
              <p>Eric Herrera Herrera</p>
              <p>Ingeniero Civil Informático</p>
              <hr />
            </motion.div>
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
