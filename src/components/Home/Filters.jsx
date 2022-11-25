import React  from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { actionFilterAsync, actionsPrintRestaurantsAsync } from "../../redux/actions/restaurantsActions";
import HeaderComponent from "../splash/HeaderComponent";
import Footer from "./Footer";



const FiltersPage = () => {
  const dispatch= useDispatch()
  const onSearch = (data) => {
    const searchParam = data.search
    console.log(searchParam);
    dispatch(actionFilterAsync(searchParam));
    }
    const {register, handleSubmit}= useForm()


    const restorePlatos = ({target}) => {
      if (target.value.trim() === '') {
        dispatch(actionFilterAsync());
      }
  }
  return (
    <div>
      <HeaderComponent/>
       <Form className="d-flex m-3" onSubmit={handleSubmit(onSearch)}>
                    <Form.Control
                      type="search"
                      {...register("search", {required: true})}
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      onChange={restorePlatos}
                      // onChange={onChangeSearch}
                    />
                    <Button type='submit' variant="outline-warning">Search</Button>
                  </Form>
          <Footer/>
    </div>
  )

};

export default FiltersPage;
