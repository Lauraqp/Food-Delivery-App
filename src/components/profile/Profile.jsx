import React from 'react'
import { Form } from 'react-bootstrap';
import profile from '../../assest/Profileimg.png';
import Footer from '../Home/Footer';
import HeaderComponent from '../splash/HeaderComponent';
import './profile.scss'

const Profile = () => {
  return (
    <div className='profile'>
      <HeaderComponent/>

      <Form className='profile__inputs'>
      <figure>
        <img src={profile} alt="" />
        <p>Jerry Smith</p>
      </figure>
        <input type="text" placeholder='Account edit'/>
        <input type="text" placeholder='Account edit'/>
        <input type="text" placeholder='Payment'/>
        <input type="text" placeholder='Language'/>
        <input type="text" placeholder='Location'/>
        <input type="text" placeholder='FAQ'/>
        <input type="text" placeholder='Support'/>
      </Form>
      <Footer/>
    </div>
  )
}

export default Profile