import React from 'react'
import home from '../../assest/footer1.png'
import  lupa from '../../assest/footer2.png'
import ordenes from '../../assest/footer3.png'
import perfil from '../../assest/footer4.png'
import {  useNavigate } from 'react-router-dom';
import "./home.scss";

const Footer = () => {
 const navigate=useNavigate()
const  sendHome =()=>{
  navigate("/home")
}
const  sendFilters =()=>{
    navigate("/filters")
  }
  const  sendOrdenes =()=>{
    navigate("/orders")
  }
  const  sendSearch =()=>{
    navigate("/profile")
  }
  
  return (
   <footer className='footer'>
          <button className='footer__buttons' onClick={sendHome}><img src={home}  className="footer_imgs" /></button>
          <button className='footer__buttons' onClick={sendFilters} ><img src={lupa} className="footer_imgs" /></button>
          <button className='footer__buttons' onClick={sendOrdenes}><img src={ordenes} className="footer_imgs" /></button>
          <button className='footer__buttons' onClick={sendSearch}><img src={perfil} className="footer_imgs" /></button>
   </footer>
  )
}

export default Footer