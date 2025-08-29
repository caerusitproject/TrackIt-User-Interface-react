
const OPEN_SNACK_BAR = 'OPEN_SNACK_BAR';
const CLOSE_SNACK_BAR = 'CLOSE_SNACK_BAR';

export const openSnackbar=(data)=>{
    return(dispatch=>{
        dispatch({
            type:OPEN_SNACK_BAR,
            payload:{message:data.message,status:data.status}
        })
    })
}

export const closeSnackbar=()=>{
    return(dispatch=>{
        dispatch({
            type:CLOSE_SNACK_BAR,
        })
    })
}