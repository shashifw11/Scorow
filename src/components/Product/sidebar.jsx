import React from 'react'
import "./product.css" ; 

const Sidebar = ({sidebar}) => {
  return (
    <div className  = {sidebar ? "sidebar sidebar--open" : "sidebar" }>
       <li>Admin Users</li>
       <li><i className="fa-regular fa-user"></i>users</li>
       <li><i className="fa-solid fa-briefcase"></i>Products</li>
       <li><i className="fa-solid fa-users"></i>User Category</li>
       <li><i className="fa-solid fa-briefcase"></i>Product Category</li>
       <li><i className="fa-solid fa-cart-shopping"></i>Cart Item</li>
    </div>
  )
}

export default Sidebar
