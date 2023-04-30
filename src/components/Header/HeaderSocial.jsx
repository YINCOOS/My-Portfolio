import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/ogunsemoyin-david-7a32051ba/' target='_blank' rel="noreferrer"><ImLinkedin/></a>
      <a href='https://github.com/YINCOOS/' target='_blank' rel="noreferrer"><BsGithub/></a>
      <a href='https://twitter.com/yincoos/' target='_blank' rel="noreferrer"><AiOutlineTwitter/></a>
    </div>
  )
}

export default HeaderSocial
