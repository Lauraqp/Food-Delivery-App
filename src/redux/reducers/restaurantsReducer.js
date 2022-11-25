import { restaurantsTypes } from "../types/restaurantsTypes";

const initialState = {
  restaurantes: [],
  filterRestaurants: []
};

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case restaurantsTypes.RESTAURANTS_PRINT:
      return {
        ...state,
        restaurantes: action.payload,
      };
      
      case restaurantsTypes.FILTER_RESTAURANTS:
        return{
          ...state,
          restaurantes: action.payload.restaurantes
        }


    default:
      return state;
  }
};

