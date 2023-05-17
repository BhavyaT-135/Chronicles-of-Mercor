import React from 'react'
import './assistant.css'
import assistant from '../../assets/assistant.jpg'

const Assistant = () => {
  return (
    <div className='assistant'>
      <div className='assistant__top'>
        <img src={assistant} alt='assistant' />
      </div>
      <div className='assistant__bottom'>
        <div className='assistant__bottom-heading'>
          A powerful assistant just a click away
        </div>
        <div className='assistant__bottom-text'>
          Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard
        </div>
      </div>
    </div>
  )
}

export default Assistant