/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'
import {FcHome} from 'react-icons/fc'
import {FaUserAlt} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'


const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href='#' onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><FcHome /></a>
        <a href='#About' onClick={()=> setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><FaUserAlt /></a>
        <a href='#Experience' onClick={()=> setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><BiBookBookmark /></a>
        <a href='#Services' onClick={()=> setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><MdOutlineHomeRepairService /></a>
        <a href='#Contact' onClick={()=> setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Navbar
