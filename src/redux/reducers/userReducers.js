import { userTypes } from "../types/userType";

export const userReducer = (state={},action)=>{
    switch (action.type) {
        case userTypes.VALIDATE_PHONE:
            return{
                ...action.payload
            }
            case userTypes.USER_AUTHENTICATION:
                    return{
                        ...state,
                        authentication:true //nueva propiedad
                    }
            case userTypes.USER_CREATE:
                return{
                    ...state,
                    ...action.payload //guarda la copia más lo que se agrega
                }
            case userTypes.USER_LOGOUT:
                return{
                    
                }
        default:
            return state
    }
}