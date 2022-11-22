import React from 'react'
import './splash.scss'
import image1 from '../../assest/Logo (1).png'
import { useNavigate } from 'react-router-dom'
import Header from './HeaderComponent'

const SplashScreen = () => {
  const navigate = useNavigate();
  const handlePage = ()=>{
    navigate('/slide')
  }
  return (
    <div className='splash'>
      <Header/>
      <section className='splash__main'>
      <button onClick={handlePage} className='splash__button'><img src={image1} alt="" className='splash__image1' /></button>
      </section>
    </div>
  )
}

export default SplashScreen