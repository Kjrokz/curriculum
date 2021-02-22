import React from "react"
import LayoutPrincipal from "../layouts/LayoutPrincipal"
import { Container } from "react-bootstrap"
import "./Sass/skills.scss"
import ListarSkills from "../components/ListarSkills"
import {
  controlVersionesColors,
  controlVersionesSkills,
  basesDeDatosColors,
  basesDeDatosSkills,
} from "../utils/skills"
import {
  frontEndSkills,
  frontEndSkillsColors,
  backendSkills,
  backendSkillsColors,
} from "../utils/skills"

const skills = [
  {
    titulo: "Front-end",
    colors: frontEndSkillsColors,
    skillsAll: frontEndSkills,
  },
  {
    titulo: "Back-end",
    colors: backendSkillsColors,
    skillsAll: backendSkills,
  },
  {
    titulo: "Bases de datos (SQL - NoSQL)",
    colors: basesDeDatosColors,
    skillsAll: basesDeDatosSkills,
  },
  {
    titulo: "Control de versiones",
    colors: controlVersionesColors,
    skillsAll: controlVersionesSkills,
  },
]

const Skills: React.FC = props => {
  const { uri }: any = props
  return (
    <LayoutPrincipal colorMenu="#2a4365" uri={uri}>
      <Container className="skills">
        {skills.map((item, index) => (
          <div className="titulo" key={index}>
            <h2>{item.titulo}</h2>
            <ListarSkills skills={item.skillsAll} colors={item.colors} />
          </div>
        ))}
        {/* <div className="titulo">
          <h2>Frontend</h2>
          <ListarSkills skills={frontEndSkills} colors={frontEndSkillsColors} />
        </div> */}
      </Container>
    </LayoutPrincipal>
  )
}

export default Skills
