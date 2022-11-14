import React from 'react'
import './splash.scss'
import image1 from '../../assest/Logo (1).png'
import iconoConection from '../../assest/Cellular Connection.png'
import iconoWifi from '../../assest/Wifi.png'
import iconoBatery from '../../assest/Battery.png'
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
  const navigate = useNavigate();
  const handlePage = ()=>{
    navigate('/slide')
  }
  return (
    <div className='splash'>
      <section className='splash__header'>
        <h2>9:41</h2>
        <figure className='splash__iconos'>
          <img src={iconoConection} alt="Icono conexión de celular" />
          <img src={iconoWifi} alt="Icono Wifi" />
          <img src={iconoBatery} alt="Icono Batería" />
        </figure>
      </section>
      <section className='splash__main'>
      <button onClick={handlePage} className='splash__button'><img src={image1} alt="" className='splash__image1' /></button>
      </section>
    </div>
  )
}

export default SplashScreen