import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <>
    <div className="social_media">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><CiLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
    </>
  )
}

export default SocialMedia