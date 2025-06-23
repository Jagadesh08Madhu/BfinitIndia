import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import hero from '../assets/hero.png';
import HomeService from '../components/Homecomponents/HomeService';
import TrustedSolution from '../components/Homecomponents/TrustedSolution';
import CursorFollowButton from '../components/CursorFollowButton';
import HomeSupport from '../components/Homecomponents/HomeSupport';
import homebg from '../assets/homebg.png';
import bg2 from '../assets/bg2.png';
import heroside from '../assets/sidehero.png'
import heroside2 from '../assets/sidehero2.png'
import heroside3 from '../assets/sidehero3.png'
import CreateWeb from '../components/Homecomponents/CreateWeb';
import Blog from '../components/Homecomponents/Blog';

export default function Home() {
  return (
    <section className="relative font-plus py-20 overflow-hidden">
      <CursorFollowButton />

      {/* Hero Section with Background */}
      <motion.div
        style={{
          backgroundImage: `url(${homebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
        className="relative flex flex-col lg:flex-col items-center justify-between px-5 gap-5 lg:px-10 py-10 lg:py-20 h-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bg2}
          alt="Grid Overlay"
          className="absolute  pointer-events-none z-10"
          draggable="false"
        />

        <div className="z-20 flex flex-col lg:h-[70vh] justify-center gap-10 max-w-5xl order-2 lg:order-1">
          <motion.h1
            className="md:text-6xl text-4xl font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{lineHeight:"90px"}}
          >
            Your perfect <span className="text-[#000C1D]">hosting solutions </span>
            for reliable, secure, and affordable performance.
          </motion.h1>

          <motion.p
            className="text-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Get domains, web hosting, and WordPress tools, all in one place.
            Build your website with ease and save big this Black Friday, only
            with Cloudz Domain Hosting Solution.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col justify-center md:flex-row gap-5">
            <motion.button
              className="bg-black group text-white px-6 py-2 flex items-center justify-center gap-3 rounded-xl font-semibold transition-all ease-in-out duration-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Get Started
              <span className="text-lg bg-white text-black rounded-full p-2 transition-all duration-500 ease-in-out transform group-hover:translate-x-2">
                <IoIosArrowForward />
              </span>
            </motion.button>
            <motion.button
              className="bg-transparent border border-black px-6 py-2 rounded-lg font-semibold transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
            className="relative lg:w-1/2 order-1 lg:order-2 z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <img
              src={hero}
              alt="Hero"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              className="w-full rounded-2xl"
            />

            {/* heroside animation */}
            <motion.div
              className="-bottom-20 left-48 lg:flex hidden rounded-2xl w-[200px] absolute"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <img className="rounded-2xl shadow-lg" src={heroside} alt="" />
            </motion.div>

            {/* heroside2 animation */}
            <motion.div
              className="bottom-32 -right-36 lg:flex hidden rounded-2xl w-[200px] absolute"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <img className="rounded-2xl shadow-lg" src={heroside2} alt="" />
            </motion.div>

            {/* heroside3 animation */}
            <motion.div
              className="bottom-48 -left-40 lg:flex hidden rounded-2xl w-[200px] absolute"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <img className="rounded-2xl shadow-lg" src={heroside3} alt="" />
            </motion.div>
          </motion.div>

        
      </motion.div>

      {/* Additional Sections */}
      <TrustedSolution />
      <HomeService />
      <CreateWeb/>
      <HomeSupport />
      <Blog/>
    </section>
  );
}
