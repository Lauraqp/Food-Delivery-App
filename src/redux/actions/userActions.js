import { type } from "@testing-library/user-event/dist/type";
import { signInWithPopup, signOut, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userType";
import { google } from "../../firebase/firebaseConfig";

export const actionSignPhoneAsync = (codigo) => {
  //retorna una solución
  return (dispatch) => {
    const confirmationResult = window.confirmationResult; //valor guardado en window confirmation del login almacenado en una constante
    confirmationResult
      .confirm(codigo) //promesa
      .then((result) => {
        const user = result.user; //user igual a lo que hay en la propiedad user de result
        console.log(user);
        const { displayName, email, accessToken, phoneNumber, photoURL, uid } =
          user.auth.currentUser;
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
        dispatch(
          actionSignPhoneSync({ error: true, errorMessage: error.message })
        );
      });
  };
};

//VALIDATION NUMBER
export const actionSignPhoneSync = (user) => {
  //retorna una solución
  return {
    type: userTypes.VALIDATE_PHONE,
    payload: { ...user },
  };
};

//AUTHENTICATION
export const actionAuthenticationSync = () => {
  return {
    type: userTypes.USER_AUTHENTICATION,
  };
};

//REGISTER
export const actionUserCreateAsync = ({ password, email, name }) => {
  return async (dispatch) => {
    try {
      await updatePassword(auth.currentUser, password);
      await updateEmail(auth.currentUser, email);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      dispatch(actionUserCreateSync({ name, email, password, error: false }));
    } catch (error) {
      console.log(error);
      dispatch(
        actionUserCreateSync({ error: true, errorMessage: error.message })
      );
    }
  };
};

export const actionUserCreateSync = (parcialUser) => {
  return {
    type: userTypes.USER_CREATE,
    payload: { ...parcialUser },
  };
};

//LOGOUT
export const actionLogoutAsync = ()=>{
  return (dispatch)=>{
    signOut(auth)
    .then(()=>{
      dispatch(actionSignPhoneAsync())
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
const actionLogoutSync =()=>{
  return{
    type: userTypes.USER_LOGOUT
  }
}

//GOOGLE
export const loginProviderAsync = (provider) =>{
  return (dispatch) =>{
    signInWithPopup(auth,google)
    .then((result)=>{
      const user = result.user
      console.log(user);
      const { displayName, email, accessToken, phoneNumber, photoURL, uid } =
          user.auth.currentUser;
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
    .catch((error)=>{
      console.log(error);
        dispatch(
          actionSignPhoneSync({ error: true, errorMessage: error.message })
        );
    })
  }
}