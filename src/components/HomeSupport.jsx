import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import support from '../assets/support.png'

export default function HomeSupport() {
  return (
    <section className='font-dmsans py-20 px-10 lg:mx-32'>
      <div className='flex gap-10 flex-col lg:flex-row items-center'>
        <div className='lg:w-1/2 flex flex-col gap-5'>
            <h1 className='text-4xl'>24/7 assistance to ensure your website success</h1>
            {["Expert help is at your fingertips with our email support.",
                "No more waiting – we commit to resolving issues within a few minutes.",
                "Effective communication is our priority – our agents speak 10+ global languages."
            ].map((item , index) =>(
                <div key={index} className='flex  items-center mt-5 gap-3'>
                    <span className='text-[#08B0F6]'><GiCheckMark /></span>
                    <p className='text-xl'>{item}</p>
                 </div>
            ))}
            
        </div>

        <div className='lg:w-1/2'>
            <img className='md:w-5/6 p-10' src={support} alt="" />
        </div>
      </div>
    </section>
  )
}
