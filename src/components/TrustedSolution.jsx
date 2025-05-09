import React from 'react';
import { motion } from 'framer-motion';
import { GoRocket } from "react-icons/go";
import { TbHours24 } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function TrustedSolution() {

  const Solutions = [
    {
      logo: <GoRocket />,
      heading: "550 Gbit/s",
      content: "Our backbone boasts a robust 550 Gbit/s capacity with a fully redundant MPLS ring for unmatched reliability and performance."
    },
    {
      logo: <TbHours24 />,
      heading: "24/7 Support",
      content: "Got a question? Feel free to message us anytime. Together, we'll always find the solution!"
    },
    {
      logo: <IoIosTimer />,
      heading: "Ready in 24 hours",
      content: "Order your new Virtual or Dedicated Server now and be up and running in 24 hours — This is our promise!"
    },
    {
      logo: <TfiLayoutMediaCenterAlt />,
      heading: "Modern Data Centers",
      content: "Our state-of-the-art data centers in Strasbourg and St. Louis are independently tested and certified for excellence."
    },
  ];

  return (
    <section className='lg:px-20 px-5 py-20 font-dmsans'>
      
      {/* Top badge */}
      <motion.div
        className='flex items-center justify-center gap-3'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-[#08B0F6] to-[#066EEB]'></div>
        <div><h1>Trusted Solution</h1></div>
      </motion.div>

      {/* Title and Subtitle */}
      <motion.div
        className='flex justify-center flex-col gap-3 mt-3 items-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className='max-w-3xl'>
          <p className='text-center text-2xl lg:text-5xl font-semibold'>
            The preferred hosting choice for over 2 million websites
          </p>
        </div>
        <div className='max-w-3xl text-center text-sm lg:text-base'>
          <p>
            Whether you’re just starting out or managing a growing business, our flexible pricing plans are tailored to meet your unique needs.
          </p>
        </div>
      </motion.div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 lg:px-20 lg:grid-cols-4 gap-5'>
        {Solutions.map((solution, index) => (
          <motion.div
            key={index}
            className='p-8 relative flex flex-col gap-5 shadow-xl border group overflow-hidden rounded-2xl bg-white'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: index * 0.1
            }}
          >
            <div className='absolute w-full h-full bg-[#0F1137] z-0 -bottom-[100%] group-hover:bottom-0 transition-all ease-in-out duration-500 left-0 rounded-2xl'></div>
            <span className='text-6xl z-10 text-[#08B0F6] group-hover:text-white'>
              {solution.logo}
            </span>
            <h1 className='text-xl font-bold z-10 group-hover:text-white'>{solution.heading}</h1>
            <p className='text-gray-600 z-10 group-hover:text-white'>{solution.content}</p>

            <div className='mt-auto relative'>
              {/* Container for Arrow and Animated Background */}
              <div className='w-fit p-2 rounded-full relative group bg-gradient-to-r from-[#08B0F6] via-[#08b5f7] to-[#066EEB]'>
                {/* Arrow */}
                <span className='text-4xl text-white z-10'>
                  <MdKeyboardDoubleArrowRight />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
