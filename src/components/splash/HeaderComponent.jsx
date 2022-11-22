import React from 'react'
import iconoConection from '../../assest/Cellular Connection.png'
import iconoWifi from '../../assest/Wifi.png'
import iconoBatery from '../../assest/Battery.png'
import './splash.scss'

const HeaderComponent = () => {
  return (
    <section className='splash__header'>
        <h2>9:41</h2>
        <figure className='splash__iconos'>
          <img src={iconoConection} alt="Icono conexión de celular" />
          <img src={iconoWifi} alt="Icono Wifi" />
          <img src={iconoBatery} alt="Icono Batería" />
        </figure>
      </section>
  )
}

export default HeaderComponent