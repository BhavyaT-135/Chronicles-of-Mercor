import React, { useEffect, useRef } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import './content.css';

const Content = () => {
  const contentRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    const handleScroll = () => {
      const contentText = contentRef.current.querySelector('.content-text');
      const words = contentText.textContent.split(' ');
      const colorIndex = Math.floor(scrollYProgress.get() * colors.length* 20 );

      contentText.innerHTML = words
        .map((word, index) => {
          const color = index <= colorIndex ? '#FFFFFF' : '#808080';
          return `<span style="color:${color}">${word}</span>`;
        })
        .join(' ');
    };

    scrollYProgress.onChange(handleScroll);

    return () => {
      scrollYProgress.clearListeners();
    };
  }, []);

  const colors = ['#808080', '#A0A0A0', '#C0C0C0', '#E0E0E0', '#FFFFFF'];

  return (
    <div className="content" ref={contentRef}>
      <motion.p className="content-text">
        In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion
        out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks
        and see the magic unfold.
      </motion.p>
    </div>
  );
};

export default Content;
