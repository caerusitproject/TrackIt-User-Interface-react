import React, { useState } from "react";
import {
  Container,
  Card,
  Title,
  FormGroup,
  Label,
  Input,
//   Button,
  TextCenter
} from "../../styled_components/register.styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function RegisterUser() {
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
    console.log("Form Submitted:", formData);
  };

  return (
    <Container>
      <Card>
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
          </FormGroup>

          <Button variant='contained' type="submit" fullWidth>Register</Button>

          <TextCenter>
            <small>
              Already have an account? <Link to="/">Login</Link>
            </small>
          </TextCenter>
        </form>
      </Card>
    </Container>
  );
}
