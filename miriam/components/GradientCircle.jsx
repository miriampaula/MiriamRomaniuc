// components/GradientCircle.js
'use client';

import React, { useEffect, useRef } from 'react';

const GradientCircle = React.memo(() => {
  const canvasRef = useRef(null);

  useEffect(() => {
    import('../app/Gradient').then(({ Gradient }) => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = canvas.offsetWidth / 2; // Reduce resolution by half
        canvas.height = canvas.offsetHeight / 2;
      }

      const gradient = new Gradient();
      gradient.initGradient('#gradient-canvas');

      return () => {
        gradient.disconnect();
      };
    });
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      ref={canvasRef}
      data-transition-in
      className="absolute inset-0 w-full h-full"
    />
  );
});

export default GradientCircle;
