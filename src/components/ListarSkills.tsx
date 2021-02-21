import React from "react"
import { SkillBarSkill } from "react-skillbars"
import "./Sass/ListarSkills.scss"

import Loadable from '@loadable/component'

export interface ListarSkillsProps {
  skills: SkillBarSkill[]
  colors: any
}

const SkillBar = Loadable(()=>(import('react-skillbars')))

const ListarSkills: React.FC<ListarSkillsProps> = ({ skills, colors }) => {
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
