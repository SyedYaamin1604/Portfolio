import React from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaFacebook, FaHackerrank } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Contact = () => {
  return (
    <>
      <div className='pt-14 pb-10 lg:mx-20'>
        <h1 className='text-blue-400 text-2xl text-center font-bold mt-14 mb-3 lg:text-5xl'>Contact With Me</h1>
        <div className='mx-2 flex flex-col items-center lg:flex-row lg:justify-between gap-5 xl:gap-16'>
          <div className='border-2 border-black w-full mt-5 rounded-xl px-4 bg-blue-950'>
            <p className='text-sky-300 font-base text-sm sm:text-base text-center w-full mt-4'>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
            <form className='text-sky-300'>
              <div className='mt-5'>
                <label className='text-xl md:text-3xl font-normal'>Your Name:</label><br />
                <input className='text-base md:text-2xl text-blue-400 outline-none h-10 md:h-12 w-full rounded-xl bg-black border-2 border-blue-400 px-2 mt-2' type="text" /><br />
              </div>
              <div className='mt-3'>
                <label className='text-xl md:text-3xl font-normal'>Your Email:</label><br />
                <input className='text-base md:text-2xl text-blue-400 outline-none h-10 md:h-12 w-full rounded-xl bg-black border-2 border-blue-400 px-2 mt-2' type="email" /><br />
              </div>
              <div className='mt-3'>
                <label className='text-xl md:text-3xl font-normal'>Your Message:</label><br />
                <textarea className='text-base md:text-2xl text-blue-400 outline-none h-36 w-full rounded-xl bg-black border-2 border-blue-400 px-2 mt-2' id="textarea"></textarea><br />
              </div>
              <button className='text-blue-400 border-2 border-blue-400 bg-black px-6 py-3 rounded-3xl text-md font-bold my-5 hover:bg-blue-400 hover:text-black hover:border-black' type='submit'>Send Message</button>
            </form>
          </div>
          <div className='mt-10 w-full px-5'>
            <h1 className='text-sm md:text-xl text-white flex justify-start items-center gap-2 lg:text-3xl'>
              <span className='p-2 border-2 border-black bg-blue-400 text-black rounded-full text-left hover:border-blue-400 hover:bg-black hover:text-blue-400 social-icon'><MdOutlineAlternateEmail /></span> Syedyaamin1604@gmail.com</h1>
            <h1 className='text-sm md:text-xl text-white flex justify-start items-center gap-2 mt-2 lg:mt-7 lg:text-3xl'>
              <span className='p-2 border-2 border-black bg-blue-400 text-black rounded-full text-left hover:border-blue-400 hover:bg-black hover:text-blue-400 social-icon' ><FaPhone />
              </span>
              +92 3482300194</h1>
            <h1 className='text-sm md:text-xl text-white flex justify-start items-center gap-2 mt-2 lg:text-3xl lg:mt-7'>
              <span className='p-2 border-2 border-black bg-blue-400 text-black rounded-full text-left hover:border-blue-400 hover:bg-black hover:text-blue-400 social-icon'><FaLocationDot />
              </span>
              District Central, Karachi, Pakistan</h1>
            <div className='mt-4 text-md min-[450px]:text-xl sm:text-3xl lg:text-4xl xl:text-5xl lg:mt-10 flex justify-start lg:justify-start items-center gap-3'>
              <span className='p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon '><FaGithub /></span>
              <span className='p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon '><FaLinkedin /></span>
              <span className='p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon '><FaFacebook /></span>
              <span className='p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon '><FaHackerrank /></span>
              <span className='p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon '><MdEmail /></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact