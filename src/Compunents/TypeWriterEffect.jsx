import React, { useEffect, useRef, useState } from 'react';


const TypeWriterEffect = ({ text }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = (event) => {
      if (event.animationName === 'animated-text') {
        setAnimationComplete(true);
      }
    };

    const element = elementRef.current;
    if (element) {
      element.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (element) {
        element.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`type-writer-effect ${animationComplete ? 'animation-complete' : ''}`}
    >
      {text}
    </div>
  );
};

export default TypeWriterEffect;
