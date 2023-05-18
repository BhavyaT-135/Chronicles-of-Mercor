import React, {useState, useEffect} from 'react'
import './keyboard.css'

const Keyboard = () => {

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 1) return 2;
        if (prevCounter === 2) return 3;
        return 1;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='keyboard'>
      <div className='keyboard__blocks'>
        <div className='keyboard__blocks-container'>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
          <div className='keyboard__blocks__block'></div>
        </div>
      </div>
      <div className='keyboard__top'>
        {counter === 1 && (<div className='keyboard__top-block'>
          <div className='keyboard__top-block__heading scale-up-top'>
            Tidy up and organize all blocks
          </div>
          <div className='keyboard__top-block__squaresShift slide-left'>
            <div className='keyboard__top-block__squareShift scale-up-center'>
              Shift
            </div>
            <div className='keyboard__top-block__square scale-up-center'>
              ⌘
            </div>
            <div className='keyboard__top-block__square scale-up-center'>
              T
            </div>
          </div>
        </div>)}
        {counter === 2 &&(<div className='keyboard__top-block'>
          <div className='keyboard__top-block__heading scale-up-top'>
            Select your blocks
          </div>
          <div className='keyboard__top-block__squares slide-left'>
            <div className='keyboard__top-block__square scale-up-center'>
              ⌘
            </div>
            <div className='keyboard__top-block__square scale-up-center'>
              1
            </div>
            <div className='keyboard__top-block__square scale-up-center'>
              2
            </div>
            <div className='keyboard__top-block__square scale-up-center'>
              3
            </div>
          </div>
        </div>)}
        {counter === 3 &&(<div className='keyboard__top-block'>
          <div className='keyboard__top-block__heading scale-up-top'>
            Create a new block
          </div>
          <div className='keyboard__top-block__square scale-up-center'>
            /
          </div>
        </div>)}
      </div>
      <div className='keyboard__bottom'>
        <div className='keyboard__bottom-heading'>
          A keyboard first experience.
        </div>
        <div className='keyboard__bottom-text'>
          Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!
        </div>
      </div>
    </div>
  )
}

export default Keyboard