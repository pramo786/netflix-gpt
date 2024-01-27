export const validateEmailAndPassword = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};

export const validateEmailAndPasswordAndFullName = (email, password, name) => {
  const error = validateEmailAndPassword(email, password);
  if (error) return error;
  const isValidName =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      name);
  if (!isValidName) return "User Name is not correct";
  return null;
};
