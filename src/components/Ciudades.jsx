import React from 'react';
import { useSelector } from 'react-redux';
import Ciudad from './Ciudad';

function Ciudades() {

  const ciudades = useSelector(state => state)

  return (
    <div>
        {ciudades[0]  ? 
            <Ciudad 
              nombre={ciudades[0].name}
              temperatura={ciudades[0].main.temp}
              temperaturaMax={ciudades[0].main.temp_max}
              temperaturaMin={ciudades[0].main.temp_min}
              sensacion={ciudades[0].main.feels_like}
              humedad={ciudades[0].main.humidity}
              viento={ciudades[0].wind.speed}
              icon={ciudades[0].weather[0].icon}
            />              

        : <h2>Ingrese una ciudad</h2>
        }
                        
          
    </div>
  )
}

export default Ciudades;