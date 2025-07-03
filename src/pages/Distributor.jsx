import React from 'react';
import partner from '../assets/partner.webp';
import { CiStar } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { LuBadgeIndianRupee } from "react-icons/lu";
import { RiGlobalFill } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import Enterprise from '../components/Enterprise';
import { motion } from 'framer-motion';

export default function Distributor() {

  const highlights = [
    {
      logo: <LuBadgeIndianRupee />,
      heading: "Lucrative Commissions",
      content: "Earn up to 30% recurring commissions on every successful referral."
    },
    {
      logo: <RiGlobalFill />,
      heading: "Global Opportunities",
      content: "Reach and serve customers worldwide — no borders, just business."
    },
    {
      logo: <MdContactSupport />,
      heading: "Dedicated Support",
      content: "Get access to a partner success team whenever you need help."
    },
    {
      logo: <RiToolsLine />,
      heading: "Free Marketing Tools",
      content: "Leverage ready-made banners, links, and resources to grow faster."
    }
  ];

  return (
    <section className='mx-5 lg:mx-20 font-plus py-28'>
      
      {/* Top Section */}
      <div className='flex flex-col lg:flex-row gap-10 items-center'>

        <motion.div
          className='flex flex-col gap-5'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className='flex items-center gap-2 bg-[#7a85ea] w-fit px-5 text-white rounded-full'>
            Distributor Program <span><CiStar /></span>
          </h1>

          <h1 className='text-5xl'>Become Distributor</h1>

          <p className='leading-loose'>
            Join our elite partner network and earn up to 30% recurring commissions.
            We provide premium hosting solutions and the marketing tools you need to succeed.
          </p>

          <button
            onClick={() => window.open('https://hpanel.bfinit.com/distributor/register', '_blank')}
            className='flex items-center gap-2 bg-[#7a85ea] w-fit px-5 py-2 text-white rounded-2xl'
          >
            Become a partner <span><IoMdPersonAdd /></span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img className='rounded-2xl' src={partner} alt="partner" />
        </motion.div>
      </div>

      {/* Highlights Section */}
      <motion.div
        className='pt-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className='text-center py-5 text-3xl font-semibold text-[#7a85ea]'>
          Distributor Highlights for Bfinit India
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5'>
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className='flex flex-col gap-3 text-center shadow-lg py-5 px-5 rounded-lg'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className='text-3xl flex justify-center text-[#7a85ea]'>{highlight.logo}</span>
              <h1 className='font-semibold'>{highlight.heading}</h1>
              <p>{highlight.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enterprise Section */}
      <Enterprise />
    </section>
  );
}
