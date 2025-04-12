import React, { useState } from 'react'
import { Link } from 'react-router'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:px-9 bg-white sticky top-0 z-50  shadow ">
      <div className="flex justify-between p-9">
        <Link to={'/'} className="md:flex">
          <div className="flex">
            <span className="bg-blue-600 w-4 h-4 mt-2 mx-2"></span>
            <h1 className="text-2xl font-bold font-serif">Mirjeta Mustafa</h1>
          </div>

          <span className="ml-3 font-serif mt-1.5 max-md:hidden">/</span>
          <span className="font-serif uppercase mt-1.5 md:mx-1 max-md:ml-2">
            Frontend developer
          </span>
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(true)}
            className=" text-2xl cursor-pointer"
          >
            <RxHamburgerMenu />
          </button>
          <div
            className={`md:hidden fixed top-0 left-0 bg-[#e8dccf] text-black w-full h-full transform transition-transform duration-300
                ${open ? 'translate-y-0' : 'translate-y-full'}`}
          >
            <div className="flex justify-end p-9">
              <button
                onClick={() => setOpen(false)}
                className=" text-2xl cursor-pointer"
              >
                <IoMdClose />
              </button>
            </div>
            <ul className="p-9 text-center flex flex-col">
              <Link
                to={'/'}
                className=" text-lg uppercase font-bold hover:text-blue-500 active:text-blue-500"
              >
                About Me
              </Link>
              <Link
                to={'/resume'}
                className="mt-5 text-lg uppercase font-bold hover:text-blue-500 active:text-blue-500"
              >
                Resume
              </Link>
              <Link
                to={'/projects'}
                className="mt-5 text-lg uppercase font-bold hover:text-blue-500 active:text-blue-500"
              >
                Projects
              </Link>
            </ul>
          </div>
        </div>

        <ul className="mx-5 max-md:hidden">
          <Link
            to={'/'}
            className="mx-2 text-lg uppercase font-thin hover:text-blue-500 active:text-blue-500"
          >
            About Me
          </Link>
          <Link
            to={'resume'}
            className="mx-2 text-lg uppercase  font-thin hover:text-blue-500 active:text-blue-500"
          >
            Resume
          </Link>
          <Link
            to={'/projects'}
            className="mx-2 text-lg uppercase  font-thin hover:text-blue-500 active:text-blue-500"
          >
            Projects
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
