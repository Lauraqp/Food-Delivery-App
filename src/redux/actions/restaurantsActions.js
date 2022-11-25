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
export const actionFilterRestaurantsAsync= (searchParam, searchValue )=>{
  return async (dispatch) => {
    const restaurantsCollection= collection(dataBase, collectionName);
    const q = query(restaurantsCollection, where(searchParam, "==", searchValue));
    const restaurantes = [];
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        restaurantes.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionFilterRestaurantsSync(restaurantes));
    }
  };
}

const actionFilterRestaurantsSync = (restaurantes) => {
  return {
    type: restaurantsTypes.FILTER_RESTAURANTS,
    payload: {
      restaurantes: restaurantes
    }
  };
};

export const actionFilterAsync = (searchParam) => {
  return async (dispatch) => {
    const foodsCollection= collection(dataBase, collectionName);
    const querySnapshot = await getDocs(foodsCollection);
    const platos = [];
    try {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        platos.push({
          id: doc.id,
          ...doc.data(),
        });
        //   console.log(doc.id, " => ", doc.data());
      });
  
      const filterdPlatos = platos.filter((item) =>
        item.name.toLowerCase().includes(searchParam.toLowerCase())
      );
      dispatch(actionFilterRestaurantsSync(filterdPlatos));
    } catch (error) {
      console.error(error);
      dispatch(actionFilterRestaurantsSync([]));
    }
  };
};