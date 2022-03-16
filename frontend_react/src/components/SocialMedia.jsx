import React from 'react'
import { BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsLinkedin/>
        </div>
        <div>
        <a href="https://google.com" >
            <BsStackOverflow/>
            </a>
        </div>
         
        <div>
            <BsGithub/>
        </div>
    </div>
  )
}

export default SocialMedia