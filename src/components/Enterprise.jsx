import React from 'react';
import { motion } from 'framer-motion';
import { BsLightningCharge, BsMemory } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { GoCpu } from "react-icons/go";
import { LuHardDriveUpload } from "react-icons/lu";
import { RiGlobalFill } from "react-icons/ri";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GrDocumentPerformance } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import whychoose from '../assets/whychoose.webp';

export default function Enterprise() {
  const Enterprise = [
    {
      logo: <BsLightningCharge />,
      Heading: "Maximum performance",
      content: "No ifs, no buts - just raw computing power when you need it",
      bg: "bg-blue-100"
    },
    {
      logo: <GoCpu />,
      Heading: "Powerful Intel® CPUs",
      content: "Latest generation processors for unbeatable performance",
      bg: "bg-orange-100"
    },
    {
      logo: <GiProcessor />,
      Heading: "Up to 16 Cores",
      content: "Handle even the most demanding workloads with ease",
      bg: "bg-teal-100"
    },
    {
      logo: <BsMemory />,
      Heading: "Up to 256GB DDR4 RAM",
      content: "Lightning-fast memory for your memory-intensive applications",
      bg: "bg-red-100"
    },
    {
      logo: <LuHardDriveUpload />,
      Heading: "SATA, SSD or NVMe",
      content: "Choose the perfect storage solution for your needs",
      bg: "bg-gray-100"
    },
    {
      logo: <RiGlobalFill />,
      Heading: "Up to 1 Gbit/s Network",
      content: "Blazing-fast network speeds with unlimited traffic",
      bg: "bg-purple-100"
    }
  ];

  return (
    <section className='pt-20 font-plus'>

      {/* Enterprise-Grade Infrastructure */}
      <div className='flex flex-col gap-5'>
        <motion.h1
          className='text-center text-4xl font-semibold text-[#7a85ea]'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Enterprise-Grade Infrastructure
        </motion.h1>

        <motion.p
          className='text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We provide the raw power your clients demand, with no compromises
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {Enterprise.map((enterprise, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start gap-3 p-5 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className={`text-4xl p-4 rounded-full inline-block ${enterprise.bg}`}>
                {enterprise.logo}
              </span>
              <h2 className="text-lg font-semibold">{enterprise.Heading}</h2>
              <p className="text-sm text-gray-600">{enterprise.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why choose */}
      <div className='flex flex-col lg:flex-row gap-10 mt-10 items-center'>
        <motion.div
          className='lg:w-1/2 relative'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={whychoose} className='rounded-xl' alt="whychoose" />
          <div className='absolute top-1 right-0 bg-white flex items-center gap-5 px-5 py-2 rounded-full'>
            <span className='text-[#7a85ea] font-semibold text-lg'>₹</span>
            <p className='font-semibold'>20-30% Commission</p>
          </div>
        </motion.div>

        <motion.div
          className='lg:w-1/2 flex flex-col gap-5'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className='text-[#7a85ea] text-4xl font-semibold'>Why Partner With Us?</h1>
          <p>Join our network of 5,000+ partners already growing their business with our premium hosting solutions.</p>

          <div className='flex flex-col gap-5'>
            {/* Card 1 */}
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span className='bg-red-200 rounded-lg p-4 text-xl text-red-600'><LiaRupeeSignSolid /></span>
              <div className="flex flex-col gap-2">
                <h1 className='text-[#7a85ea] text-xl font-medium'>Higher Earnings</h1>
                <p className='text-sm'>Industry-leading 30% recurring commissions with no caps on earnings.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className='bg-blue-200 rounded-lg p-4 text-xl text-blue-600'><GrDocumentPerformance /></span>
              <div className="flex flex-col gap-2">
                <h1 className='text-[#7a85ea] text-xl font-medium'>Proven Performance</h1>
                <p className='text-sm'>98% uptime guarantee and enterprise-grade infrastructure.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className='bg-purple-200 rounded-lg p-4 text-xl text-purple-600'><BiSupport /></span>
              <div className="flex flex-col gap-2">
                <h1 className='text-[#7a85ea] text-xl font-medium'>Dedicated Support</h1>
                <p className='text-sm'>24/7 partner success team and co-branded marketing materials.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Ready to start CTA */}
      <motion.div
        className='flex justify-center items-center flex-col pt-28 gap-5'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className='text-4xl font-medium'>Ready to Start Earning?</h1>
        <p>Join now and get your exclusive partner dashboard instantly.</p>
        <button
          onClick={() => window.open('https://hpanel.bfinit.com/distributor/register', '_blank')}
          className='flex items-center gap-2 bg-[#7a85ea] w-fit px-5 py-2 text-white rounded-2xl'
        >
          Sign up for free
        </button>
        <p className='text-[#7a85ea]'>No credit card required. Approval in 24 hours.</p>
      </motion.div>
    </section>
  );
}
