import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", to: "/" },
    {
      label: "Hosting Products",
      dropdown: [
        { label: "Web Hosting", to: "/web-hosting" },
        { label: "VPS Hosting", to: "/vps-hosting" },
        { label: "Dedicated Server", to: "/dedicated-server" },
        { label: "Custom VPS", to: "/custom-vps" },
        { label: "Starter Webpack", to: "/starter-web-pack" },
        { label: "Distributors Affiliation", to: "/distributor" },
        { label: "Ecommerce Pack", to: "/bfinit-ecomerce-platform" },
        
      ],
    },
    { 
      label:"Hardwares", to:"/hardwares"
    },
    { label: "Our Technologies", to: "/our-technologies" },
    {
      label: "Company",
      dropdown: [
        { label: "About Us", to: "/about" },
        { label: "Our Brands", to: "/our-brands" },
        { label: "Career", to: "/career" }
      ],
    },
    
  ];

  const toggleMobileDropdown = (section) => {
    setMobileDropdown(mobileDropdown === section ? null : section);
  };

  return (
    <section className="text-black rounded-b-3xl bg-white bg-opacity-90 fixed shadow-gray-500 shadow-md px-4 py-6 w-full z-50">
      <div className="flex justify-between px-3 lg:justify-around items-center">
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <h1 style={{ letterSpacing: '5px' }} className="text-xl font-semibold font-cardo">
            Bfinit India
          </h1>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <motion.div
            initial={false}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            {menuOpen ? <X /> : <Menu />}
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <ul
          style={{ letterSpacing: "3px" }}
          className="hidden cursor-pointer lg:flex gap-10 font-semibold font-nunito items-center"
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => link.dropdown && setDesktopDropdown(link.label)}
              onMouseLeave={() => link.dropdown && setDesktopDropdown(null)}
            >
              {link.dropdown ? (
                <div className="flex items-center gap-2">
                  {link.label} <ChevronDown size={18} />
                </div>
              ) : (
                <div
                  onClick={() => navigate(link.to)}
                  className="hover:text-violet-600 transition"
                >
                  {link.label}
                </div>
              )}

              <AnimatePresence>
                {desktopDropdown === link.label && link.dropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bg-white lg:w-[300px] border -left-5 shadow-md mt-2 rounded-md p-2 space-y-1 z-10 text-black"
                  >
                    {link.dropdown.map((sublink, i) => (
                      <li
                        key={i}
                        onClick={() => navigate(sublink.to)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {sublink.label}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <div className="lg:flex hidden">
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#5667ff] text-white px-5 py-2 rounded-lg"
          >
            Contact
          </button>
        </div>
      </div>

      {/* 🔽 Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute left-0 right-0 overflow-y-scroll top-20 backdrop-blur-md bg-white/90 rounded-3xl shadow-xl lg:hidden z-40 px-4 py-6 font-nunito font-semibold"
          >
            <div className="gap-5 flex flex-col items-center">
              {navLinks.map((link, index) => (
                <div key={index} className="w-full text-center">
                  {link.dropdown ? (
                    <>
                      <div
                        onClick={() =>
                          toggleMobileDropdown(
                            mobileDropdown === link.label ? null : link.label
                          )
                        }
                        className="cursor-pointer flex items-center justify-center gap-1"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            mobileDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {mobileDropdown === link.label && (
                        <ul className="pl-4 flex flex-col cursor-pointer gap-3 text-black text-center bg-gray-100 p-4 rounded w-full">
                          {link.dropdown.map((sublink, i) => (
                            <li
                              key={i}
                              onClick={() => {
                                navigate(sublink.to);
                                setMenuOpen(false);
                              }}
                            >
                              {sublink.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <div
                      onClick={() => {
                        navigate(link.to);
                        setMenuOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      {link.label}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <div>
                <button
                  onClick={() => {
                    navigate("/contact");
                    setMenuOpen(false);
                  }}
                  className="bg-[#5667ff] text-white px-5 py-2 rounded-lg"
                >
                  Contact us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
