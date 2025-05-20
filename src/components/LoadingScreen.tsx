import React, { useEffect, useState } from 'react';
import logo from '/logo.png'; // ensure logo.png is in the public folder or use "/logo.png" for static

const LoadingScreen = () => {
  const [animationPhase, setAnimationPhase] = useState<'scale' | 'right' | 'left' | 'done'>('scale');

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimationPhase('right'), 2000), // after scale pause
      setTimeout(() => setAnimationPhase('left'), 3500),  // after right move pause
      setTimeout(() => setAnimationPhase('done'), 5000),  // after left move
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  if (animationPhase === 'done') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative flex items-center justify-center overflow-hidden w-[300px] h-[100px]">
        <div
          className={`
            absolute transition-transform duration-[1500ms] ease-in-out
            ${animationPhase === 'scale' ? 'scale-[4] translate-x-0' : ''}
            ${animationPhase === 'right' ? 'translate-x-20 scale-100' : ''}
            ${animationPhase === 'left' ? '-translate-x-20 scale-100' : ''}
          `}
          style={{
            zIndex: 10,
            transitionProperty: 'transform',
          }}
        >
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        {/* Text is static behind the logo */}
        <div
          className="text-4xl text-gray-700"
          style={{
            fontFamily: '"Kirang Haerang", cursive',
            whiteSpace: 'nowrap',
            zIndex: 0,
          }}
        >
          Eyes Of T
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
