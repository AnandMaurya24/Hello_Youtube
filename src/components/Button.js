import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex'>
        <button className="m-2 p-2 bg-gray-100 rounded-lg">{name}</button>
    </div>
  )
}

export default Button