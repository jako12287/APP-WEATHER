import { GET_NAME, DISPLAY } from './types'
import axios from 'axios'

const Key = '4f078c518ac82d0874ecd100509cafaa'

export const getName = (value)=>{
   return async(dispatch)=>{
      try {
         
         let get = await axios
         .get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${Key}&units=metric&lang=es`)
         let data = await get.data
         let res ={
            id:data.id,
          name:data.name,
          humidity:data.main.humidity,
          pressure:data.main.pressure,
          sunrise:data.sys.sunrise,
          sunset:data.sys.sunset,
          temp:data.main.temp,
          temp_max:data.main.temp_max,
          temp_min:data.main.temp_min,
          icon:data.weather.map((el)=>el.icon),
          description:data.weather.map((el)=>el.description),
          main:data.weather.map((el)=>el.main),
          winddeg:data.wind.deg,
          windspeed:data.wind.speed
          
         }
         console.log(data)
         dispatch({
            type:GET_NAME,
            payload: res
         })
      } catch (err) {
         console.log(err)
      }
   }
}

export const displayOn = (value)=>{
   return(dispatch)=>{
      dispatch({
         type:DISPLAY,
         payload:value,
      })

   }
}



