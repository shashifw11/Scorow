import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import "./model.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height : 400,
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius : 5 , 
  marginTop : 5,
}; 


export default function BasicModal({saveChange}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 

  const [input , setInput] = React.useState({
    "Part-Number" : "" , 
    "Size" : "" ,
    "Product-Count" : ""
  });


  const handleChange = (e)=>{
     const {id , value} = e.target ; 
     const data = {...input , [id] : value} 
     setInput(data) 
  }

  const submit = ()=>{
    saveChange(input)
    setOpen(false)
  }

  return (
    <div >
      <Button variant="outlined" onClick={handleOpen}>Add Product Details</Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className = "model-container" sx={style}> 
        <Typography  variant="h6" mt={2} mb={2}>Make Change in your product details</Typography>
        <TextField  onChange = {handleChange} style = {{marginBottom: "20px"}} fullWidth label="Part Number" id="Part-Number" />
        <TextField   onChange = {handleChange} style = {{marginBottom: "20px"}} fullWidth label="Size" id="Size" />
        <TextField    onChange = {handleChange} style = {{marginBottom: "20px"}} fullWidth label="Product Count" id="Product-Count" />
        
        <Button className = "model-save-button" onClick={submit} variant="contained" color="success">Save Change</Button>
        </Box>
      </Modal>
    </div>
  );
}
