/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './Service.css'
import {HiOutlineShieldCheck} from 'react-icons/hi'
const Service = () => {
  return (
    <section id="Services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className='container services__container'>
            <article className='service'>
                <div className='service__head'>
                    <h3>UI/UX Design</h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I believe in creating experiences that are meaningful and engaging.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I create intuitive user interfaces that are not only visually stunning, but also enable users to achieve their goals quickly and efficiently.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I strive to create an experience that is easy to navigate and understand, while also being aesthetically pleasing. </p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>My aim is to create designs that are as accessible and user-friendly as possible, making sure that each user's experience is truly memorable.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I create intuitive user interfaces that are not only visually stunning, but also enable users to achieve their goals quickly and efficiently.</p>
                    </li>
                </ul>
            </article>
        {/**===================================WEB DEVELOPMENT=================================== */}
            <article className='service'>
                <div className='service__head'>
                    <h3>Web Development</h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I'm passionate about creating high-quality, user-friendly websites that are both functional and visually appealing.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>If you're looking for a web developer with a keen eye for detail and a commitment to delivering quality results, you've come to the right place.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I strive to create an experience that is easy to navigate and understand, while also being aesthetically pleasing. </p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>My aim is to create designs that are as accessible and user-friendly as possible, making sure that each user's experience is truly memorable.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I am passionate about developing innovative solutions that help businesses succeed.</p>
                    </li>
                </ul>
            </article>

            {/**===================================WEB DEVELOPMENT=================================== */}
            <article className='service'>
                <div className='service__head'>
                    <h3>Content Creation</h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I'm passionate about creating high-quality, user-friendly websites that are both functional and visually appealing.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>If you're looking for a web developer with a keen eye for detail and a commitment to delivering quality results, you've come to the right place.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I strive to create an experience that is easy to navigate and understand, while also being aesthetically pleasing. </p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>My aim is to create designs that are as accessible and user-friendly as possible, making sure that each user's experience is truly memorable.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I am passionate about developing innovative solutions that help businesses succeed.</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Service
