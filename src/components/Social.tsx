import React from "react"

import "./Sass/Social.scss"

import { ReactComponent as Slinkedin } from "../images/icons/linkedin.svg"

export interface SocialProps {}

const socialMedia = [
  {
    social: <Slinkedin />,
    link: "https://google.cl",
  },
  {
    social: <Slinkedin />,
    link: "https://google.cl",
  },
]

const Social: React.SFC<SocialProps> = () => {
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
