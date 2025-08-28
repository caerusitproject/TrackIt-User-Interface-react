export const validateEmail = (email) => {
  var regularExp= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regularExp.test(email);
};

export const checkPasswordComplexity = (pwd) => {
  var regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-zA-Z]).{6,}$/;
  var valid = regularExpression.test(pwd);
  return valid;
};

export const firstLastName = (flname)=>{
    var regularExpression = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/
    return regularExpression.test(flname)
}