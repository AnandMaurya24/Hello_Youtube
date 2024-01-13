import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
    //Early return
    if(!isMenuOpen) return null;

  return (
    <div className='w-48 shadow-md p-5'>
        <ul>
         <Link to="/">
            <li>Home</li>
         </Link>
            <li>Live</li>
            <li>Music</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Art</li>
            <li>Fashion</li>
        </ul>
        <h1 className='font-bold pt-5'>Youtube Music</h1>
        <ul>
            <li>Shorts</li>
            <li>You</li>
        </ul>
        <h1 className='font-bold pt-5'>Downloads</h1>
    </div>
  )
}

export default Sidebar