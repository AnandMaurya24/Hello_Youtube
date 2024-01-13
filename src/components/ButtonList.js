import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Music"/>
        <Button name="Cricket"/>
        <Button name="Computer Science"/>
        <Button name="News"/>
    </div>
  )
}

export default ButtonList