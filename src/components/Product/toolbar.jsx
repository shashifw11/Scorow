import React from 'react'

const Toolbar = ({openSidebar}) => {
  return (
    <div className = "tool-bar" >
        <div className = "burger"  onClick = {openSidebar}>
        <i className="fa-solid fa-bars"></i>
    </div>
    <div className = "user-login">
        <span> Hi Harsh</span>
        <div>
            <img className = "image" src = "https://www.alrashidcentre.com/wp-content/uploads/2018/08/person-icon-8-295x300.png" alt = ""/>
        </div>
    </div>
    </div> 
  )
}

export default Toolbar
