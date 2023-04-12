import React, { useState, useEffect } from 'react';
import { debounce } from 'debounce';
import { WeatherApi2 } from '../services/Service';
import Result from './Result';
import Forcast from './Forcast';

import { WeatherApi } from '../services/Service';
import Hour from './Hour';

function AsyncPage(props) {
    const [loading, setLoading] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    const [location, setLocation] = useState(null)
    const [current, setCurrent] = useState(null)
    const [City, setCity] = useState(null)
    const [lenLog, setLenLog] = useState(null)
    const [InputValue, setInputValue] = useState(null)


    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setTimeout(() => {

            setIsFocused(false);
        }, 350);
    };
    const readData = async (e) => {
        handleBlur()

        const inputValue = e.target.innerText;
        setInputValue(inputValue)
        const data2 = await WeatherApi(inputValue || lenLog)
        setLocation(data2.data.location)
        setCurrent(data2.data.current)
        document.getElementsByTagName('input')[0].value = inputValue;
    }
    const clickHandler = debounce((e) => {
        console.log(e.target.value);
        onGetCityData(e.target.value)

    }, 1000);
    const onGetCityData = async (inputValue) => {
        setLoading(true);
        const data = await WeatherApi2(inputValue || lenLog)
        setCity(data.data)
        // console.log(data,"data2=>",data2)

        setLoading(false);
    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const len = position.coords.latitude;
            const log = position.coords.longitude;
            setLenLog(len + "," + log)
        })
    }, [])





    const [dataFromForcast, setDataFromForcast] = useState("");

    function handleDataFromChild(data) {
        setDataFromForcast(data);
    }


    return (
        <div className='w-full flex flex-col justify-center align-middle items-center'>
            <input
                type="text"
                onChange={clickHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Search..."
                className="input input-bordered input-success w-full max-w-xs my-2  "
            />
            {isFocused && (
                <div id='drop' className='absolute top-44 z-50' style={{ padding: '10px' }}>
                    {loading && <p>Loading...</p>}
                    {loading || City && (
                        <ul tabIndex={0} className="dropdown-content  menu p-2 shadow bg-red-950 rounded-box w-52">
                            {City.map((x) => (
                                <li key={x.id} onClick={readData}>
                                    <a >
                                        {x.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            )}

            <Result Location={location} Current={current} />
            <div className=' w-full flex justify-center '>

                <Forcast input={InputValue} onData={handleDataFromChild} />

            </div>
            <div className='w-full px-5'>
                {/* <h1 className='p-5 m-2 text-center text-xl text-neutral-300'>Hourly Data</h1> */}
                 <Hour data={dataFromForcast} />
            </div>
            <div>
                
                
            </div>
        </div>
    );
}

export default AsyncPage;
