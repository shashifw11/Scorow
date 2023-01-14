import React from 'react'
import {useEffect ,  useState} from "react"
import Backdrop from './backdrop';
import Input from './input';
import "./product.css" ; 
import Sidebar from './sidebar';
import Toolbar from './toolbar';

const Product = () => {
    const [sidebar , setSidebar] = useState(false) ; 

      const toggleSidebar = ()=>{
        setSidebar((prev)=>!prev);
      }

  return (
    <div>
       <Toolbar  openSidebar = {toggleSidebar}/>
      <Backdrop   sidebar = {sidebar}  closesidebar = {toggleSidebar}/>
      <Sidebar sidebar = {sidebar}/>
      <Input/>
    </div>
  )
}

export default Product
