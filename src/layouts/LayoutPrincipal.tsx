import React from "react"
import Menu from "../components/Menu"

export interface LayoutPrincipalProps {
  colorMenu?: string
}

const LayoutPrincipal: React.SFC<LayoutPrincipalProps> = ({
  children,
  colorMenu,
}): JSX.Element => {
  return (
    <>
      <Menu colorMenu={colorMenu} />
      <main>{children}</main>
    </>
  )
}

export default LayoutPrincipal
