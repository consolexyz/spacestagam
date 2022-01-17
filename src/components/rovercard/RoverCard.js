import React, {useState} from 'react';
import './rovercard.css';
  import cn from 'classnames';
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faHeart } from "@fortawesome/free-solid-svg-icons";

const RoverCard =(props) => {

   const Heart  = <FontAwesomeIcon icon={faHeart} className='heart-icon' />
   const [like, setlike] = useState(null)
   const [clicked, setClicked] = useState(false);



  return  (
        <div className='rovercard'>
             <img src={props.img_src} alt='null' className='rover-img'/>
             <div className='content'>
                 <div className='text'>
                 <p className=' rover-text'><span className='rover-title'>Camera Name:</span>{props.full_name}</p>
                 <p className=' rover-text'> <span className='rover-title'>Date Captured:</span> {props.earth_date}</p>
                 </div>
                 <div className='like-container'>
                     <button
                      onClick={()=> {
                          setlike(!like)
                        console.log('clicked')
                      }
                    }
                      onAnimationEnd={()=>setClicked(false)}
                       className={cn('like-button-wrapper',{like})}
                     >
                         <div className='like-button'>
                             {Heart}
                             <span>Like</span>
                             <span className={cn("suffix", { like })}>d</span>
                         </div>
                     </button>
                 </div>
            </div>
        </div>
    )

}
export default RoverCard
