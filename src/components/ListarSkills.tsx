import React from "react"
import SkillBar, { SkillBarSkill } from "react-skillbars"
import "./Sass/ListarSkills.scss"

export interface ListarSkillsProps {
  skills: SkillBarSkill[]
  colors: any
}

const ListarSkills: React.SFC<ListarSkillsProps> = ({ skills, colors }) => {
  return (
    <div className="lista-skills">
      <SkillBar
        skills={skills}
        animationDelay={0}
        animationDuration={1500}
        colors={colors}
      />
    </div>
  )
}

export default ListarSkills
