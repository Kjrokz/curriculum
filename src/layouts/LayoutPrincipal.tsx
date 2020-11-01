import React from "react"
import { useState } from "react"
import Menu from "../components/Menu"

import Sidebar from '../components/Sidebar'

export interface LayoutPrincipalProps {
  colorMenu?: string
  uri?:string
}

const LayoutPrincipal: React.SFC<LayoutPrincipalProps> = ({
  children,
  colorMenu,
  uri
}): JSX.Element => {

  const [sidebar,setSidebar] = useState<boolean>(false)
  
  return (
    <>
    {sidebar? <Sidebar setSidebar={setSidebar} uri={uri}/> :  <> <Menu colorMenu={colorMenu} uri={uri} sidebar={sidebar} setSidebar={setSidebar} />  <main>{children}</main></>}
    </>
  )
}

export default LayoutPrincipal
