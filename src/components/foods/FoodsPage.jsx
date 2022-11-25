import React, { useEffect, useState} from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionsGetFoodAsync, addCounter, decreaseCounter } from "../../redux/actions/foodActions";
import './foods.scss'

const FoodsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionsGetFoodAsync());
  }, [dispatch]);

  const { name } = useParams();
  console.log(name);
  const {platos} = useSelector((state) => state.foodStore);
  console.log(platos);
  const filterFood= platos.filter((plato)=>plato.property===name)
  console.log(filterFood);

  // const [counter, setCounter] = useState(0)

  // const plusCounter= () => {
  //   // Counter state is incremented
  //   setCounter(counter + 1)
  // }
  // const minusCounter = () => {
  //   // Counter state is decremented
  //   setCounter(counter - 1)
  // }
  return (
    <div>
      {filterFood.length? (
        filterFood.map((plato, index) => (
          <Card key={index} className="food">
            <Card.Img variant="top" src={plato.image} className="food__image" />
            <Card.Body>
              <Card.Title>{plato.name}</Card.Title>
              <Card.Text>{`${plato.foodCategory}:${plato.description}`}</Card.Text>
              <Card.Text>{plato.price}</Card.Text>
              <Button  variant="outline-warning">+</Button>
              <Card.Text></Card.Text>
              <Button variant="outline-warning">-</Button>
              {/* <Button onClick={total}>Total</Button> */}
            </Card.Body>
          </Card>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default FoodsPage;
