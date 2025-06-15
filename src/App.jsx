import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import React, { useState } from 'react';
export default function App() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-yellow-400 p-6 text-xl text-white flex justify-between items-center">
        <div className=" order-1 ">
          <iframe className="h-16 w-16 rounded-full " src="https://lottie.host/embed/84ccd895-490c-4b4b-bcdc-07e2fcbdbaad/VmAO4tEmVK.lottie"></iframe>
        </div>
        <div className="gap-8 flex font-bold order-3 md:order-2 ">
          <button onClick={() => setOpen(!open)} className="md:hidden text-3xl hover:text-red-800"><ImMenu /></button>
          <a href="#" className="uppercase hover:text-red-800 hover:underline hidden  md:flex ">home</a>
          <a href="#" className="uppercase hover:text-red-800 hover:underline hidden md:flex">blog</a>
          <a href="#" className="uppercase hover:text-red-800 hover:underline hidden md:flex">service</a>
          <a href="#" className="uppercase hover:text-red-800 hover:underline hidden md:flex">about</a>
          <a href="#" className="uppercase hover:text-red-800 hover:underline hidden md:flex">contact</a>
        </div>
        <div className="flex gap-4 text-3xl order-2 md:order-3">
          <button className=" hover:text-red-800"><MdAddShoppingCart /> </button>
          <button className=" hover:text-red-800"><MdOutlineAddIcCall /></button>
          </div>

      </nav>
      <h1 className="text-3xl font-bold underline bg-gray-600 p-4 text-red-300">
      Check deploy 
    </h1>
    </div>
  )
}