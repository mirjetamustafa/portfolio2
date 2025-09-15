import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router'

import { FaGithub } from 'react-icons/fa6'

function Home() {
  return (
    <div className="md:flex">
      <div className="flex md:justify-end justify-center pt-9 bg-[#e8dccf] md:h-170 h-140 md:mb-9 md:w-250">
        <div className="bg-[#f5ede7] h-110 w-90 md:mt-20 md:-mr-20">
          <div className="flex justify-center">
            <img
              src="./img/2.png"
              alt=""
              width={150}
              className="rounded-full mt-11"
            />
          </div>
          <h1 className="text-center text-2xl font-serif font-bold mt-4">
            Mirjeta <br /> Mustafa
          </h1>
          <div className="flex justify-center">
            <div className="border border-blue-600 w-11 mt-7"></div>
          </div>
          <p className="text-xl font-thin font-serif  mt-5 text-center">
            Frontend Developer
          </p>
          <div className="mt-19 bg-white py-4 shadow-md">
            <ul className="flex justify-center">
              <Link
                to={'https://www.facebook.com/mustafa.mirjeta/'}
                className="text-xl"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={'https://github.com/mirjetamustafa'}
                className="text-xl px-5"
              >
                <FaGithub />
              </Link>
              <Link
                to={'https://www.linkedin.com/in/mirjeta-mustafa-9a302323b/'}
                className="text-xl pr-5"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to={'https://www.instagram.com/_mirjetamustafa/'}
                className="text-xl"
              >
                <FaInstagram />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full max-md:bg-[#e8dccf]">
        <div className="md:ml-30 md:mt-[140px] max-md:text-center">
          <h1 className="md:text-8xl text-4xl font-bold">Hello</h1>
          <p className="md:text-2xl font-medium mt-5">
            Here's who I am & what I do
          </p>
          <div className="flex max-md:justify-center mt-9">
            <Link to={'/resume'}>
              <a className="bg-blue-600 border-2 border-blue-600 uppercase px-6 py-1 rounded-full font-bold text-sm text-white hover:bg-white hover:border-blue-600 hover:text-black">
                Resume
              </a>
            </Link>

            <Link to={'/projects'}>
              <a className="uppercase px-6 py-1 rounded-full font-bold text-sm text-black hover:bg-blue-600 border-gray-600 border hover:text-white mx-3">
                Projects
              </a>
            </Link>
          </div>
          <div className="max-md:flex max-md:justify-center">
            <p className="mt-5 md:pr-60 max-md:pb-9">
              I'm Mirjeta and studied English language. I decided to switch my
              career into Frontend development. I got trained for web
              development module I on Probit Academy. I was always passionate
              about the digital world so this is one of the main reasions why I
              decided to get into this field. Now I am looking for a company
              where I can practice my knowledge and prove my skills as a
              Frontend Developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
