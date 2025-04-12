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
          <div className="flex mt-9 -ml-9">
            <Link to={'https://gjirafamall-clone.netlify.app/'}>
              <a className="bg-blue-600 border border-blue-600 text-white font-bold text-sm rounded-full px-4 py-1 hover:text-black hover:bg-[#e8dccf]">
                GjirafaMall Clone
              </a>
            </Link>
            <Link
              to={'https://papaya-lamington-e122df.netlify.app/'}
              className="mx-5"
            >
              <a className="bg-blue-600 border border-blue-600 text-white font-bold text-sm rounded-full px-4 py-1 hover:text-black hover:bg-[#e8dccf]">
                FundedNext Clone
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
