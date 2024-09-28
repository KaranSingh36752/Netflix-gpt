import React from 'react'
import { IMG_URL_POSTER } from '../utilis/constant'

const MovieCard = ({moviePoster}) => {
  if(!moviePoster) return;
  return (
    <div className='w-40  '>
      <img className='w-full h-full object-cover rounded-lg' alt="MOvie card" src={IMG_URL_POSTER+moviePoster}/>
    </div>
  )
}

export default MovieCard