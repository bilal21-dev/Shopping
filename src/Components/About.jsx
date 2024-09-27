import React from 'react'

const About = () => {

  const animation = {
    animation: 'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <img src="https://thumbs.dreamstime.com/b/modern-thin-line-design-concept-us-website-banner-vector-illustration-concept-basic-company-personal-information-66374659.jpg" className='back' />
      <div style={animation}>
        <p className='bg-black bg-opacity-80 px-5 py-7 rounded-xl text-xl ml-7 mr-7 text-white'>At [Company Name], our mission is to [clearly state the company's purpose]. We believe in [core values] and are committed to making a positive impact on [target audience]. Our team of experts works tirelessly to develop innovative solutions that [briefly describe the company's products/services]. Join us in our quest to [company's vision].</p>
      </div>
    </div>
  )
}

export default About
