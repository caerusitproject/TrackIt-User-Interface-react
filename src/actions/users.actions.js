// src/actions/userActions.js
import {fetchUserService} from "../services/users.services"

export const USER_SUCCESS='USER_SUCCESS'
export const OPEN_LOADER='OPEN_LOADER'
export const CLOSE_LOADER='CLOSE_LOADER'
export const CAPTCHA_DATA='CAPTCHA_DATA'

export const fetchUser = () => {
  return async (dispatch) => {
    fetchUserService()
    .then((res)=>{
        if(res && Array.isArray(res)){
            dispatch({
                type:USER_SUCCESS,
                payload:res
            })
            dispatch({
                type:CLOSE_LOADER
            })
        }
    }).catch((err)=>{
          dispatch({
                type:CLOSE_LOADER
            })
        console.log(err.message)
    })
  };
};

export const saveCaptchaData=(data)=>{
    return(dispatch=>{
        dispatch({
            type:CAPTCHA_DATA,
            payload:data
        })
    })
}
