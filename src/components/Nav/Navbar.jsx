import React from 'react'
import './Navbar.css'
import {FcHome} from 'react-icons/fc'
import {FaUserAlt} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'


const Navbar = () => {
  return (
    <nav>
        <a href='#' className='active'><FcHome /></a>
        <a href='#About'><FaUserAlt /></a>
        <a href='#Experience'><BiBookBookmark /></a>
        <a href='#Services'><MdOutlineHomeRepairService /></a>
        <a href='#Contact'><BiMessageDetail /></a>
    </nav>
  )
}

export default Navbar
