import React from "react"

import "./Perfil.scss"

export interface ProfileProps {}

const Profile: React.SFC<ProfileProps> = () => {
  return (
    <div className="perfil">
      <div className="pantallaFondo" />
      <div className="opacidad"></div>
    </div>
  )
}

export default Profile
