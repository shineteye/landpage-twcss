import React from 'react'
import firstImg from '../../assets/user_480px.png'
import TestimonialCard from './TestimonialCard'


function Testimonials() {
  return (
    // Container for the heading and testimonials
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      {/* Heading */}
      <h2 className='text-4xl font-bold'>
        What's Different About Management
      </h2>
      {/* Testimonials Container */}
      <div className='flex flex-col mt-16 md:flex-row md:space-x-6'>
        <TestimonialCard
          img={firstImg}
          name={"Shine Teye"}
          quote="This is not a drill, Soldiers to your battle stations" />
        <TestimonialCard
          img={firstImg}
          name={"Karl Bileri"}
          quote="This is not a drill, Soldiers to your battle stations" />
        <TestimonialCard
          img={firstImg}
          name={"Dr. Anon"}
          quote="This is not a drill, Soldiers to your battle stations" />
      </div>
      <a href="here"
        className='p-3 px-6 pt-2 text-lg font-bold text-white bg-red-500 rounded-full '>
        Let's go</a>
    </div>
  )
}

export default Testimonials
