import React from 'react';

import './Sass/Sidebar.scss'

import Links from './Links';

import Social from '../components/Social'

import {ReactComponent as Cerrar} from '../images/icons/cerrar.svg'



export interface SidebarProps {
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>
    uri:string
}

const Sidebar: React.FC<SidebarProps> = ({ setSidebar,uri }) => {
    const link = uri.replace('/','')

    

    return (
    <aside className="sidebar">
        <div className="boton">
        <button onClick={() => { setSidebar(false) }}><Cerrar/></button></div>
        <div className="links">
            <Links/>
            <Social/>
        </div>
        </aside>);
}

export default Sidebar;