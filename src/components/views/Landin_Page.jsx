import React from 'react'
import styles from '../elementsCSS/Landin_Page.module.css'
import { Link } from 'react-router-dom'


export const Landing = ()=>{
   
    return(
        <div className={styles.container}>
            <div className={styles.subcontainer}>

                    <h4 className={styles.title}>WEATHER APP</h4>
                <div className={styles.logos}>
                    <div className={styles.icon1}></div>
                    <div className={styles.icon2}></div>
                    <div className={styles.icon3}></div>
                </div>    

                <div className={styles.conten}>

                    {/* <p>Este es un web app donde podras encontar la informacion 
                    del clima de la cidudad que eligas</p> */}
                    <Link className={styles.link} to='/home'><button className={styles.btn}>Empezar</button></Link>    
               
                </div>
            </div>
        </div>
    )
}