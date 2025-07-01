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

export default function Home() {
  const TWELVE_HOURS = 12 * 60 * 60; // 12 hours in seconds

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
      <section className="relative font-plus py-28 lg:py-20 mx-5 md:mx-20 overflow-hidden">
        <div className='flex flex-col lg:flex-row lg:gap-20 w-full justify-center items-center'>
          <div className='lg:w-2/5 flex flex-col gap-2'>
            <h1 className='text-base'>Bfinit India Web Hosting</h1>
            <p className='text-5xl leading-tight font-semibold text-[#123455]'>
              Up to 70% Off Web hosting + Free gift pack
            </p>

            <div className='flex items-center gap-1 mt-2'>
              <span className='text-[#7E8AFF] text-3xl'><IoCheckmark /></span>
              <p>Website builder including E-commerce</p>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-[#7E8AFF] text-3xl'><IoCheckmark /></span>
              <p>Dedicated Hosting server</p>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-[#7E8AFF] text-3xl'><IoCheckmark /></span>
              <p>24/7 Support</p>
            </div>

            <div className='flex gap-5 items-center'>
              <p className='line-through'>₹599 / Mon</p>
              <p className='font-semibold text-[#7E8AFF]'>
                <span className='text-3xl font-bold text-[#7E8AFF]'>₹429</span> / Mon
              </p>
            </div>

            <div className='flex flex-col md:flex-row gap-5 mt-5'>
              <button className='px-5 py-2 rounded-md bg-[#7E8AFF] text-white'>Start now</button>
              <button className='px-5 py-2 rounded-md border border-black'>Contact us</button>
            </div>

            <div className='flex items-center gap-2 mt-5'>
              <p>Offer ends in</p>
              <p className='text-[#7E8AFF] font-semibold'>{formatTime(timers)}</p>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <img className='md:p-10 rounded-lg' src={hero1} alt="Hero" />
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <TrustedSolution />
      <HomeService />
      <CreateWeb />
      <HomeSupport />
      <Blog />
    </section>
  );
}
