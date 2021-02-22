import React from "react"
import { Link } from "gatsby"

const Links: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" activeClassName="pagina-actual">
            Inicio
          </Link>
        </li>

        <li>
          <Link to="/skills" activeClassName="pagina-actual">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/proyectos" activeClassName="pagina-actual">
            Proyectos
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Links
