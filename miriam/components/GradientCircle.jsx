"use client"
import React, { useEffect, useRef } from 'react';
import { Gradient } from '../app/Gradient';

const GradientCircle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');

    return () => {
      gradient.disconnect(); // Clean up to avoid memory leaks
    };
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      ref={canvasRef}
      data-transition-in
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default GradientCircle;
