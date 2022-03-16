import React from 'react'
import { BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://www.linkedin.com/in/john-hartnett-24b2261b7/">
            <BsLinkedin/>
            </a>
        </div>
        <div>
        <a href="https://stackoverflow.com/users/18477028/jhartnettpro" >
            <BsStackOverflow/>
            </a>
        </div>
         
        <div>
          <a href="https://github.com/JHartnettPro">
            <BsGithub/>
            </a>
        </div>
    </div>
  )
}

export default SocialMedia