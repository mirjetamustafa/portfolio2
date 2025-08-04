import React from 'react'
import { Link } from 'react-router'

function Projects() {
  return (
    <div className="bg-[#e8dccf] h-135">
      <div className="flex justify-center">
        <div className="">
          <div className="flex mt-20">
            <span className="bg-blue-600 w-5 h-5 mt-3 mx-2"></span>
            <h1 className="text-4xl font-bold"> Projects</h1>
          </div>
          <div className="flex flex-col  ml-5">
            <a
              href="https://gjirafamall-clone.netlify.app/"
              target="_blank"
              className="bg-blue-600 border border-blue-600 mt-9  text-white font-bold text-sm rounded-full px-4 py-1 hover:text-black hover:bg-[#e8dccf]"
            >
              GjirafaMall Clone
            </a>

            <a
              href="https://papaya-lamington-e122df.netlify.app/"
              target="_blank"
              className="bg-blue-600 border border-blue-600 mt-5  text-white font-bold text-sm rounded-full px-4 py-1 hover:text-black hover:bg-[#e8dccf]"
            >
              FundedNext Clone
            </a>

            <a
              href="https://papaya-lamington-e122df.netlify.app/"
              target="_blank"
              className="bg-blue-600 border border-blue-600 mt-5 text-white font-bold text-sm rounded-full px-4 py-1 hover:text-black hover:bg-[#e8dccf]"
            >
              Admin Dashboard
            </a>

            <a
              href="https://papaya-lamington-e122df.netlify.app/"
              target="_blank"
              className="bg-blue-600 border border-blue-600 mt-5 text-white font-bold text-sm rounded-full px-4 py-1 hover:text-black hover:bg-[#e8dccf]"
            >
              Movie Flix
            </a>

            <a
              href="https://papaya-lamington-e122df.netlify.app/"
              target="_blank"
              className="bg-blue-600 border border-blue-600 mt-5 text-white font-bold text-sm rounded-full px-4 py-1 hover:text-black hover:bg-[#e8dccf]"
            >
              Luxury Cars
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
