import React from 'react'
// import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form';
import Dragdrop from './dragdrop';
import {useState } from "react" ; 
import Button from '@mui/material/Button';


const Input = () => { 
  const [listfile , setListFile] = useState([]);

  const [product , setProduct] = useState({
      Name : "" , 
      Discription : "" , 
      Category : "" , 
  })
  //  console.log(product) ; 
    console.log(listfile) ; 

   const handleChange = (e)=>{
         const {value , name} = e.target ; 
         setProduct( {...product ,[name] : value})

   } 
   

   const onFileChange = (files)=>{
    //console.log(files);
   setListFile(files)
   }

     const onSubmit = async (e)=>{
         e.preventDefault() ; 
          const data = {product , listfile}
         try{
             const res = await fetch("http://localhost:8000/product" , {
                 method: 'POST', 
                 body : JSON.stringify(data) , 
                 headers: {
                  "Content-type": "application/json"
                },
             }) 
             const result = await res.json() ; 
               console.log(result); 
               clearinput()
               clearFile() ; 
         }catch(err){
               console.log(err.message) ; 
         }
          
     }

     const clearinput = ()=>{
      // handleChange(0) ; 
     }
   
 const clearFile = ()=>{
      setListFile([]);
     
    }

    

  return ( 
    <>
    <div className="form-container">
      <div className="input-field">
        <p>Create Product</p>
        <Form onSubmit = {onSubmit}>
          <input onChange = {handleChange}  name = "Name" type="text" placeholder="product Name" />
          <input onChange = {handleChange}  name = "Discription" type="text" placeholder="Product Description" />
          <select onChange = {handleChange} name = "Category" >
            <option> Product Category </option>
            <option> electronic </option>
            <option> cloth</option>
            <option> jewllery</option>
            <option>food</option>
            <option> footware </option>
            <option>watch</option>
            <option>cosmetic</option>
            <option>grocery</option>
          </select>
          {/* <input type = "submit" value = "Submit"/> */}
        </Form>
      </div>
      <div className = "drag-box-container">
      <div className="box">
        <div className = "drag-input">
          <div className = "drag-input-box">
                  <Dragdrop  onFileChange = {(files)=>onFileChange(files)}/>
          </div>
          <div className = "drag-button-box">
            <button><i className="fa-solid fa-rectangle-xmark"></i></button>
            <button ><i className="fa-solid fa-cloud-arrow-up"></i></button>
          </div>
       </div>
       <div className = "discription-input">
       {listfile.map((items , index)=>{
         return <div className = "file-show" key = {index}>
                  {index+1}{"    "}{items.name}
         </div>
       })}</div> 
      
      </div> 
         <div className = "clear-button-box">
              <button onClick = {clearFile}>Clear(0)</button>
              <button>insert into Post</button>
         </div>
      </div>
    </div>
     <div className = "submit-button">
      <Button variant="outlined">Add Product Details</Button><br/>
      <Button onClick = {onSubmit} variant="contained">Submit</Button>
      </div>
    </>
  )
}

export default Input
