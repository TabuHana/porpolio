'use client';

import { motion } from 'framer-motion';
import { FaReact, FaFigma } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiTypescript, SiPostgresql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

// Source: https://medium.com/@caden0002/implementing-an-infinite-slider-in-react-with-tailwind-css-and-framer-motion-69173adb31a3

const logos = [
  { icon: <RiNextjsFill /> },
  { icon: <FaReact /> },
  { icon: <SiExpress /> },
  { icon: <SiTypescript /> },
  { icon: <RiTailwindCssFill /> },
  { icon: <FaFigma /> },
  { icon: <GrMysql /> },
  { icon: <SiPostgresql /> },
];

export const LogoSlider = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className='relative w-full overflow-hidden'>
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
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className='flex-shrink-0'
            style={{ width: `${100 / logos.length}%` }}
          >
            <div className='flex flex-col items-center justify-center h-full text-3xl'>{logo.icon}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
