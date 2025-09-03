import styled from "styled-components";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px'
};

export const Container = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

    /* Default (desktop) background */
  background: url("/images/orange5.jpg") no-repeat center center fixed;
  background-size: cover;

  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    background: url("/images/orange5.jpg") no-repeat center center fixed;
    background-size: cover;
  }

  /* Mobile */
  @media (max-width: 600px) {
    background: url("/images/orange5.jpg") no-repeat center center fixed;
    background-size: cover;
  }
`;

export const RegisterCard = styled.div`
  max-width: 570px;
  width: 100%;
  margin-top: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 9px;

  /* Semi-transparent background for glass effect */
  background: rgba(255, 255, 255, 0.48);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari support */

  box-shadow: 0 5px 26px rgba(0, 0, 0, 0.2);
  padding: 36px 32px 32px 32px;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 95%;
    padding: 24px 18px;
    margin-top: 30px;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop}) {
    max-width: 420px;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.6rem;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TextCenter = styled.div`
  text-align: center;
  margin-top: 1rem;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
