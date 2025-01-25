import React from 'react'
import PortfolioImage from '../../assets/PortfolioImage.jpg'
import BuySellCorner from "../../assets/Buy-Sell-Corner.jpg"
import BloggingWebsite from "../../assets/BloggingWebsite.jpg"
import { Link } from 'react-router-dom'

const Projects = () => {

  return (
    <>
      <div className='mx-28 py-5 mt-5'>
        <div className='mt-20'>
          <h1 className='text-white text-5xl font-bold text-center'>My Recent <span className='text-blue-400'>Projects</span></h1>
          <p className='text-white font-normal text-xl text-center mt-3'>Here are a few Projects I've worked on recently.</p>
        </div>
      </div>
      <div className='py-5 pb-10 flex justify-center items-center flex-wrap gap-10'>
        <div className="card bg-blue-950 bg-opacity-80 w-96 shadow-2xl shadow-blue-400 transition delay-100 duration-1000 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-600">
          <figure className="px-10 pt-10">
            <img
              src={PortfolioImage}
              alt="Portfolio"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white text-3xl font-bold">Portfolio</h2>
            <p className='text-white'>A digital representation of my skills and projects as a developer. It features a modern design with animations to make browsing enjoyable.</p>
            <div className="card-actions flex justify-center items-center gap-5">
              <button className="btn btn-primary bg-blue-400 border-none text-white font-bold" onClick={()=> window.open("https://github.com/SyedYaamin1604/Portfolio")}>Github</button>
              <Link to={"/"}><button className="btn btn-primary bg-blue-400 border-none text-white font-bold" >Live Demo</button></Link>
            </div>
          </div>
        </div>
        <div className="card bg-blue-950 bg-opacity-80 w-96 shadow-2xl shadow-blue-400 transition delay-100 duration-1000 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-600">
          <figure className="px-10 pt-10">
            <img
              src={BuySellCorner}
              alt="Buy Sell Corner"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white text-3xl font-bold">Buy-Sell Corner</h2>
            <p className='text-white'>An e-commerce web app designed to simplify online buying and selling. It includes product listings, user authentication, and a sleek UI.</p>
            <div className="card-actions flex justify-center items-center gap-5">
              <button className="btn btn-primary bg-blue-400 border-none text-white font-bold" onClick={()=> window.open("https://github.com/SyedYaamin1604/Buy-Sell-Corner")}>Github</button>
              <button className="btn btn-primary bg-blue-400 border-none text-white font-bold" onClick={()=> window.open("https://buy-sell-corner01.web.app/")}>Live Demo</button>
            </div>
          </div>
        </div>
        <div className="card bg-blue-950 bg-opacity-80 w-96 shadow-2xl shadow-blue-400 transition delay-100 duration-1000 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-600">
          <figure className="px-10 pt-10">
            <img
              src={BloggingWebsite}
              alt="Blogging Website"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white text-3xl font-bold">Blogging Website</h2>
            <p className='text-white'>A minimalist platform for sharing ideas and stories. It allows users to publish, edit, and manage blogs effortlessly.</p>
            <div className="card-actions flex justify-center items-center gap-5">
              <button className="btn btn-primary bg-blue-400 border-none text-white font-bold" onClick={()=> window.open("https://github.com/SyedYaamin1604/Blogging-Website")}>Github</button>
              <button className="btn btn-primary bg-blue-400 border-none text-white font-bold" onClick={()=> window.open("https://react-blogging-app-1.web.app/")}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects