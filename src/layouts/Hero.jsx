import React from 'react'
import useDarkMode from '../hook/useDarkMode'

const Hero = () => {
    useDarkMode();
    const Links=[
        {
            name:"MOON"
        },
        {
            name:"MARS"
        },
        {
            name:"EUROPA"
        },
        {
            name:"TITAN"
        },
    ]
  return (
    <div className="md:container px-2  pt-5 md:text-left text-center">
    <h1 className="text-2xl  text-white dark:text-black">
      <span className="text-[#ffffff70] dark:text-black font-bold mr-2">01</span> PICK YOUR DESTINATION</h1>
    <div className="md:flex items-center md:justify-between  pt-6 ">
      <img src="./src/assets/solar-system-animation.svg" className="md:w-[56%] w-[52%]  md:mx-0 mx-auto md:py-0 py-4" />
      <div className="md:w-1/2 ">
        <ul className="text-white dark:text-black pb-4">
            {
                Links.map((link,index)=>(
                    <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 dark:border-black border-white  hover:border-b-2">{ link.name}</li>

                ))
            }
         
        </ul>
        <h1 className="text-white  dark:text-black w-full font-Bellefair pb-2 text-7xl">MOON</h1>
        <p className="text-[#d2d8f9] dark:text-black font-extralight text-sm md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.5px] border-[#ffffff66]">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10">
          <div>
            <span className="text-[#d2d8f9] dark:text-black text-sm">Avg. distance</span>
            <h1 className="text-white text-xl dark:text-black">384,400 KM</h1>
          </div>
          <div>
            <span className="text-[#d2d8f9] dark:text-black text-sm">Est. travel time</span>
            <h1 className="text-white dark:text-black text-xl">3 DAYS</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero