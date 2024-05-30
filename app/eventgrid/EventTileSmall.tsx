import styled from 'styled-components'
import { Event } from '../constants'
import { useState, useRef, useEffect } from 'react'


const EventTileSmall = ({
  title,
  description,
  eventURL,
  location,
  date,
}: Event) => {
  const [showDescription, setShowDescription] = useState(false);
  

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div
    className='bg-csgrey font-space-mono hover:bg-csred border-2 border-white pt-6 pl-8 w-full h-full flex flex-col transition duration-500 ease-in-out'
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} 
  > 
  {showDescription ? 
        <p className='text-white flex items-center p-2'>{description}</p>:
         <>

    <h1 className='text-csred mb-2'>Upcoming event</h1>
    
    <div className='flex flex-col justify-between h-full'>
      
        <div className='flex flex-col justify-between h-full'>
<h1 
  style={{ maxHeight: '80px', overflow: 'hidden', textOverflow: 'ellipsis',}} className='text-2xl w-3/4'>
     {title.toUpperCase()} </h1>
          {/* <p className='mb-2 pt-4' >{date} <br></br> {location}</p> */}
          <p className='mb-2 pt-4' style={{maxWidth:'100px'}}>{date} <br></br> {location}</p>

        </div>
      
    </div>
    </>}
  </div>
  

  );
}

export default EventTileSmall