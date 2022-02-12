import React from 'react';
import styles from './ciudad.module.css';

function Ciudad(props) {
  return (
    <div className={styles.container}>  
        
        <div className={styles.widget}>
            <div className={styles.containersup}>
                <h2>{props.nombre}</h2>
                <h2>{Math.round(props.temperatura)} &#8451;</h2>
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon"/>         
            </div>

            <div className={styles.containerinf}>              
                <h4>Temperatura Máxima: {Math.round(props.temperaturaMax)} &#8451;</h4>            
                <h4>Temperatura Mínima: {Math.round(props.temperaturaMin)} &#8451;</h4>          
                <h4>Sensación Térmica: {Math.round(props.sensacion)} &#8451;</h4>          
                <h4>Humedad: {props.humedad} %</h4>                  
                <h4>Viento: {props.viento} km/h</h4>                  
            </div> 
        </div>

    </div>
  )
}

export default Ciudad