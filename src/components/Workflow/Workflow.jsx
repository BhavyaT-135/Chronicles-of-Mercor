import React, { useState } from 'react'
import './workflow.css'
import Assistant from '../Assistant/Assistant'
import Bullets from '../Bullets/Bullets'
import Keyboard from '../Keyboard/Keyboard'

const Workflow = () => {

  const [counter, setCounter] = useState(1)

  return (
    <div className="workflow">
      <div className='workflow__left'>
        <div className='workflow__left-content'>
          <div className='workflow__left-heading'>✦ Workflow</div>
          <div className='workflow__left-title'>Create at the speed of thought.</div>
          <p className='workflow__left-text'>Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</p>
        </div>
      </div>
      <div className='workflow__right'>
        {counter === 1 && (<Keyboard />)}
        {counter === 2 && (<Bullets />)}
        {counter === 3 && (<Assistant />)}
        <div className='workflow__right-buttons'>
          <div className={`workflow__right-buttons__button ${counter === 1 ? 'button__gray' : ''}`} onClick={() => {if(counter!==1){setCounter(counter-1)}}}>←</div>
          <div className={`workflow__right-buttons__button ${counter === 3 ? 'button__gray' : ''}`}  onClick={() => {if(counter!==3){setCounter(counter+1)}}}>→</div>
        </div>
      </div>
    </div>
  )
}

export default Workflow