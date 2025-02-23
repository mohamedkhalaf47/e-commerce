import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe To Our News Letter And Stay Updated</p>
      <div>
        <input type="email" placeholder='Your Email...'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
