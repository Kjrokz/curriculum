import React from "react"
import LayoutPrincipal from "../layouts/LayoutPrincipal"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import "./Sass/proyectos.scss"
import proyectos from "../utils/proyectos"

import { motion } from "framer-motion"

const Proyectos: React.FC = ({ uri }) => {
  return (
    <LayoutPrincipal colorMenu="#44337a" uri={uri}>
      <Container className="proyectos">
        <h1>Proyectos</h1>

        <Row>
          {proyectos.map((proyecto, index) => (
            <Col key={index} xs={12} sm={4} className="proyecto">
              <Card>
                <motion.div
                  key={index}
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    background: "white",
                    scale: 1.1,
                    transition: {
                      duration: 0.4,
                    },
                  }}
                >
                  <div
                    className="imagen"
                    style={{ backgroundImage: `url(${proyecto.imagen})` }}
                  />
                </motion.div>
                <Card.Body>
                  <Card.Title>{proyecto.titulo}</Card.Title>
                  <Card.Text>{proyecto.descripcion}</Card.Text>
                  <a href={proyecto.url} target="_blank">
                    <Button variant="primary">Ver Proyecto</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </LayoutPrincipal>
  )
}

export default Proyectos
