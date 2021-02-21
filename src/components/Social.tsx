import React from "react"

import "./Sass/Social.scss"

import { ReactComponent as Slinkedin } from "../images/icons/linkedin.svg"
import {ReactComponent as SGithub} from '../images/icons/github.svg'

export interface SocialProps {}

const socialMedia = [
  {
    social: <Slinkedin />,
    link: "https://google.cl",
  },
  {
    social: <SGithub />,
    link: "https://google.cl",
  },
]

const Social: React.FC<SocialProps> = () => {
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
