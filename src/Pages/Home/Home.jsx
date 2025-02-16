import React, { useState, useEffect } from "react";
import image from "../../assets/SyedYaamin.jpg";
import Resume from "../../assets/Resume.pdf";
import "animate.css";
import { FaGithub, FaLinkedin, FaFacebook, FaHackerrank } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const text = ["Web Developer", "Front End Developer", "Wordpress Developer"];

  useEffect(() => {
    const validInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 3000);
    return () => clearInterval(validInterval);
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:mx-20 xl:mx-32 xl:mt-20 justify-center items-center mt-10 pb-10 custom-scrollbar">
        <div id="Left" className="text-white mt-10">
          <h1 className="mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left">
            Hi, I am{" "}
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-400">
              Yaamin
            </span>
          </h1>
          <h1 className="mt-2 xl:mt-5 text-center lg:text-left font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            I am a{" "}
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-400">
              {text[textIndex]}
            </span>
          </h1>
          <p className="mt-2 text-center lg:text-left w-[27rem] sm:w-[30rem] lg:w-[32rem] xl:w-[40rem] font-normal lg:text-lg xl:text-xl xl:font-semibold xl:mt-8">
            A frontend developer passionate about developing beautiful and
            functional websites. With expertise in HTML, CSS, JavaScript, and
            React, I can transform ideas into interactive web experiences. Let
            create something amazing together!
          </p>
          <div className="mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl lg:mt-6 xl:mt-8 flex justify-center lg:justify-start items-center gap-10">
            <Link className="p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon" to="https://github.com/SyedYaamin1604">
                <FaGithub />
            </Link>
            <Link className="p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon" to="https://www.linkedin.com/in/syedyaamin/">
              <FaLinkedin />
            </Link>
            <span className="p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon ">
              <FaFacebook />
            </span>
            <span className="p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon ">
              <FaHackerrank />
            </span>
            <span className="p-2 border-2 border-blue-400 bg-black text-blue-400 rounded-xl hover:border-black hover:text-black hover:bg-blue-400 social-icon ">
              <MdEmail />
            </span>
          </div>
          <div className="flex justify-center lg:justify-start items-center gap-5 mt-6 lg:mt-8 xl:mt-10">
            <Link
              className="py-3 px-5 text-md lg:text-lg xl:text-2xl font-semibold border-2 border-blue-400 rounded-full social-icon text-blue-400 bg-black hover:border-black hover:text-black hover:bg-blue-600"
              to="/contact"
            >
              <button className="flex justify-center items-center gap-2">
                Contact Me{" "}
                <span className="text-xl xl:text-2xl">
                  <CgProfile />
                </span>
              </button>
            </Link>
            <button className="py-3 px-5 text-md lg:text-lg xl:text-2xl font-semibold border-2 border-black rounded-full social-icon bg-blue-600 text-black hover:bg-black hover:border-blue-400 hover:text-blue-400">
              <a
                href={Resume}
                download="Resume.pdf"
                className="flex justify-center items-center gap-2"
              >
                Download Resume{" "}
                <span className="text-xl xl:text-2xl">
                  <IoMdDownload />
                </span>
              </a>
            </button>
          </div>
        </div>
        <div
          id="Right"
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] xl:w-[350px] xl:h-[350px] mt-10"
        >
          <img
            className="w-[100%] h-[100%] rounded-full social-icon hover:shadow-2xl hover:shadow-blue-400"
            src={image}
            alt="SyedYaamin"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
