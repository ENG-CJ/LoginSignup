import { Card, Container, Typography,Box, Divider, Button } from '@mui/material'
import React, { useState } from 'react'
import './styles/login.css'

export default function Signup() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function isValidEmail(email) {
    // Regular expression for a basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
  }
  const handleDatachange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const validateUserCredentials = async (data) => {
    $.ajax({
      method: "POST",
      dataType: "JSON",
      url: "/users/login",
      data: data,
      success: (response) => {
        return response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  };
  const handleSubmit = async () => {
    if (loginData.email == "" || loginData.password == "")
      toast.error("Please enter email and password");
    else if (!isValidEmail(loginData.email))
      toast.error("invalid email format");
    else {
      var response = await validateUserCredentials(loginData);
      console.log(response);
    }
  };
  return (
    <Container sx={{margin: "auto", mt: 5,width: 700,}}>
        <Card sx={{ p: 4,borderRadius:5 }}>
        <Typography sx={{fontSize: 29, fontWeight: "bold"}}>Signup</Typography> 
        <Typography>Register Your Account For Free</Typography> 
      <Divider/>
        <Box sx={{mt: 3,}}>
        <div className="form-group" style={{ display: "flex", flexDirection: "column"}}>
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" className="username" style={{marginTop:7, marginBottom: 10}} />
        </div>
        <div className="form-group" style={{ display: "flex", flexDirection: "column"}}>
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" className="email" style={{marginTop:7}} />
        </div>

        <div className="form-group" style={{ display: "flex", flexDirection: "column", marginTop:20}}>
            <label htmlFor="">Password</label>
            <input type="text" name="" id="" className="password" style={{marginTop:7}} />
        </div>
        <Typography sx={{mt: 3}}>Have Account? <a href='/'>Login</a></Typography>
        <Button variant='contained' sx={{mt: 2, width: "100%", p: 1.5}}>Signup</Button>
        </Box>
        </Card>
    </Container>
  )
}
