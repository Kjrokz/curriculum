import React from "react"

import "./Sass/Social.scss"

/* import { ReactComponent as Slinkedin } from "../images/icons/linkedin.svg" */
/* import { ReactComponent as SGithub } from "../images/icons/github.svg" */
import { AiFillGithub } from "react-icons/ai"

const socialMedia = [
  /*  {
    social: <Slinkedin />,
    link: "https://google.cl",
  }, */
  {
    social: <AiFillGithub size={25} fill="black" />,
    link: "https://github.com/Kjrokz",
  },
]

const Social: React.FC = () => {
  return (
    <>
      <div className="social">
        {socialMedia.map((redSocial, index) => (
          <a
            key={index}
            href={redSocial.link}
            rel="noreferrer noopener"
            target="_blank"
          >
            {redSocial.social}
          </a>
        ))}
      </div>
    </>
  )
}

export default Social
