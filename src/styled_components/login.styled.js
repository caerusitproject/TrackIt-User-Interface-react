// StyledLogin.js
import styled from 'styled-components';

// Define breakpoints
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px'
};

// export const LoginPageBg = styled.div`
//   background: #fafbfc;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 1rem;

//   @media (max-width: ${breakpoints.mobile}) {
//     padding: 0.5rem;
//   }
// `;

export const LoginPageBg = styled.div`
  height: 100vh;
  width: 100%;
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

export const TextCenter = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Inputgroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 13px;
  width: 100%;
`;

export const InputgroupButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LoginCard = styled.div`
  max-width: 370px;
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


export const LoginAppTitle = styled.div`
  font-size: 1.45rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin-bottom: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;

export const TrackColorline = styled.div`
  height: 4.5px;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 22px;
  display: flex;
  overflow: hidden;
`;

export const Bar = styled.div`
  flex: 1;
  background: ${(props) => props.color};
`;

export const GoogleBtn = styled.button`
  border: 1.2px solid #4285f4;
  background: #fff;
  color: #4285f4;
  border-radius: 7px;
  width: 100%;
  padding: 9px 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.12s, color 0.12s, box-shadow 0.09s;
  box-shadow: 0 1px 2px #f3f5fa55;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f2f4fc;
    color: #1558dc;
    border-color: #1744af;
  }

  svg {
    margin-right: 7px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: 8px 6px;
  }
`;

export const DividerOr = styled.div`
  position: relative;
  margin: 28px 0 20px 0;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1.2px;
    background: #383636ff;
    z-index: 0;
  }

  span {
    background: #8d8989ff;
    color: #e7e5e5ff;
    padding: 0 18px;
    font-size: 0.98em;
    position: relative;
    z-index: 1;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.9em;
      padding: 0 10px;
    }
  }
`;

export const ForgotLink = styled.a`
  color: #3282e7;
  font-size: 0.99em;
  text-decoration: none;
  margin-top: 12px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.88em;
  }
`;

export const StyledInputGroupText = styled.span`
  background: #fff;
`;

export const StyledFormControl = styled.input`
  width: 100%;
  &:focus {
    border-color: #4285f4;
    box-shadow: 0 0 0 1px #4285f450;
  }
`;

export const StyledSelect = styled.select`
  background: #fff;
  width: 100%;
`;

export const StyledButton = styled.button`
  font-weight: 500;
  width: 100%;
  padding: 10px;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;
