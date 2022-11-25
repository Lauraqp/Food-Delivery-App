import { foodTypes } from "../types/foodTypes";

const initialState = {
  platos:[],
  count:0
};

export const foodReducer = (state= initialState, action) => {
  switch (action.type) {
    case foodTypes.FOOD_GET:
      return {
        ...state,
        platos:action.payload,
       
      }
    default:
      return state;
  }

};

