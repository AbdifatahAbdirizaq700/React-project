import React from 'react'
import './About.css'
function About() {
  return (
    <div className='beta'>
      <div className='lin4'></div>
      <div className='container4'>
        <div className='About1'>
          <h1 className='Ab'>About Me</h1>
          {/* <br/> */}
          <h3>Email</h3>
          <p>ccabdirasaaq800@gmail.com</p>
          <h3>Role</h3>
          <p className='develop'>devaloper</p>
          <h3>Phone</h3>
          <p>(252)<span> </span>0613734916</p>
          <a className='hr' href="#####">Download CV</a>
        </div>
        <div className='About2'>
        <img className='im1' src="/images/model.jpg" alt="no thing" />
        </div>

      </div>
    </div>
  )
}

export default About
