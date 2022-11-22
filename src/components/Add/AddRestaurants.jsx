import React from 'react'
import { Form } from 'react-bootstrap'
import { inputList } from '../../services/data'

const AddRestaurants = () => {
  return (
    <div> Add new restaurante
        <Form>
            {
                inputList.map((item,index))
            }
        </Form>
    </div>
  )
}

export default AddRestaurants