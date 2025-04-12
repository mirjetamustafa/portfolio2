import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="mx-5 max-md:mt-9">
      <div className="md:flex justify-between ">
        <div className="p-5 text-xs max-md:hidden mt-6">
          &copy; {currentYear} by Mirjeta Mustafa.
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 p-5">
          <div className="md:mx-5">
            <p className="font-semibold text-sm md:text-center">Call</p>
            <p className="text-sm md:text-center mt-3">+383 49 781 062</p>
          </div>
          <div className="mx-5">
            <p className="font-semibold text-sm md:text-center mx-3">Write</p>
            <p className="text-sm md:text-center mt-3">
              mustafamirjeta11@gmail.com
            </p>
          </div>
          <div className="md:ml-3 max-md:mt-5">
            <p className="font-semibold text-sm md:text-center">Follow</p>
            <ul className="flex md:justify-center mt-3">
              <Link
                to={'https://www.facebook.com/mustafa.mirjeta/'}
                className="text-xl mr-2"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={'https://github.com/mirjetamustafa'}
                className="text-xl mr-2"
              >
                <FaGithub />
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
    </div>
  )
}

export default Footer
