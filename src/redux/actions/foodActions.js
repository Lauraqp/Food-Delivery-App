import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { foodTypes } from "../types/foodTypes";

const collectionName = "platos";

export const actionsGetFoodAsync=()=> {
  return async (dispatch) => {
    const foodsCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(foodsCollection); //getdocs obtiene cada objeto o elemento del array
    const platos = [];
    try {
      querySnapshot.forEach((doc)=> {
        platos.push({
          id: doc.id,
          ...doc.data(),
        })
        console.log(doc.id, "=>", doc.data());
      });
    } catch (error) {
      console.log(error);
    } finally {
      //si no se cumple la promesa envia el array vacio
      dispatch(actionsGetFoodSync(platos))
    }
  };
};

const actionsGetFoodSync =(platos)=>{
  return{
    type: foodTypes.FOOD_GET,
    payload:platos
  }
}
