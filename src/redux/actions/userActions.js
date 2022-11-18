import { userTypes } from "../types/userType";
// import { auth } from "../../firebase/firebaseConfig";

export const actionSignPhoneAsync = (codigo) => {
  //retorna una solución
  return (dispatch) => {
    const confirmationResult = window.confirmationResult; //valor guardado en window confirmation del login almacenado en una constante
    confirmationResult.confirm(codigo) //promesa
      .then((result) => {
        const user = result.user //user igual a lo que hay en la propiedad user de result
        console.log(user)
        const { displayName, email, accessToken, phoneNumber, photoURL, uid } =user.auth.currentUser
        dispatch(
          actionSignPhoneSync({
            name: displayName,
            email,
            accessToken,
            phoneNumber,
            avatar: photoURL,
            uid,
            error: false,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(actionSignPhoneSync({ error: true, errorMessage: error.message}));
      });
  };
};

export const actionSignPhoneSync = (user) => {
  //retorna una solución
  return {
    type: userTypes.VALIDATE_PHONE,
    payload:{ ...user },
  };
};
