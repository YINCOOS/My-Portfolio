/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Adeyinka</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Services'>Service</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#Testimonial'>Testimonial</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/YINCOOS' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://www.linkedin.com/in/adeyinka-david-ogunsemoyin-7a32051ba/' target='_blank' rel="noreferrer"><ImLinkedin/></a>
        <a href="https://wa.me/07032248112" target='_blank' rel="noreferrer"><BsWhatsapp/></a>
        <a href='https://twitter.com/yincoos/' target='_blank' rel="noreferrer"><AiOutlineTwitter/></a>
        <a href='https://msng.link/o/?YINCOOS=tg' target='_blank' rel="noreferrer"><FaTelegramPlane/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Yincoos_World. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
