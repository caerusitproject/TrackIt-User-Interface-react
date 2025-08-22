import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background: white;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
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
