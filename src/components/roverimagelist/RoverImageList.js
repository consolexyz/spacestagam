import React from 'react'
import RoverCard from '../rovercard/RoverCard'
import './rover-image-list.css'
const  RoverImageList =(props) =>
    (
        <div className='roverlist'>
            {
                props.data.map( data => <RoverCard key={data.id}img_src ={data.img_src} full_name ={data.camera.full_name} earth_date ={data.earth_date}/>)
            }
        </div>
    )


export default RoverImageList
