import React, {useState, useEffect} from 'react'
import './bullets.css'
import expenses from '../../assets/expenses.jpg'
import expenses2 from '../../assets/expenses2.jpg'
import food from '../../assets/food.jpg'
import beverages from '../../assets/beverages.jpg'
import travel from '../../assets/travel.jpg'
import rotate from '../../assets/rotate.jpg'
import cursor from '../../assets/cursor.png'

const Bullets = () => {

  const [counter, setCounter] = useState(1);
  const [rotateCounter, setRotateCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 1) return 2;
        if (prevCounter === 2) return 3;
        return 1;
      });
      setRotateCounter((prevRotateCounter) => {
        if (prevRotateCounter === 1) return 2;
        return 1;
      })
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='bullets'>
      <div className='bullets__top'>
        {counter === 1 && (<div className='bullets__top-images scale-up-center'>
          <img src={food} alt='food' className='bullets__top-img' />
          <img src={beverages} alt='beverages' className='bullets__top-img' />
          <img src={travel} alt='travel' className='bullets__top-img' />
        </div>)}
        {counter === 2 &&(<img src={expenses} alt='expenses' className='bullets__top-expenses scale-up-center' />)}
        {counter === 3 && (<img src={expenses2} alt='expenses' className='bullets__top-expenses scale-up-center' />)}
        <div className='bullets__top-rotateDiv'>
          <div>
            {rotateCounter === 1 && (<img src={rotate} alt='rotate' className='bullets__top-rotate rotate-scale-down' />)}
            {rotateCounter === 2 && (<img src={rotate} alt='rotate' className='bullets__top-rotate rotate-scale-down' />)}
          </div>
          <div>
            {rotateCounter === 1 && (<img src={cursor} alt='rotate' className='bullets__top-jessica scale-up-center' />)}
            {rotateCounter === 2 && (<img src={cursor} alt='rotate' className='bullets__top-jessica scale-up-center' />)}
          </div>
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