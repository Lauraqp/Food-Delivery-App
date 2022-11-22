import React from 'react'
import iconoConection from '../../assest/Cellular Connection.png'
import iconoWifi from '../../assest/Wifi.png'
import iconoBatery from '../../assest/Battery.png'
import Footer from './Footer'

const Filters = () => {
  return (
    <div className='filters'>
        <section className='splash__header'>
        <h>9:41</h>
        <figure className='splash__iconos'>
          <img src={iconoConection} alt="Icono conexión de celular" />
          <img src={iconoWifi} alt="Icono Wifi" />
          <img src={iconoBatery} alt="Icono Batería" />
        </figure>
      </section>
      <section>
      <input type="text" placeholder='Search for a dish'/>
        <p>Recent Searches</p>
      </section>
      <Footer/>
    </div>
  )
}

export default Filters