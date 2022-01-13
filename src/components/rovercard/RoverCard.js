import React from 'react';
import './rovercard.css';

const RoverCard =(props) => 
    (
        <div className='rovercard'>
             <img src={props.img_src} alt='null' className='rover-img'/>
            <p className=' rover-text'> Camera Name : {props.full_name}</p>
            <p className=' rover-text'>Earth Date : {props.earth_date}</p>
        </div>
    )

export default RoverCard
