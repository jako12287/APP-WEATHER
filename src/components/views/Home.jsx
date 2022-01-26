import React, { useEffect, useState } from "react";
import styles from '../elementsCSS/Home.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getName} from "../../weather_Store/action";
import { CardCity } from "../elements/cardCity";
import { Details } from "../elements/details";


export const Home = ()=>{
   
   const dispatch = useDispatch()
   const $city = useSelector((state)=>state.city)
   
   const [search, setSearch] = useState({city:''})
   
   const handleOnchage = (e)=>{
       setSearch({
           city: e.target.value
        })
    }
    useEffect(()=>{
        dispatch(getName('bogota'))
    },[dispatch])
    
   
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(getName(search.city))
        setSearch({
            city:''
        })
        
        
    }
 

    return(
        <div className={styles.container}>

           <Link className={styles.link} to='/about'><button className={styles.about}>About</button></Link> 
            <form>
            <input type='text' name='search' placeholder=' 🔍 Ingrese una ciudad' value={search.city} onChange={handleOnchage}/>
            <input type='submit' value='Buscar' onClick={handleSubmit}/>
            </form>
           
            <div>
                {$city.map((el)=><CardCity key={el.id}
                                           id={el.id}
                                           name={el.name}  
                                           temp={Math.round(el.temp)} 
                                           description={el.description}
                                           icon={el.icon}
                />)}
                
            </div>
            <Details/>
        </div>
    )
}