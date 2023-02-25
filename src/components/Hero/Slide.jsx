import React from 'react'

const Slide = ({ title, image, desc }) => {
  return (
    <div className="w-full h-full justify-center items-center">
      <div className='w-full flex gap-5 md:max-w[1400px] lg:mag-w[1400px]'>
        <div className="left bg-red-400 flex-1">
          <h1 className="">
            {title}
          </h1>
        </div>
        <div className="right bg-blue-400 flex-1">
          {image}
        </div>
      </div>
    </div>
  )
}

export default Slide