// src/reducers/userReducer.js
const initialState = {
 message:null,
 status:null,
 opener:false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_SNACK_BAR':
      return { 
        ...state, 
        message: action.payload.message,
        status: action.payload.status,
        opener:true
    };
    case 'CLOSE_SNACK_BAR':
      return { 
        ...state, 
        opener:false
    };
    
    default:
      return state;
  }
};
