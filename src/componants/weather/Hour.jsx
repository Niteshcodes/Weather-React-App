import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from "@fortawesome/fontawesome-svg-core";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { all } from 'axios';

export default function Hour(props) {

    config.autoAddCss = false;
    config.license = "free";
    const [hours, setHours] = useState(null)

    useEffect(() => {
        const hoursData = () => {
            setHours(props.data)
        }
        if (props.data) {
            hoursData()
            console.log('hours', hours)
        }
    }, [props.data])

    return (
        <div className='w-full'>
            {hours && <div className='daily'>
                <h1 className='p-5 m-2 text-center text-xl text-neutral-300'>Hourly Data</h1>

                {hours &&
                    hours.map((x) => (
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title font-medium text-sm">

                                <div className='grid grid-cols-6 max-sm:px-2 py-0 text-sm max-sm:grid-cols-3'>
                                    <div className="data "> <FontAwesomeIcon icon={icon.faClock} width={20} height={20} className='mx-1' /> {x.time.split(' ')[1]}</div>
                                    <div className="data flex justify-start align-middle h-fit"><p>{x.condition.text}</p>
                                        <img src={x.condition.icon} alt={x.condition.text} /></div>
                                    <div className="data"> <FontAwesomeIcon icon={icon.faTemperature0} width={20} height={20} className='mx-1' />{x.temp_c} C</div>
                                    <div className="data">  <FontAwesomeIcon icon={icon.faCloudRain} width={20} height={20} className='mx-1' />{x.chance_of_rain}%</div>
                                    <div className="data "> <FontAwesomeIcon icon={icon.faCircleRadiation} width={20} height={20} className='m-1' /> {x.uv}</div>
                                    <div className="data flex">
                                    <FontAwesomeIcon icon={icon.faWind} width={20} height={20} className='mx-1' />{x.wind_kph} Km/h
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-content">
                                <div className='grid grid-cols-6 gap-3 text-sm text-blue-200'>
                                    <div></div>
                                    <div></div>

                                    <div className="data ">
                                        <p >feels Like</p>
                                        {x.feelslike_c}C
                                    </div>
                                    <div className="data">
                                        <p >Colud cover</p>
                                        {x.cloud}%
                                    </div>
                                    <div className="data">
                                        <p >
                                            Visibility
                                        </p>
                                        {x.vis_km} Km
                                    </div>
                                    <div className="data">
                                        <p >
                                            Wind Gust
                                        </p>
                                        {x.wind_kph} Km/h
                                    </div>
                                    <div className="data"></div>
                                    <div className="data"></div>
                                    
                                    <div className="data">
                                    <p >
                                                humidity</p>
                                            {x.humidity}%
                                    </div>
                                    <div className="data">
                                    <p className='text-sm text-blue-100 m-0 p-0'>
                                                Dew point</p>
                                            {x.dewpoint_c} C
                                    </div>
                                    <div className="data">
                                    <p className='text-sm text-blue-100 m-0 p-0'>
                                                Pressure</p>
                                            {x.pressure_mb} mb
                                    </div>
                                    <div className="data"></div>


                                </div>
                            </div>
                        </div>
                    ))}
            </div>}
        </div>
    )
}
