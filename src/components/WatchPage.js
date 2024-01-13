import React from 'react'
import { closeMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'  
import { useEffect } from 'react' 
import { useSearchParams } from 'react-router-dom'

export const WatchPage = () => {
    const [searchParams]=useSearchParams();
    console.log(searchParams.get('v'));
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])

  return (
    <div>
    <iframe
        width="1000"
        height="500" 
        src={"https://www.youtube.com/embed/" + searchParams.get('v')}
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen>
    </iframe>
    </div>
  )
}
