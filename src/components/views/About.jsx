import React from "react";
import styles from '../elementsCSS/About.module.css'
import { Link } from "react-router-dom"; 

export const About = ()=>{
    return(
        <div className={styles.container}>
             <Link className={styles.link} to='/home'><button className={styles.btn}>Back</button></Link> 
            
             <section className={styles.section}>
                 <p className={styles.txt}>En el desarrollo de esta app, se utilizó React y Redux.
                 La informacion es proporcionada por la API Openweathermap
                 </p>
             </section>
            
        </div>
    )
}