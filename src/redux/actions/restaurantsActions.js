import { async } from "@firebase/util";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { restaurantsTypes } from "../types/restaurantsTypes";


const collectionName = 'restaurantes';
const restaurantsCollection = collection(dataBase, collectionName);

export const actionsPrintRestaurantsAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(restaurantsCollection); //getdocs obtiene cada objeto o elemento del array
    const restaurantes = [];
    try {
      querySnapshot.forEach(element => {
        const restaurant = {
          id: element.id,
          ...element.data(),
        };
        restaurantes.push(restaurant);
      });
    } catch (error) {
      console.log(error);
    } finally {
      //si no se cumple la promesa envia el array vacio
      dispatch(actionsPrintRestaurantsSync(restaurantes));
    }
  };
};

const actionsPrintRestaurantsSync = (restaurantes) => {
  return {
    type: restaurantsTypes.RESTAURANTS_PRINT,
    payload: restaurantes,
  };
};

//FILTERS
export const actionFilterRestaurantsAsync= (foodCategory,)=>{
  return async(dispatch) =>{
    const restaurantsCollection = collection(dataBase,collectionName)
    const q = query(restaurantsCollection, where( foodCategory,"===",))
    const restaurants = [];
    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc)=>{
        restaurants.push({
          foodCategory: doc.foodCategory,
          ...doc.data()
        })
      })
    } catch (error) {
      console.log(error);
    }finally{
      dispatch(actionFilterRestaurantsSync(restaurants))
    }
  }
}

const actionFilterRestaurantsSync = (restaurants) => {
  return {
    type: restaurantsTypes.FILTER_RESTAURANTS,
    payload: {
      restaurantes: restaurants,
    },
  };
};