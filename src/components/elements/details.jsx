import React from "react";
import styles from '../elementsCSS/details.module.css'
import { useSelector, useDispatch } from "react-redux";
import { displayOn } from "../../weather_Store/action";

export const Details = ()=>{
    let dispatch = useDispatch()

    let $city = useSelector((state)=>state.city)
    let $display = useSelector((state)=>state.display)

    let handleClick = (e)=>{
        e.preventDefault()
       
        dispatch(displayOn(false))
    }
    let on = ($display)?styles.contain:styles.none
   

    return(
        <div className={on}>
          {$city.map((el)=><div className={styles.subcontain} key={el.id}>
                                <div className={styles.title}>
                                    <p>En este momento</p> 
                                    <p>{el.description}</p>
                                    </div>
                                
                                <div className={styles.humidity}>
                                    <h4>Humedad </h4> 
                                    <h5>{el.humidity}%</h5>
                                </div>

                                <div className={styles.pressure}>
                                    <h4>Presion</h4>
                                    <h5>{el.pressure}mbar</h5>
                                </div>

                                <div className={styles.tempmin}>
                                        <h4>Temperatura</h4>
                                        <h4>minima</h4>  
                                        <h5>{Math.round(el.temp_min)}°C</h5>
                                </div>

                                <div className={styles.tempmax}>
                                        <h4>Temperatura</h4> 
                                        <h4>maxima</h4>
                                        <h5>{Math.round(el.temp_max)}°C</h5>
                                </div>

                                <div className={styles.wind}>
                                        <h4>Viento</h4>
                                        <h5>{el.winddeg}° {(el.windspeed*1000*60)/10000} Km/h</h5>
             <button className={styles.arow} onClick={handleClick}>🢁</button>
                                </div>

                           </div>
        
        )}
        </div>
    )
}