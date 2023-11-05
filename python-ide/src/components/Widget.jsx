import React, { useState } from 'react'
import axios from 'axios'
import { MdFeedback  } from 'react-icons/md';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import "../css/widget.css"

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Widget() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(true);}
  const handleClose = () => {setOpen(false);handleCloseM()}
  const [value, setValue] = React.useState(2);
  const [feedback_msg,setFeedback_msg] = useState("")
  const [data,setData] = useState("")

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openM = Boolean(anchorEl);
  const handleClickM = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseM = () => {
    setAnchorEl(null);
  };
  
const postFeedback =()=> {
  var dat = {
    uid : localStorage.getItem("uid"),
    email : localStorage.getItem("email"),
    feedback_msg : feedback_msg,
    stars : parseInt(value),
    type : "overall"

  }
  setData(dat);
  console.log(data)
  var config = {
    method: 'post',
    url: 'http://serene-chamber-52731.herokuapp.com/feedback',
    headers: {},
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    handleClose();
    setFeedback_msg("");
    setValue(0);

  })
  .catch(function (error) {
    handleClose();
    handleClose();
    setFeedback_msg("");
    setValue(0);
    console.log(error);
  });
}
  return (
    <div className='widget'>
        <MdFeedback  onClick={handleClickM}></MdFeedback>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openM}
        onClose={handleCloseM}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
      <MenuItem onClick={handleOpen}>Feedback</MenuItem>
      <a style={{ "textDecoration": "none", "color": "black" }} target="_" href="https://www.picktime.com/brainlox">
      <MenuItem onClick={handleClose}>Book A Demo</MenuItem></a>
       
      </Menu>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
<h2>Give Feedback</h2>
        <Box
      sx={{
        '& > legend': { mt: 1 },
      }}
    >
      <Typography component="legend">How much do you like this app?</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    

    </Box> 

        <TextareaAutosize
      aria-label="minimum height"
      minRows={6}
      value = {feedback_msg}
      onChange = {e=>setFeedback_msg(e.target.value)}
      placeholder="Please give your valuable feedback..."
      style={{ width: 290 }}
    />
    <br/>
    <br/>
    <br/>
    <br/>
          <Button onClick = {handleClose} variant="outlined">cancel</Button>
         <Button onClick={postFeedback} variant="contained">OK</Button>

        </Box>
      </Modal>
    </div>
  )
}

export default Widget;