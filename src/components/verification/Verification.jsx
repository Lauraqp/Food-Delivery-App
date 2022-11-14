import React from 'react'
import logo from '../../assest/Logo.png'
import './verification.scss'

const Verification = () => {
  return (
    <div className='verification'>
      <section className="verification__section">
      <figure>
        <img src={logo} alt="" className="verification__image" />
      </figure>
      <h1>Verification</h1>
      <p>Enter the four-digit code from SMS
SMS not received. Send again?</p>
      <input type="number" className="verification__input" placeholder="+1"/>
      </section>
    </div>
  )
}

export default Verification