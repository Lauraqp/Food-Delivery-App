import { userTypes } from "../types/userType";

export const userReducer = (state={},action)=>{
    switch (action.type) {
        case userTypes: VALIDATE_PHONE:
            return{
                ...action.payload
            }
            case userTypes.PHONE_AUTHENTICATION:
                return{
                    ...state,
                    authentication:true
                }
                case userTypes.USER_CREATE:
                    return{
                        ...state,
                        ...action.payload
                    }

        default:
            return state
    }
}