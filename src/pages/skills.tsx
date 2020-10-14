import React from "react"
import LayoutPrincipal from "../layouts/LayoutPrincipal"
import { Container } from "react-bootstrap"
import "./Sass/skills.scss"
import ListarSkills from "../components/ListarSkills"
import {
  frontEndSkills,
  frontEndSkillsColors,
  backendSkills,
  backendSkillsColors,
  sistemasOperativosSkills,
  sistemasOperativosColors,
} from "../utils/skills"

export interface SkillsProps {}

const skills = [
  {
    titulo: "Frontend",
    colors: frontEndSkillsColors,
    skillsAll: frontEndSkills,
  },
  {
    titulo: "Backend",
    colors: backendSkillsColors,
    skillsAll: backendSkills,
  },
  {
    titulo: "Sistemas operativos",
    colors: sistemasOperativosColors,
    skillsAll: sistemasOperativosSkills,
  },
]

const Skills: React.SFC<SkillsProps> = () => {
  return (
    <LayoutPrincipal colorMenu="black">
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
