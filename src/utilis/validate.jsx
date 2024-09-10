export const checkValidate = (email , password , name) => {
   const isEmailValid  = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email); 
   const isPasswordValid  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
   const isName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

   if(!isName) return "Name is invalid"
   if(!isEmailValid) return "Email invalid";
   if(!isPasswordValid) return "Password is invalid";
   return null;
};