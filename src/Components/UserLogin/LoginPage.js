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
import Paper from "@mui/material/Paper";
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

function Login() {
  return (
      <Paper elevation={13}>
      <LoginPageBg>
          <LoginCard>
            <LoginAppTitle>
              {/* Track&nbsp;&nbsp;<span>It</span> */}
              <b>TMS</b>
            </LoginAppTitle>

            <TrackColorline>
              <Bar color="#e94141" />
              <Bar color="#34a853" />
              <Bar color="#4285f4" />
              <Bar color="#fbbc05" />
            </TrackColorline>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                <Button 
                  variant="outlined" 
                  // fullWidth
                  sx={{
                    margin:"0 auto",
                    borderColor: "black",
                    color: "black",
                    width:"85%",
                    "&:hover": {
                      borderColor: "black",
                      backgroundColor: "rgba(0,0,0,0.04)", // subtle hover
                    }
                  }}
                >
                  <GoogleIcon />
                </Button>

                <Button 
                  variant="outlined" 
                  // fullWidth
                  sx={{
                    borderColor: "black",
                     width:"85%",
                     margin:"0 auto",
                    color: "black",
                    "&:hover": {
                      borderColor: "black",
                      backgroundColor: "rgba(0,0,0,0.04)",
                    }
                  }}
                >
                  <MicrosoftIcon />
                </Button>
               </div>


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
      </Paper>
  );
}  

export default Login;
