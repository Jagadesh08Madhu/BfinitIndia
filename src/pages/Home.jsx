import React, { useEffect, useState } from 'react';
import { IoCheckmark } from "react-icons/io5";
import { motion } from 'framer-motion';
import hero1 from '../assets/hero.webp';
import HomeService from '../components/Homecomponents/HomeService';
import TrustedSolution from '../components/Homecomponents/TrustedSolution';
import CursorFollowButton from '../components/CursorFollowButton';
import HomeSupport from '../components/Homecomponents/HomeSupport';
import CreateWeb from '../components/Homecomponents/CreateWeb';
import Blog from '../components/Homecomponents/Blog';
import Distributers from '../components/Homecomponents/Distributers';
import FreeGifts from '../components/Homecomponents/FreeGifts';
import HostingFAQ from '../components/Homecomponents/HostingFAQ';

export default function Home() {
  const TWELVE_HOURS = 12 * 60 * 60;

  const getInitialTimer = () => {
    const saved = localStorage.getItem('timers');
    return saved ? parseInt(saved, 10) : TWELVE_HOURS;
  };

  const [timers, setTimer] = useState(getInitialTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        const next = prev <= 0 ? TWELVE_HOURS : prev - 1;
        localStorage.setItem('timers', next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <section className="relative font-plus overflow-hidden">
      <CursorFollowButton />
      <section className="relative font-plus pt-28 lg:py-20 mx-5 md:mx-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col lg:flex-row lg:gap-20 w-full justify-center items-center'
        >
          {/* Left Content */}
          <motion.div
            className='lg:w-2/5 flex flex-col gap-2 order-2 lg:order-1'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 className='text-base'>Bfinit India Web Hosting</motion.h1>

            <motion.p
              className='text-5xl leading-tight font-semibold text-[#123455]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Up to 70% Off Web hosting + Free gift pack
            </motion.p>

            {[ 
              "Website builder including E-commerce", 
              "Dedicated Hosting server", 
              "24/7 Support" 
            ].map((item, index) => (
              <motion.div
                key={index}
                className='flex items-center gap-1 mt-2'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <span className='text-[#5667ff] text-3xl'><IoCheckmark /></span>
                <p>{item}</p>
              </motion.div>
            ))}

            <motion.div
              className='flex gap-5 items-center mt-2'
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className='line-through'>₹599 / Mon</p>
              <p className='font-semibold text-[#5667ff]'>
                <span className='text-3xl font-bold text-[#5667ff]'>₹429</span> / Mon
              </p>
            </motion.div>

            <motion.div
              className='flex flex-col md:flex-row gap-5 mt-5'
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <button className='px-5 py-2 rounded-md bg-[#5667ff] text-white'>Start now</button>
              <button className='px-5 py-2 rounded-md border border-black'>Contact us</button>
            </motion.div>

            <motion.div
              className='flex items-center gap-2 mt-5'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <p>Offer ends in</p>
              <p className='text-[#5667ff] font-semibold'>{formatTime(timers)}</p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className='lg:w-1/2 order-1 lg:order-2'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img className='md:p-10 rounded-lg' src={hero1} alt="Hero" />
          </motion.div>
        </motion.div>
      </section>

      {/* Additional Sections with optional fadeIn animation */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <TrustedSolution />
        <HomeService />
        <CreateWeb />
        <FreeGifts />
        <Distributers />
        <HomeSupport />
        <HostingFAQ />
        <Blog />
      </motion.div>
    </section>
  );
}
