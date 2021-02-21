import React from 'react';
import {Link} from'gatsby'

export interface LinksProps {
    
}
 
const Links: React.FC<LinksProps> = () => {
    return ( <><ul>
        <li>
          <Link to="/" activeClassName="pagina-actual">Inicio</Link>
        </li>
     
       <li>
          <Link to="/skills" activeClassName="pagina-actual">Skills</Link>
        </li>
        <li>
          <Link to="/proyectos" activeClassName="pagina-actual">Proyectos</Link>
        </li>
      </ul></> );
}
 
export default Links;