import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carosel from '../Container/Carosel'
import Pro from '../Container/Pro'

import Navigation from './Navigation';

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    let userentry = localStorage.getItem("Email")
    if (userentry === '' || userentry === null) {
      navigate('/Login')
    }
  }, []);
  return <>
    <Navigation />
    <div className='container'>
      <Carosel />
      <Pro />
      <div className="footer">
        <div className="footer mx-3" style={{ color: "black" }} >Terms and Condition</div>
        <div className="footer " style={{ color: "rgb(10, 10, 10)" }} >Privacy Policy</div></div>

      <p className="footer" style={{ color: 'darkgray' }}>Near Worker Pvt. Ltd.</p>

    </div>
  </>
}

export default Home