import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);

  const toggleMobileDropdown = (section) => {
    setMobileDropdown(mobileDropdown === section ? null : section);
  };

  return (
    // <section className='text-black rounded-3xl left-4 top-5 bg-white bg-opacity-90 fixed shadow-gray-500 shadow-md px-4 py-6  md:px-8 w-[99%] z-50'>
    <section className="backdrop-blur-md bg-white/30 rounded-3xl left-0 lg:left-4 top-5 fixed shadow-md shadow-gray-500 px-4 py-6 md:px-8 w-[99%] z-50 text-black border border-white/20">
      <div className='flex justify-between px-3 lg:justify-around items-center'>
        {/* Logo */}
        <div className='flex items-center gap-3 cursor-pointer select-none'>
          {/* <div className='bg-violet-950 rounded-full p-3'>
            <img className='w-8 h-8' src={logo} alt="Logo" />
          </div> */}
          <h1
            style={{ letterSpacing: '5px' }}
            className='text-xl font-semibold font-cardo'
          >
            Bfinit India
          </h1>
        </div>

        {/* Mobile Toggle */}
        <div className='lg:hidden'>
          <motion.div
            initial={false}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className='cursor-pointer'
          >
            {menuOpen ? <X /> : <Menu />}
          </motion.div>
        </div>

        {/* Desktop Nav */}
        <ul style={{letterSpacing:"3px"}} className='hidden lg:flex gap-10 font-semibold font-nunito items-center'>
          <li className='hover:text-violet-600 transition'>Home</li>

          <li
            className='relative cursor-pointer'
            onMouseEnter={() => setDesktopDropdown('hosting')}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <div className='flex items-center gap-2'>
              Hosting Products <ChevronDown className={`transition-transform `} size={18} />
            </div>
            <AnimatePresence>
              {desktopDropdown === 'hosting' && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className='absolute bg-white border shadow-md mt-2 rounded-md p-2 space-y-1 z-10 text-black'
                >
                  <li className='px-4 py-2 hover:bg-gray-100'>Web Hosting</li>
                  <li className='px-4 py-2 hover:bg-gray-100'>VPS Hosting</li>
                  <li className='px-4 py-2 hover:bg-gray-100'>Dedicated Server</li>
                  <li className='px-4 py-2 hover:bg-gray-100'>Custom VPS</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <div>Our Technologies</div>

          <li
            className='relative cursor-pointer'
            onMouseEnter={() => setDesktopDropdown('tech')}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <div className='flex items-center gap-2'>
            Company<ChevronDown className={`transition-transform `} size={18} />
            </div>
            <AnimatePresence>
              {desktopDropdown === 'tech' && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className='absolute bg-white border shadow-md mt-2 rounded-md p-2 space-y-1 z-10 text-black'
                >
                  <li className='px-4 py-2 hover:bg-gray-100'>About Us</li>
                  <li className='px-4 py-2 hover:bg-gray-100'>Our Brands</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className='hover:text-violet-600 transition'>Career</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            // transition={{ type: 'spring', stiffness: 300 }}
            className='absolute left-0 right-0 top-full backdrop-blur-md bg-white/90 rounded-3xl shadow-xl lg:hidden mt- z-40 px-4 py-6 font-nunito font-semibold'
          >
            <div className='gap-5 flex flex-col items-center'>
              <div>Home</div>

              {/* Hosting Products Toggle */}
              <div
                onClick={() => toggleMobileDropdown('hosting')}
                className='cursor-pointer flex items-center gap-1'
              >
                Hosting Products <ChevronDown className={`transition-transform ${mobileDropdown === 'hosting' ? 'rotate-180' : ''}`} size={18} />
              </div>
              {mobileDropdown === 'hosting' && (
                <ul className='pl-4 flex flex-col cursor-pointer gap-3 text-black text-center bg-gray-100 p-4 rounded w-full'>
                  <li>Web Hosting</li>
                  <li>VPS Hosting</li>
                  <li>Dedicated Server</li>
                  <li>Custom VPS</li>
                </ul>
              )}

              <div>Our Technologies</div>

              {/* Company Toggle */}
              <div
                onClick={() => toggleMobileDropdown('tech')}
                className='cursor-pointer flex items-center gap-1'
              >
                Company <ChevronDown className={`transition-transform ${mobileDropdown === 'tech' ? 'rotate-180' : ''}`} size={18} />
              </div>
              {mobileDropdown === 'tech' && (
                <ul className='pl-4 flex flex-col cursor-pointer text-center text-black gap-3 bg-gray-100 p-4 rounded w-full'>
                  <li>About Us</li>
                  <li>Our Brands</li>
                </ul>
              )}

              <div>Career</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
