import React from "react"
import { useState } from "react"
import Menu from "../components/Menu"

import Sidebar from "../components/Sidebar"

import { motion } from "framer-motion"

export interface LayoutPrincipalProps {
  colorMenu?: string
  uri: string
}

const LayoutPrincipal: React.FC<LayoutPrincipalProps> = ({
  children,
  colorMenu,
  uri,
}): JSX.Element => {
  const [sidebar, setSidebar] = useState<boolean>(false)

  return (
    <div>
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />

      <Menu colorMenu={colorMenu} setSidebar={setSidebar} uri={uri} />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1 }}
        variants={{ initial: { opacity: 0 }, animate: { opacity: 2 } }}
      >
        <main>{children}</main>
      </motion.div>
    </div>
  )
}

export default LayoutPrincipal
