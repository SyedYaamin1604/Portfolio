import React, { useState, useEffect } from 'react';
import image from "../../assets/SyedYaamin.jpg";
import 'animate.css';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { RiBootstrapFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";


const About = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:pt-20 lg:mx-12 xl:mx-28 items-center'>
        <div className='mt-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]'>
          <img className='mt-10 w-[100%] h-[100%] rounded-full hover:shadow-2xl hover:shadow-blue-400 social-icon' src={image} alt="SyedYaamin" />
        </div>
        <div className='lg:mt-16'>
          <h1 className='text-blue-400 mt-20 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:text-left font-bold'>Who I Am?</h1>
          <p className='text-white font-medium md:text-base lg:text-lg text-sm w-[32rem] sm:w-[35rem] md:w-[36rem] xl:w-[38rem] text-center mt-3 lg:text-left'>Hi, I'm Syed Yaamin, a dedicated software engineer in web development. I have a passion for building dynamic, responsive, and user-friendly web applications using JavaScript, React, and Firebase. I enjoy solving problems and working on projects that challenge me to learn and grow.</p>
          <p className='text-white font-medium md:text-base lg:text-lg text-sm w-[32rem] sm:w-[35rem] md:w-[36rem] xl:w-[38rem] text-center mt-3 lg:text-left'>I'm always looking for opportunities to improve my skills and stay current with new technologies in the field. My aim is to contribute to meaningful projects and make a positive impact in the development industry.</p>
        </div>
      </div>
      <div className='pb-20'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl lg:mt-24 xl:text-5xl text-white font-bold text-center mt-10'>Professional <span className='text-blue-400'>Skillset</span></h1>
        <div className='flex flex-wrap justify-center items-center gap-10 text-8xl text-blue-400 mt-10'>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <FaHtml5 />
            <span className='text-3xl font-semibold pt-3'>HTML</span>
          </div>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <FaCss3Alt />
            <span className='text-3xl font-semibold pt-3'>CSS</span>
          </div>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <RiTailwindCssFill />
            <span className='text-3xl font-semibold pt-3'>Tailwind</span>
          </div>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <SiMui />
            <span className='text-3xl font-semibold pt-3'>Material UI</span>
          </div>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <RiBootstrapFill />
            <span className='text-3xl font-semibold pt-3'>Bootstrap</span>
          </div>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <FaJsSquare />
            <span className='text-3xl font-semibold pt-3'>Javascript</span>
          </div>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <BiLogoTypescript />
            <span className='text-3xl font-semibold pt-3'>Typescript</span>
          </div>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <FaReact />
            <span className='text-3xl font-semibold pt-3'>React</span>
          </div>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <IoLogoFirebase />
            <span className='text-3xl font-semibold pt-3'>Firebase</span>
          </div>
          <div className='w-[15rem] px-10 py-7 border-2 rounded-2xl flex flex-col justify-center items-center text-center border-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-black social-icon'>
            <FaGitAlt />
            <span className='text-3xl font-semibold pt-3'>Git</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
