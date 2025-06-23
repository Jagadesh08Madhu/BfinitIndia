import React, { useEffect } from 'react';
import create_web from '../../assets/create web.png';

export default function CreateWeb() {
  const steps = [
  {
    number: '01',
    title: 'Select Your Hosting Plan',
    description: 'Browse and choose the hosting plan that fits your business needs and budget.',
  },
  {
    number: '02',
    title: 'Design Your Website',
    description: 'Use our intuitive website builder or upload your own design to match your brand.',
  },
  {
    number: '03',
    title: 'Launch and Grow',
    description: 'Go live instantly and manage everything with our secure and easy-to-use dashboard.',
  }];

  useEffect(()=>{
    sessionStorage.setItem('websiteSteps' ,JSON.stringify(steps))
  } ,[])
  return (
    <section className="lg:mx-20 mx-5 py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2 lg:order-1 order-2 relative">
          <div className="absolute h-[90%] border-l-2 border-blue-500 border-dashed 2xl:top-12 top-24 left-6 z-0"></div>

          <div className="relative flex flex-col gap-20 z-20">
            {/* Heading */}
            <div className="relative z-20">
              <h1 className="text-4xl ml-3 font-semibold">
                Create a Website in _3 Easy Steps
              </h1>
            </div>

            {/* Step Blocks */}
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5 z-20">
                <div className="bg-blue-200 hover:bg-blue-400 border border-blue-400 transition-all ease-in-out flex p-3 h-fit text-xl rounded-full items-center justify-center">
                  {step.number}
                </div>
                <div className='flex flex-col gap-2'>
                  <h1 className="text-xl font-semibold text-blue-400">{step.title}</h1>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 order-1 lg:order-2 mt-10 lg:mt-0">
            <img className="rounded-3xl" src={create_web} alt="Create Website Steps" />
        </div>

      </div>
    </section>
  );
}
