// Login.jsx
import React from 'react';
import {
  LoginPageBg,
  LoginCard,
  LoginAppTitle,
  TrackColorline,
  Bar,
  GoogleBtn,
  DividerOr,
  ForgotLink,
  Inputgroup,
  InputgroupButtons,
  TextCenter
} from '../../styled_components/login.styled';
import {TextField,InputAdornment,Button} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import PasswordIcon from '@mui/icons-material/Password';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function Login() {
  return (
    <LoginPageBg>
      <LoginCard>
        <LoginAppTitle>
          Track&nbsp;&nbsp;<span>It</span>
        </LoginAppTitle>

        <TrackColorline>
          <Bar color="#e94141" />
          <Bar color="#34a853" />
          <Bar color="#4285f4" />
          <Bar color="#fbbc05" />
        </TrackColorline>

        <GoogleBtn>
          <svg width="19" height="19" viewBox="0 0 30 30">
            <g>
              <path fill="#4285F4" d="M27.5 15.365c0-.948-.08-1.871-.219-2.761H15v5.232h7.038c-.304 1.643-1.225 3.036-2.606 3.974v3.293h4.221c2.47-2.279 3.847-5.635 3.847-9.738z" />
              <path fill="#34A853" d="M15 28c3.285 0 6.047-1.094 8.063-2.971l-4.221-3.293c-1.175.77-2.679 1.225-3.842 1.225-2.959 0-5.465-2.002-6.363-4.691h-4.318v2.944C7.587 25.521 11.077 28 15 28z" />
              <path fill="#FBBC05" d="M8.637 17.269C8.437 16.713 8.318 16.119 8.318 15.5s.12-1.212.319-1.769v-2.947h-4.318C2.746 12.756 2 14.054 2 15.5s.746 2.744 2.319 4.716z" />
              <path fill="#EA4335" d="M15 9.898c1.794 0 3.398.625 4.669 1.849l3.5-3.5C23.547 5.98 20.786 4.5 15 4.5c-3.923 0-7.413 2.479-9.363 6.162l4.319 2.944c.893-2.689 3.4-4.691 6.363-4.691z" />
            </g>
          </svg>
          Log in with&nbsp;<b>Google</b>
        </GoogleBtn>

        <DividerOr><span>OR</span></DividerOr>
      {/* // form handling for inouts // */}
        <form autoComplete="off">
            <Inputgroup>
                    <TextField 
                      type="text"
                      id="outlined-basic" 
                      label="Email" 
                      variant="outlined" 
                      autoComplete='on'
                      slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        )
                      }
                      }}
                    />
                
                  <TextField 
                      id="outlined-basic" 
                      type="password"
                      label="Password" 
                      autoComplete='on'
                      variant="outlined" 
                      slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PasswordIcon />
                          </InputAdornment>
                        )
                      }
                      }}
                    />
                     <FormControl sx={{ minWidth: 260,marginBottom:'10px' }}>
                        <InputLabel id="demo-simple-select-helper-label">Domain</InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      </Inputgroup>
                
                      {/* domain name will be added if needed */}
                      {/* <StyledInputGroupText className="input-group-text"><i className="bi bi-globe2" /></StyledInputGroupText>
                      <StyledSelect className="form-select">
                        <option>Domain 1</option>
                        <option>Domain 2</option>
                        <option>Domain 3</option>
                      </StyledSelect> */}
                <InputgroupButtons>
                <Button variant="contained" style={{width:"70%"}} >Log In</Button>
                <TextCenter>
                <small><Link to='/password_reset'>Forgot Password?</Link></small>
                <small>New to Track It <Link to = '/register-user'>Sign Up</Link></small>
                </TextCenter>
                </InputgroupButtons>
        </form>
      </LoginCard>
    </LoginPageBg>
  );
}  

export default Login;
