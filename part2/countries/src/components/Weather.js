import {WeatherInfo} from './WeatherInfo'
import { useState, useEffect } from 'react'

export const Weather = ({location}) => {
    const [weather, setWeather] = useState({})
    const [hasCondition, setHasCondition] = useState(false)
  
    const key = process.env.REACT_APP_WEATHER_API_KEY || null;
  
  
    const axios = require('axios')
    const params = {
      access_key: key,
      query: location
    }
  
    const updateCondition = () => {
      if (!key) return;
  
      let source = axios.CancelToken.source();
  
      axios.get('http://api.weatherstack.com/current', {params}, source.CancelToken)
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          throw error;
        }
      })
      .then(response => {
        if (response.statusText === "OK") {
          setWeather(response.data);
          setHasCondition(true);
        }
      }).catch(error => {
        console.log(error.config)
      }); 
    } 
  
    useEffect(updateCondition, []);
  
    return(
      <div>
        {hasCondition && <WeatherInfo condition={weather} />}
      </div>
    )
  }