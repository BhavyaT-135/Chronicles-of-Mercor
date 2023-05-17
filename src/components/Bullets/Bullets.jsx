import React from 'react'
import './bullets.css'
import expenses from '../../assets/expenses.jpg'
import expenses2 from '../../assets/expenses2.jpg'
import food from '../../assets/food.jpg'
import beverages from '../../assets/beverages.jpg'
import travel from '../../assets/travel.jpg'

const Bullets = () => {
  return (
    <div className='bullets'>
      <div className='bullets__top'>
        {/* <img src={expenses} alt='expenses' className='bullets__top-expenses scale-up-center' /> */}
        {/* <img src={expenses2} alt='expenses' className='bullets__top-expenses scale-up-center' /> */}
        <div className='bullets__top-images scale-up-center'>
          <img src={food} alt='food' className='bullets__top-img' />
          <img src={beverages} alt='beverages' className='bullets__top-img' />
          <img src={travel} alt='travel' className='bullets__top-img' />
        </div>
      </div>
      <div className='bullets__bottom'>
        <div className='bullets__bottom-heading'>
          Bullets to visuals in a click.
        </div>
        <div className='bullets__bottom-text'>
          Transform any block to any other and try different options without any design hassle
        </div>
      </div>
    </div>
  )
}

export default Bullets