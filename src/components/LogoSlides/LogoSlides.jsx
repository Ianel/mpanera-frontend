import React from 'react'

const LogoSlides = ({ title, logo }) => {
  return (
    <div className="flex flex-col items-center">
        <p>{title}</p>
        <div className="text-5xl">{logo}</div>
    </div>
  )
}

export default LogoSlides ;