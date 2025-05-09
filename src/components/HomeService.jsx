import React from 'react';
import { motion } from 'framer-motion';
import { TbWorld } from "react-icons/tb";
import { GrServer } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaCloud, FaUserLock } from "react-icons/fa6";

export default function HomeService() {
  const Services = [
    {
      logo: <TbWorld />,
      heading: "Web Hosting",
      content: `Reliable and budget-friendly web hosting solutions.
                Perfect for small businesses and personal websites.`
    },
    {
      logo: <GrServer />,
      heading: "VPS Hosting",
      content: `Scalable and secure virtual private servers.
                Enjoy better control, performance, and customization.`
    },
    {
      logo: <BsLaptop />,
      heading: "Dedicated Server",
      content: `High-performance servers for demanding applications.
                Ideal for large-scale websites and enterprise systems.`
    },
    {
      logo: <CiSettings />,
      heading: "Custom VPS",
      content: `Tailor your VPS with flexible resources to match your needs.
                Choose CPU, RAM, storage, and more — your server, your way.`
    },
    {
      logo: <FaCloud />,
      heading: "Cloud Hosting",
      content: `Harness the power of the cloud for your website.
                Fast, reliable, and easily scalable with minimal downtime.`
    },
    {
      logo: <FaUserLock />,
      heading: "Managed Hosting",
      content: `Let us handle the technical side of things.
                Includes updates, backups, and security for peace of mind.`
    },
  ];

  return (
    <section className='bg-[#0F1137] lg:px-20 px-5 py-20 font-dmsans'>
      {/* Animated section title */}
      <motion.div
        className='flex items-center justify-center gap-3'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-[#08B0F6] to-[#066EEB]'></div>
        <div><h1 className='text-white'>Our Service</h1></div>
      </motion.div>

      {/* Animated heading and subtitle */}
      <motion.div
        className='text-white flex justify-center flex-col gap-3 mt-3 items-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className='max-w-3xl'>
          <p className='text-center text-2xl lg:text-5xl font-semibold'>Premium hosting services that set you apart</p>
        </div>
        <div className='max-w-3xl text-center text-sm lg:text-base'>
          <p>Whether you’re just starting out or managing a growing business, our flexible pricing plans are tailored to meet your unique needs.</p>
        </div>
      </motion.div>

      {/* Animated cards with spring transition */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-5 lg:gap-10'>
        {Services.map((service, index) => (
          <motion.div
            key={index}
            className={`text-white flex flex-col gap-3 px-5 py-8 rounded-xl ${index % 2 !== 0 ? "bg-transparent" : "bg-[#27294B]"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: index * 0.15
            }}
          >
            <span className='text-4xl'>{service.logo}</span>
            <h1 className='text-2xl font-semibold'>{service.heading}</h1>
            <p className='text-lg'>{service.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated footer text */}
      <motion.div
        className="text-center text-white pt-10 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Let’s make something great work together.{' '}
        <a
          href=""
          className="bg-gradient-to-r from-[#08B0F6] to-[#066EEB] bg-clip-text text-transparent font-semibold hover:underline transition duration-300"
        >
          Contact us
        </a>
      </motion.div>
    </section>
  );
}
