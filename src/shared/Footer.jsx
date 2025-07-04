import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CiLocationArrow1 } from "react-icons/ci";
import { MdLocalPhone ,MdOutlineAttachEmail ,MdOutlineMailLock  } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";



export default function Footer() {

  const navigate = useNavigate()

  const Items =[
    {
      name :"Home",
      link:"/"
    },
    {
      name :"Pricing",
      link:"/pricing"
    },
    {
      name :"Contact",
      link:"/contact"
    },
    {
      name :"Compliance",
      link:"/compliance"
    },
    {
      name :"Cookie policy",
      link:"/cookie-policy"
    },
    {
      name :"Privacy policy",
      link:"/privacy-policy"
    },
    {
      name :"General Conditions",
      link:"/general-conditions"
    },
  ]

  const Hosting_Products =[
    {
      name :"Web Hosting",
      link:"/"
    },
    {
      name :"VPS Hosting",
      link:"/pricing"
    },
    {
      name :"Dedicated Server",
      link:"/contact"
    },
    {
      name :"Custom VPS",
      link:"/compliance"
    },
    {
      name :"Starter Webpack",
      link:"/cookie-policy"
    },
    {
      name :"Distributors Affiliation",
      link:"/privacy-policy"
    },
    {
      name :"Ecommerce Pack",
      link:"/general-conditions"
    },
  ]
  return (
    <section className=" pb-5 px-5 lg:px-20 font-plus bg-[#0f1137] text-white">
      <div className='flex flex-col gap-5  items-center py-10  pt-20'>
        <motion.h1 
        initial={{opacity:0 , y :40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5}}
        viewport={{once:true , amount:0.3}}
        className='lg:text-4xl text-2xl lg:w-1/2 text-center'>Future-Ready Hosting for Expanding Businesses</motion.h1>
        <motion.button
        initial={{opacity:0 , y :40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5}}
        viewport={{once:true , amount:0.6}}
        onClick={()=>navigate("/contact")}
        className='border px-6 rounded-lg py-3'>Contact Us</motion.button>
        <div className='bg-white h-[1px] mt-10 lg:mt-28 w-full'></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 , delay:0.4}}
        viewport={{once:true , amount:0.5}}
        >
          <h1 onClick={()=>navigate("/")} style={{letterSpacing:"5px"}} className="text-2xl cursor-pointer font-bold mb-4">BFINIT INDIA</h1>
          <p className="italic text-lg mb-3">
            "Powering your growth, simplifying your digital journey. We manage the tech so you can focus on your business." ⚙️
          </p>
          <p className='text-sm'>
            At BFINIT India, we understand that hosting isn't just about servers—it's about enabling your vision. From high-speed performance and 
            secure infrastructure to scalable cloud solutions, we deliver seamless hosting experiences tailored to your business goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{once :true , amount:0.3}}
          className='flex flex-col lg:items-center'
        >
          <h1 className="text-2xl font-bold ">Quick Links</h1>
          <ul className="space-y-2 mt-2">
            {Items.map((item, index) => (
              <motion.li
              initial={{opacity:0 , x:20}}
              whileInView={{opacity:1 , x:0}}
              transition={{duration:index*0.1 , delay:index *0.2}}
              viewport={{once:true , amount:0.5}}
              onClick={()=>navigate(item.link)}
              key={index} className="cursor-pointer hover:text-gray-300  duration-300 text-sm transition-colors">
                {item.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{once :true , amount:0.3}}
            >
              <h1 className="text-2xl font-bold ">Our Products</h1>
             <ul className="space-y-2 mt-2">
                {Hosting_Products.map((item, index) => (
                  <motion.li
                  initial={{opacity:0 , x:20}}
                  whileInView={{opacity:1 , x:0}}
                  transition={{duration:index*0.1 , delay:index *0.2}}
                  viewport={{once:true , amount:0.5}}
                  onClick={()=>navigate(item.link)}
                  key={index} className="cursor-pointer hover:text-gray-300  duration-300 text-sm transition-colors">
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{once :true , amount:0.3}}
        >
          <h1 className="text-2xl font-bold mb-4">Registered Address</h1>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'><CiLocationArrow1/></span>
                <a target='_blank' href="">India</a>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'><MdLocalPhone/></span>
                <a target='_blank'  href="tel:">Phone: </a>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'><MdOutlineAttachEmail /></span>
                <a 
                  href="mailto:" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  Email: 
                </a>

              </div>

              <div className='flex items-center mt-2 gap-5'>
                <span className='text-xl border rounded-full hover:-translate-y-2 transition-all ease-in-out p-2'><a href="tel:" target="_blank" rel="noopener noreferrer">
                  <MdOutlineWifiCalling3 />
                </a></span>

                <span className='text-xl border hover:-translate-y-2 transition-all ease-in-out rounded-full p-2'><a target='_blank' href="" rel="noopener noreferrer">
                  <IoLocationOutline />
                </a></span>
                
                <span className='text-xl border hover:-translate-y-2 transition-all ease-in-out rounded-full p-2'><a href="mailto:unayhr-support@gmail.com" target="_blank" rel="noopener noreferrer">
                  <MdOutlineMailLock  />
                </a></span>
              </div>
            </div>
        </motion.div>

        
      </div>

      <div className='flex justify-center items-center border-t-2 pt-5 mt-5'>
        <p>© 2025 Bfinit India. All rights reserved.</p>
      </div>
    </section>
  );
}
