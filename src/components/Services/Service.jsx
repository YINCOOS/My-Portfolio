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

        {/**===================================UI/UX=================================== */}
            <article className='service'>
                <div className='service__head'>
                    <h3>Mobile Development</h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I Develop mobile applications for Android or iOS platforms, or both.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>I create intuitive user interfaces that are not only visually stunning, but also enable users to achieve their goals quickly and efficiently.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>Writing clean, maintainable, and scalable code that meets the company's standards and follows industry best practices. </p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>Creating and maintaining technical documentation such as design documents, API specifications, and user manuals.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>Keeping up-to-date with the latest mobile development trends and technologies, and sharing knowledge with the team.</p>
                    </li>
                </ul>
            </article>

            {/**===================================CONTENT CREATION=================================== */}
            <article className='service'>
                <div className='service__head'>
                    <h3>Content Creation</h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>Do you need creative thinker who has a knack for coming up with fresh ideas for his content?.</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>Someone who is always willing to go the extra mile to ensure her content is of the highest quality?</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>Someone with passion for content creation and her enthusiasm for creating content that resonates with the audience? </p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>Someone with knowledge of the latest trends and social media platforms who ensures that his content is up to date and relevant?</p>
                    </li>
                    <li>
                        <HiOutlineShieldCheck className='service__list-icon'/>
                        <p>Here we have a passion for creating engaging content that captures the attention of the audience and keeps them coming back for more, with a keen eye for detail.</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Service
