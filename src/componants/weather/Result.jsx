

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from "@fortawesome/fontawesome-svg-core";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { all } from 'axios';
// import { faClock } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faClock);









export default function Result(props) {
  config.autoAddCss = false;
  config.license = "free";

  const Location = props.Location;
  const Current = props.Current;
  return (
    <div id="result" className=''>
      <div className="Location flex justify-center  flex-wrap">
        {Location && <div className="card-container flex flex-col md:flex-row md:w-2/5">
          <div className="card card-side bg-base-100 shadow-xl my-5 mx-3 w-full md:w-auto md:mr-3">
            <figure>
              <img src={`https://source.unsplash.com/random/350x400/?+${Current.condition.text}`} className='' alt="Movie" />
            </figure>
            <div className="card-body sm:flex-col">
              <p className='text-sm  '> **{Location.name}, {Location.country} ** </p>
              <h2 className="card-title text-sm ml-3">lat: {Location.lat} <br /> lon: {Location.lon} </h2>
              <p className='text-sm flex p-0 '><FontAwesomeIcon icon={icon.faGlobe} fade width={20} height={20} className='my-2 mx-2 ' />{Location.region} tz:{Location.tz_id}
              </p>

              <span className='flex justify-between p-0 '>
                <FontAwesomeIcon icon={faClock} width={20} height={20} className='my-2 mx-2 ' /> {Location.localtime}
              </span>


              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Watch</button> */}
              </div>
            </div>
          </div>
        </div>
        }
        <div className="card  card-side bg-base-100 shadow-xl my-5 mx-3 w-full md:w-auto md:mr-3">
          {Current && <div className="card-body ">
            <p className='text-sm m-5 flex align-middle my-1'><img src={Current.condition.icon} alt="sun" /><FontAwesomeIcon icon={icon.faTemperatureQuarter} width={20} height={20} className='mx-1 ' />{Current.feelslike_c} {'\u00b0'}C , {Current.condition.text} </p>
            <h2 className="card-title">Humidity : {Current.humidity} <br /> pressure: {Current.pressure_mb} mb</h2>
            <p className='text-sm '>
              <p className='flex my-2'>
                <span className='flex'><FontAwesomeIcon icon={icon.faWind} width={20} height={20} className='mx-1' /> {Current.wind_kph} Kph</span>
                <span className='mx-3 flex'><FontAwesomeIcon icon={icon.faCompass} width={20} height={20} className='mx-1' />{Current.wind_dir}</span>
              </p>
              <p className='flex '>
                <span className='flex'><FontAwesomeIcon icon={icon.faLightbulb} width={20} height={20} className='mx-1' />
                UV:{Current.uv}</span>
                <span className='flex mx-3'><FontAwesomeIcon icon={icon.faEye} width={19} height={19} className='mx-1' />: {Current.vis_km} km </span>
              </p>
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Watch</button> */}
            </div>
          </div>}


        </div>
      </div>
    </div>
  )
}
