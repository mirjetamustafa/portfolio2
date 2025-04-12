import React from 'react'

function Resume() {
  return (
    <div className="bg-[#e8dccf] h-135">
      <div className="flex justify-center">
        <div className="">
          <div className="flex mt-20">
            <span className="bg-blue-600 w-5 h-5 mt-3 mx-2"></span>
            <h1 className="text-4xl font-bold"> Resume</h1>
          </div>
          <div className="mt-9">
            <a
              href="./img/Mirjetaa.pdf"
              download={'./img/Mirjetaa.pdf'}
              className="bg-blue-600 px-4 py-1 text-white text-sm font-bold uppercase rounded-full mx-6"
            >
              Donlowad cv
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
