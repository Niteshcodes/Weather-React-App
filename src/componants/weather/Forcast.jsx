import React from 'react';
import { useState,useEffect } from 'react';
import {WeatherForcast} from '../services/Service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from "@fortawesome/fontawesome-svg-core";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { all } from 'axios';
// import { faClock } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faClock);







export default function Forcast(props) {
    config.autoAddCss = false;
    config.license = "free";

    const [forcastStore, setForcastStore] = useState(null)


    useEffect(() => {
        const onGetCityData = async (inputValue) => {
            const data = await WeatherForcast(inputValue)
            setForcastStore(data.data.forecast.forecastday)
        };
        if (props.input) {
            onGetCityData(props.input);
            console.log(forcastStore)
            // 

        }
    }, [props.input]);




    function handleClick(e) {
        const btn = e.target;
        console.log(btn.id)
        const data = forcastStore[btn.id].hour
        // console.log(data)
        // const data = "This is some data from the child component";
        props.onData(data);
    }

    return (
        <div className='flex   overflow-x-auto md:flex-row '>

            {forcastStore && forcastStore.map((x, index) =>

                <div className="flex flex-col card card-side bg-base-100 shadow-xl  mx-3">
                    <div className="astro my-2">
                        <h1 className='px-3  py-1 font-bold'>Astro</h1>

                        <h1 className='px-3 py-0 font-bold mb-2'>{x.date.split("-").reverse().join("-")}</h1>
                        <p className='flex  text-sm justify-start m-3 p-0 mb-0'>
                            <span className='mx-1 flex'>
                            <FontAwesomeIcon icon={icon.faSun} width={20} height={20} className='mx-1' />
                            <FontAwesomeIcon icon={icon.faArrowUp} width={20} height={20}  /> 
                              {x.astro.sunrise}
                            </span>
                            <span className='mx-1 flex'>
                            <FontAwesomeIcon icon={icon.faMountainSun} width={20} height={20} className='mx-1' />  {x.astro.sunset}
                            </span>
                        </p>
                        <p className='flex  text-sm justify-start m-3 p-0 mb-0'>
                            <span className='mx-1 flex'>
                            <FontAwesomeIcon icon={icon.faMoon} width={20} height={20} className='mx-1' />  
                             {x.astro.moonrise}
                            </span>
                            <span className='mx-1 flex'>
                            <FontAwesomeIcon icon={icon.faMoon} width={20} height={20} className='ml-1' /> 
                            <FontAwesomeIcon icon={icon.faArrowDown} width={20} height={20} className='mx-0' /> 
                                {x.astro.moonset}
                            </span>
                        </p>
                        <p className='text-center text-sm p-0 m-4 flex '> <FontAwesomeIcon icon={icon.faCloudMoon} width={20} height={20} className='mx-1' />Phase:  {x.astro.moon_phase}</p>

                    </div>
                    <hr />
                    <div className="day my-2">
                        <h1 className='px-3  py-1 font-bold'>Day:</h1>
                        <div className='overflow-auto'>
                            <table className='text-center'>
                                <thead>
                                    <td className=''><FontAwesomeIcon icon={icon.faUmbrella} width={20} height={20} className='mx-5' /> </td>
                                    <td>Chance<FontAwesomeIcon icon={icon.faCloudRain} width={20} height={20} className='mx-5' /> </td>
                                    <td>Chance<FontAwesomeIcon icon={icon.faSnowflake} width={20} height={20} className='mx-5' /> </td>
                                    <td>Max<FontAwesomeIcon icon={icon.faTemperatureHigh} width={20} height={20} className='mx-5' /> </td>
                                    <td >Max <FontAwesomeIcon icon={icon.faWind} width={20} height={20} className='mx-5' /></td>
                                </thead>
                                <tr>
                                    <td>{x.day.condition.text} <img src={x.day.condition.icon} alt={x.day.condition.text} /></td>
                                    <td>{x.day.daily_chance_of_rain} %</td>
                                    <td>{x.day.daily_chance_of_snow} %</td>
                                    <td>{x.day.maxtemp_c} C</td>
                                    <td>{x.day.maxwind_kph} Kph</td>
                                </tr>


                            </table>
                            <p className='text-sm px-3'>
                                UV: {x.day.uv}
                            </p>
                        </div>
                        <div className="card-actions justify-end px-2">
                            <button id={index} className="btn btn-primary" onClick={handleClick}>Watch Hourly</button>
                        </div>
                    </div>







                </div>

            )}

        </div>
    )
}
