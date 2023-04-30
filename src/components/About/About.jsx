import React from 'react'
import './About.css'
import ME from '../../Assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {ImFolderOpen} from 'react-icons/im'
const About = () => {
  return (
   <section id='About'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
                <img src={ME} alt='Adeyinka' />
            </div>
        </div>
        <div className='about__content'>
            <div className='about__cards'>
                <article className='about__card'>
                    <FaAward  className='about__icon'/>
                    <h5>Experience</h5>
                    <small>3+ Years Working Experience</small>
                </article>

                <article className='about__card'>
                    <AiOutlineUsergroupDelete  className='about__icon'/>
                    <h5>Clients</h5>
                    <small>200+ Worlwide</small>
                </article>

                <article className='about__card'>
                    <ImFolderOpen className='about__icon'/>
                    <h5>Projects</h5>
                    <small>80+ completed Projects</small>
                </article>
            </div>
            <p>
            I am a highly experienced MERN stack developer with a proven track record of developing dynamic, user-friendly web applications and mobile applications. I have extensive experience working with the MongoDB, Express, React, and Node.js (MERN) technologies, React Native for the IOS and Android. I have a strong understanding of front-end technologies such as Reactjs, HTML5, CSS3, and JavaScript, as well as back-end technologies such as Node.js and Express.
            </p>
            <a href='#Contact' className='btn btn-primary'>Contact Me</a>
        </div>
    </div>
   </section>
  )
}

export default About
