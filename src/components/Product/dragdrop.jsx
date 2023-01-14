import React , {useRef , useState}from 'react'
import { ImageConfig } from '../../configs/imageConfig'

import uploadImg from "../../assets/cloud-upload-regular-240.png" ; 

const Dragdrop = ({onFileChange , uploadFile}) => {
  const wrapperRef = useRef(null) ;  

  const [fileList , setFileList] = useState([]) ; 

  const onDragEnter = () => wrapperRef.current.classList.add('dragover') ; 
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover') ; 
  const onDrop = () => wrapperRef.current.classList.remove('dragover') ; 
  
     const onFileDrop = (e)=>{
            const newFile = e.target.files[0] ; 
            if(newFile){
              const updateList = [...fileList , newFile ] ; 
              setFileList(updateList)
              onFileChange(updateList) ;
            } 
           
     } 
    

  return (
    <div  
       ref = {wrapperRef} 
       onDragEnter = {onDragEnter}
       onDragLeave = {onDragLeave}
       onDrop = {onDrop}
       className = "drop-file-input">

      <div className = "drop-file-input-label">
     
        <img className = "drag-image" src = {uploadImg}  atl = ""/>
        <p>Drag & Drop your files here</p>
      </div>
       <input type = "file"  value = "" onChange = {onFileDrop}/>
       
    </div>
  )
}

export default Dragdrop
