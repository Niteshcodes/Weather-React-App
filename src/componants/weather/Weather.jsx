import React from 'react'


import AsyncDropdown from './AsyncPage';




function Weather() {

  return (
    <div className="Weather overflow-auto w-full">
      <h1 className='text-center my-10 text-4xl  text-green-400 font-semibold'>Weather App</h1>
      <div className=' w-full flex justify-center '>
        <AsyncDropdown />
      </div>
      



    </div>

  )
}
export default Weather;
