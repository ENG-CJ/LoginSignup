import {
  Card,
  Container,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import "./styles/login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
import ForgetModel from "../components/forgotModel";
import ChangePass from "../components/changePass";
import OTP from "../components/otp";
export default function Login() {
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

  const [open,setOpen]= useState(false)

  return (
    <>
    <ForgetModel closeOpen ={setOpen} open={open}/>

      <ToastContainer position="top-center" />
      <Container  sx={{ margin: "auto", mt: 5, width: 700,  }}>
        <Card className="logincontainer" sx={{ p: 4, borderRadius: 5 }}>
          <Typography sx={{color: "white", fontSize: 29, fontWeight: "bold" }}>
            Login
          </Typography>
          <Typography sx={{color: "white",}}>Login Your Valid Account</Typography>
          <Divider />
          <Box sx={{ mt: 3 }}>
            <div
              className="form-group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="" style={{color: "white",}}>Email</label>
              <input
                name="email"
                onChange={handleDatachange}
                type="text"
                id=""
                className="email focus"
                style={{ marginTop: 7 }}
              />
            </div>

            <div
              className="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <label htmlFor=""  style={{color: "white",}}>Password</label>
              <input
                name="password"
                onChange={handleDatachange}
                type="text"
                id=""
                className="password focus"
                style={{ marginTop: 7 }}
              />
            </div>
          <div className="btns" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography sx={{color: "white", mt: 3 }}>
              Don't Have Account? <a href="/signup"  style={{color: "skyblue",}}>Register</a>
            </Typography>
            <a onClick={()=> setOpen(true)} href="#" style={{textDecoration: "none",color: "skyblue",}}>Forgot Password?</a>
          </div>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 2, width: "100%", p: 1.5 }}
            >
              Login
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}
