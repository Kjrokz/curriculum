import React from "react"

import "./Sass/Sidebar.scss"

import Links from "./Links"

import Social from "../components/Social"

/* import {ReactComponent as Cerrar} from '../images/icons/cerrar.svg' */
import { BiX } from "react-icons/bi"

export interface SidebarProps {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>
  uri: string
  sidebar: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ setSidebar, uri, sidebar }) => {
  const link = uri.replace("/", "")

  return (
    <aside className={`sidebar ${!sidebar ? "off" : ""}`}>
      <div className="boton">
        <button
          onClick={() => {
            setSidebar(false)
          }}
        >
          {/*   <Cerrar /> */}
          <BiX size={30} fill="white" />
        </button>
      </div>
      <div className="links">
        <Links />
        <Social />
      </div>
    </aside>
  )
}

export default Sidebar
