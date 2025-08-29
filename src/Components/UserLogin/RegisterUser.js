import React, { useState } from "react";
import {
  Container,
  Card,
  Title,
  FormGroup,
  Label,
  Input,
  RegisterCard,
  TextCenter
} from "../../styled_components/register.styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PasswordStrengthBar from 'react-password-strength-bar';
import {validateEmail,checkPasswordComplexity,
  firstLastName} from "../../Config/utils";
import {openSnackbar} from "../../actions"
import { useDispatch } from "react-redux";
import * as actions from "../../actions";

export default function RegisterUser() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let forwardForm= isValidate();
    if(forwardForm?.enabler == 'success'){
      // form submission will happen here
      console.log("Form Submitted:",forwardForm, checkPasswordComplexity(formData?.password));
    }else{
      dispatch(actions.openSnackbar(forwardForm))
      // alert(forwardForm?.messager)
    }
  };

  const isValidate=()=>{
    let enable = false;
    let message = ''
    if(formData && !validateEmail(formData?.email) && formData?.email.length > 0 ){
      enable = true
      message= 'Format of email is invalid!'
    }
    if(formData && !firstLastName(formData?.firstName) && formData?.firstName.length > 0){
      enable = true
      message= 'First Name is not valid!'
    }
    if(formData && !firstLastName(formData?.lastName) && formData?.lastName.length > 0){
      enable = true
      message= 'Last Name is not valid!'
    }
    if(formData && !checkPasswordComplexity(formData?.password) && formData?.password.length > 0){
      enable = true
      message= 'Password format is not satisfactory!'
    }
    return {status:enable && enable == true ? 'error' : 'success', message:message}
  }

  return (
    <Container>
      <RegisterCard>
        <Title>Register</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
              {/* Password checker bar */}
                {formData && formData.password && 
                  <PasswordStrengthBar 
                  style={{width:"100%",margin:"0 auto",marginTop:"10px"}}
                  minLength={8}
                  password={formData?.password} />
                
                }
          </FormGroup>

          <Button 
              variant='contained'
              style={{margin:"0 auto"}} 
              type="submit"
              fullWidth
              disabled={(formData?.email.length > 0 && formData?.firstName.length > 0 &&
                formData?.lastName.length > 0 && formData?.password.length > 0) ? false : true
              }
          >
          Register</Button>

          <TextCenter>
            <small>
              Already have an account? <Link to="/">Login</Link>
            </small>
          </TextCenter>
        </form>
      </RegisterCard>
    </Container>
  );
}
