import React from 'react'
import './workflow.css'
import Assistant from '../Assistant/Assistant'
import Bullets from '../Bullets/Bullets'

const Workflow = () => {
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
        <Assistant />
        {/* <Bullets /> */}
      </div>
    </div>
  )
}

export default Workflow