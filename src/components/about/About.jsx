import React from 'react'
import './about.css'
import ME from '../../assets/JH2.png'
import {RiAwardFill} from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

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

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>          
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ipsam rem nesciunt sapiente. Id vero harum fuga, aliquam obcaecati tempore explicabo molestias placeat doloribus quia alias modi a neque iure!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About