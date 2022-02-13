import React from "react";
import styles from '../elementsCSS/Cardcity.module.css'
import { useDispatch } from "react-redux";
import { displayOn } from "../../weather_Store/action";

export const CardCity = ({name, id, temp, description, icon})=>{
    let dispatch = useDispatch()
   

    let handleClick = (e)=>{
        e.preventDefault()
       
        dispatch(displayOn(true))
    }
    return(
        <div className={styles.container}>
           <h3 className={styles.name}>{name}</h3>

           <div className={styles.Stemp}>
                <p className={styles.temp}>{temp} </p>
                <p>°C</p>
           </div>
           <div className={styles.contenimg}>
           <img className={styles.img} src={`http://openweathermap.org/img/wn/${icon}@4x.png`}/>

           </div>
           <p className={styles.descrip}>{description}</p>
           <button className={styles.btn} onClick={handleClick}>detalles</button>
       
        </div>
    )
}