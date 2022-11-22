import React from 'react'
import Footer from '../Home/Footer'
import Header from '../splash/HeaderComponent'
import './order.scss'

const Orders = () => {
  return (
    <div className='orders'>
      <Header/>
      <section className='orders__main'>
      <h1 className='orders__h1'>26.11.2022</h1>
      <article>
      <p>Meat Pizza(medium)</p>
      <p>Combined Pizza(small)</p>
      </article>
      <article>
        <p>Production cost</p>
        <p>Cost of delivery</p>
        <hr></hr>
        <p>Total</p>
      </article>
      </section>
      <Footer/>
    </div>
  )
}

export default Orders