import { useState } from "react";
import useDarkMode from "../hook/useDarkMode";

const Nav = () => {
    let [open,setOpen]=useState(false);
    const  [colorTheme,setTheme]=useDarkMode();
    const Links=[
        {
            name:"HOME"
        },
        {
            name:"DESTINATION"
        },
        {
            name:"CREW"
        },
        {
            name:"TECHNOLOGY"
        },
    ]
    return ( 
        <nav className="flex justify-between items-center pt-5">  
            <img  className="w-12 ml-7 ring-2 rounded-full ring-red-500 p-0.5"  src="./src/assets/white-logo.png"/>
            <img src={!open ? "./src/assets/icon-hamburger.svg":"./src/assets/icon-close.svg"} onClick={()=>setOpen(!open)} className="z-20 fixed right-5
            top-6 duration-500 cursor-pointer md:hidden" alt="" srcset="" />
            <ul className={`bg-[#ffffff14] dark:bg-[#e9e9e9] duration-500 ease-linear backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 right-0 md:h-auto h-screen ${!open? 'right-[-100%]' : 'right-0' }`}>
                { 
                    Links.map((link,index)=>(
                        <li key={index} className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white dark:hover:border-black md:my-0 my-6 duration-300">
                            <a href="http://" className="text-white dark:text-black  md:py-5 py-3 text-sm inline-block">
                               <span className="font-bold mr-1.5">0{index}</span> {link.name}
                            </a>
                        </li>
                    ))
                }
                <div className="md:inline-block md:ml-10 ml-5 border-transparent md:my-0 my-6 duration-300">
                    <span onClick={()=>setTheme(colorTheme)} className="w-10 h-10 bg-indigo-500 rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center">
                        {
                            colorTheme==='light'?
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                            :<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
 
                        }
                    </span>
                </div>
                
            </ul>
        
        </nav>
     );
}
 
export default Nav;