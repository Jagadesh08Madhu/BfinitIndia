import React from 'react';
import { MdGraphicEq } from "react-icons/md";
import { motion } from "framer-motion";

export default function FreeGifts() {
  const bonusTiers = [
    { months: "3 Months", products: "1 free product", bonus: "+1 product" },
    { months: "6 Months", products: "2 free products", bonus: "+2 products" },
    { months: "12 Months", products: "4 free products", bonus: "+4 products" },
    { months: "24 Months", products: "5 free products", bonus: "+5 products" }
  ];

  return (
    <section className='py-10 mx-5 lg:mx-20'>
      <div className='flex flex-col gap-5'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center text-[#7a85ea]'
        >
          Free login guard, spam blocker & payroll tools with hosting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-center text-[#7a85ea] text-3xl font-medium'
        >
          Get Up to 5 FREE Bonus Products
        </motion.h1>

        <div className='flex flex-col lg:flex-row gap-10 mt-5'>
          {/* Left side */}
          <div className='lg:w-1/2 flex flex-col gap-5'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex items-center gap-2 text-[#7a85ea]'
            >
              <MdGraphicEq />
              <h1>Free Product Tiers</h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Unlock up to 5 free bonus products based on your hosting duration — a total value of up to
              <span className='text-[#7a85ea]'> ₹35,964.43/year </span>
            </motion.p>

            {bonusTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='flex justify-between items-center'
              >
                <div className='flex items-center gap-3'>
                  <span className='bg-blue-100 text-blue-500 p-4 rounded-full'>{index + 1}</span>
                  <div className='flex flex-col gap-2'>
                    <p className='font-medium'>{tier.months}</p>
                    <p>{tier.products}</p>
                  </div>
                </div>
                <div>
                  <p className='text-blue-500'>{tier.bonus}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side (placeholder) */}
          <motion.div
            className='lg:w-1/2'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* You can add an illustration or image here */}
            <div className='w-full h-full bg-blue-50 rounded-xl flex justify-center items-center text-blue-300 text-xl'>
              <p>Illustration / Bonus Image</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
