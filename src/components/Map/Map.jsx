import React from 'react'
import './Map.css'
import MapImage from './MapImage';



const  Map= ()=> {

  return (
    <div  >

        <div className ="map">
            {MapImage()}
        </div>
        
    </div>
  )
}
export default Map;
