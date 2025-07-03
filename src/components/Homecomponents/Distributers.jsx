import React from 'react'
import distributer from '../../assets/distributers.webp'
import { useNavigate } from 'react-router-dom'

export default function Distributers() {
    const navigate = useNavigate()
  return (
    <section className='font-plus mx-5 lg:mx-20 '>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
             <div>
                <img src={distributer} className='rounded-2xl' alt="" />
            </div>
            <div className='flex flex-col items-start gap-5'>
                <h1 className='text-3xl lg:text-4xl text-[#5667ff] font-semibold'>Distributions Affiliation</h1>
                <p className=' leading-loose'>Become a distributor with BFINIT INDIA and expand your business with our trusted hosting services. Join us and start earning by offering
                    high-quality, scalable solutions to your clients.</p>
                <button onClick={()=>navigate('/distributor')} className='bg-[#5667ff] text-white px-5 py-2 rounded-2xl'>Join as a Distributor</button>
            </div>
        </div>
    </section>
  )
}
