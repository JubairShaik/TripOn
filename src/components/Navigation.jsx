import { NavLink } from 'react-router-dom';
import React from 'react'
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";



import logo from '../images/logo.png';

const Navigation = () => {
    const [openNav, setOpenNav] = useState(false);
 
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);



    
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col
     gap-2 sm:mb-0 lg:mt-0 sm:flex-row text-lg  text-white sm:items-center sm:gap-6">


      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg  font-bold"
      >
        <a href="/" className="navitem">
          Home 
        </a>
      </Typography>


      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg  font-bold"
      >
        <a href="./#Explore" className="navitem">
         About
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg  font-bold"
      >
        <a href="./#Explore" className="navitem">
          Explore 
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg  font-bold"
      >
        <a href="#" className="navitem">
           Pricing 
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg  font-bold"
      >
        <a href="#" className="navitem" >
          Contact 
        </a>
      </Typography>

      
    </ul>
  );
 
  
  return (
    <Navbar className="  items-center  z-50   border-none rounded-none fixed     bg-gradient-02  max-w-screen-xl py-2 px-4 lg:px-8 lg:py-5">
      <div className="container mx-auto flex items-center justify-between  ">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.6 font"
        >
        <span to={`/`} className="flex items-center">
        <h3 className="sm:text-[2.3rem] text-[1.5rem] font text-gree-500 drop-shadow-emrald font-extrabold text-center">TripOn</h3>
         </span>

        </Typography>


        <div className="hidden sm:block">{navList}</div>

        <Button  size="sm" className="hidden  button-emrald sm:inline-block">
          <span className="text-xl">Join Us</span>
        </Button>

        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Join Us</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}

export default  Navigation ;