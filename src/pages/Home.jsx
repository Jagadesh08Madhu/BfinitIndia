import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import hero from '../assets/hero.png';
import HomeService from '../components/HomeService';
import TrustedSolution from '../components/TrustedSolution';
import CursorFollowButton from '../components/CursorFollowButton';
import HomeSupport from '../components/HomeSupport';

export default function Home() {
  return (
    <section className="relative font-dmsans overflow-hidden">
      
      <CursorFollowButton/>
      {/* Foreground Content */}
      <motion.div 
        className="flex flex-col lg:flex-col items-center justify-between bg-[#010D26] text-white px-5 gap-5 lg:px-10 py-20 h-full" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col justify-center gap-5 max-w-5xl order-2 lg:order-1">
          <motion.h1 
            className="text-4xl font-bold text-center" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            Your perfect <span className='text-[#0671EC] '> hosting solutions </span>
            for reliable, secure, and affordable performance.
          </motion.h1>

          {/* {["Free Domain & Site Migration",
            "Supports WordPress and All CMS",
            "Fully Managed Web Hosting",
            "24/7 Expert Customer Support"].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-2" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.7 + index * 0.2, duration: 1 }}
            >
              <span className='text-xl'>
                <IoMdCheckmark className="text-[#5841EA]" />
              </span>
              <p className="text-lg">{item}</p>
            </motion.div>
          ))} */}

          <motion.p 
            className="text-lg text-center" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.5, duration: 1 }}
          >
            Get domains, web hosting, and WordPress tools, all in one place. Build your website with ease and save big this Black Friday, only with Cloudz Domain Hosting Solution.
          </motion.p>

          <div className="flex flex-col justify-center md:flex-row gap-5">
            <motion.button 
              className="bg-white  group text-black px-6 py-2 flex items-center justify-center gap-3 rounded-xl font-semibold transition-all ease-in-out duration-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} 
              transition={{ delay: 2, duration: 1 }}
            >
              Get Started
              <span className="text-lg bg-[#010D26] text-white  rounded-full p-2 transition-all duration-500 ease-in-out transform group-hover:translate-x-2">
                <IoIosArrowForward />
              </span>
            </motion.button>
            <motion.button 
              className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 2.2, duration: 1 }}
            >
              View All Plans
            </motion.button>
          </div>
        </div>

        <motion.div 
          className="lg:w-1/2 order-1 lg:order-2" 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 1, duration: 1 }}
        >
          <img 
            src={hero} 
            alt="Hero" 
            draggable='false' 
            oncontextmenu="return false;" 
            className="w-full rounded-2xl"
          />
        </motion.div>
      </motion.div>

      
      <TrustedSolution/>
      <HomeService/>
      <HomeSupport/>
    </section>
  );
}
