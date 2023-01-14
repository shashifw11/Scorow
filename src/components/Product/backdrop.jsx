import React from 'react'

const Backdrop = ({sidebar , closesidebar}) => {
  return (
    <div className  = {sidebar ? "backdrop backdrop--open" : "backdrop" } onClick = {closesidebar}></div>
  )
}

export default Backdrop

