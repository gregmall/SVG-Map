import React from 'react'
import { useState, useEffect } from 'react';
import numbers from '../../assets/numbers'
import MapImage from './MapImage';
import map from '../../assets/map.svg'

const  Map= ()=> {

  const values = []
  const [selected, setSelected] = useState();
  const localImage ={
    

  }




  
  return (
    <div className="map-page">
        <div className ="map">
            {MapImage()}
        </div>
        <div className ="numbers-list"> 
      
        </div>
    </div>
  )
}
export default Map;
