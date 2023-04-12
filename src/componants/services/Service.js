import axios from "axios";

const WeatherApi2= async(searchValue)=>{

  

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/search.json',
    params: {q: searchValue},
    headers: {
      'X-RapidAPI-Key': '10081eec61mshd8f8fbc9b55b46ap10d99cjsn0965db068de5',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  

const data=await axios.request(options);

return data

}
const WeatherApi= async(searchValue)=>{

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: searchValue || 'jaipur'},
  headers: {
    'X-RapidAPI-Key': '10081eec61mshd8f8fbc9b55b46ap10d99cjsn0965db068de5',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const data=await axios.request(options);

return data

}

const WeatherForcast=async(val)=>{

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {q: val||'London', days: '3'},
  headers: {
    'X-RapidAPI-Key': '10081eec61mshd8f8fbc9b55b46ap10d99cjsn0965db068de5',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const data=await axios.request(options);

return data

}

export { WeatherApi,WeatherForcast,WeatherApi2 }