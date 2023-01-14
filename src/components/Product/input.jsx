import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Dragdrop from './dragdrop';
import {useState } from "react" ; 

const Input = () => { 
  const [listfile , setListFile] = useState([]);

   const onFileChange = (files)=>{
             console.log(files);
             setListFile(files)
      }
    const clearFile = ()=>{
      setListFile([]);
    }

    const uploadFile = ()=>{

    }

  return (
    <div className="form-container">
      <div className="input-field">
        <Form>
          <input type="text" placeholder="product Name" />
          <input type="text" placeholder="Product Description" />
          <select name="Web Languages">
            <option> HTML 5  </option>
            <option> CSS 3</option>
            <option> Bootstrap  </option>
            <option>Angular </option>
            <option> React JS </option>
            <option> Vue JS</option>
            <option>Python  </option>
            <option>PHP</option>
          </select>

        </Form>
      </div>
      <div className = "drag-box-container">
      <div className="box">
        <div className = "drag-input">
          <div className = "drag-input-box">
                  <Dragdrop uploadFile = {uploadFile} onFileChange = {(files)=>onFileChange(files)}/>
          </div>
          <div className = "drag-button-box">
            <button><i className="fa-solid fa-rectangle-xmark"></i></button>
            <button onChange = {uploadFile}><i className="fa-solid fa-cloud-arrow-up"></i></button>
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
              <button onClick = {clearFile}>Clear</button>
              <button>insert into Post</button>
         </div>
      </div>
    </div>
  )
}

export default Input
