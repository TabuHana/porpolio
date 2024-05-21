'use client';

import { motion } from 'framer-motion';
import { Chrome, Figma, Instagram, Slack, Twitch } from 'lucide-react';

// Source: https://medium.com/@caden0002/implementing-an-infinite-slider-in-react-with-tailwind-css-and-framer-motion-69173adb31a3

const slides = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }];
const logos = [
  { icon: <Figma /> },
  { icon: <Chrome /> },
  { icon: <Slack /> },
  { icon: <Twitch /> },
  { icon: <Instagram /> },
];

export const ToolSlider = () => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...logos, ...logos];

  return (
    <div className='relative w-full pt-10 overflow-hidden'>
      <div className='absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-background before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-background after:to-transparent after:filter after:blur-3'></div>
      {/* Wrapping div for seamless looping */}
      <motion.div
        className='flex'
        animate={{
          x: ['-100%', '0%'],
          transition: {
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className='flex-shrink-0'
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className='flex flex-col items-center justify-center h-full text-6xl'>{slide.icon}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const AAAA = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className='relative h-full overflow-hidden py-12 bg-white mx-auto'
      style={{ width: '50%' }}
    >
      <div className='absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3'></div>

      <motion.div
        className='flex'
        animate={{
          x: ['0%', '-100%'],
          transition: {
            ease: 'linear',
            duration: 5,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className='flex-shrink-0'
            style={{ width: `${100 / logos.length}%` }}
          >
            <div className='flex items-center justify-center h-full'>{logo.icon}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
