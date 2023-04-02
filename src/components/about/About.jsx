import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about_card'>
            <RiAwardFill className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years of experience</small>
          </article>

          
        </div>
      </div>
    </section>
  )
}

export default About