'use client'
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Apis from '../_utlis/Apis';
import Image from 'next/image';
import Link from 'next/link';
function SearchBar() {
  const [Category,setCategory]=useState([])
  useEffect(() => {getCategorys_() }, [])
  const getCategorys_ = () => {
    Apis.getCategory().then((res: any) => {
      setCategory( res.data.data);
    })
  }
  return (
    <div className='my-3 flex flex-col justify-center items-center'>
      <h2 className='md:text-7xl text-5xl font-extrabold text-black/40' >Search <span className='text-sky-800'>Doctor</span></h2>
      <h3 className='md:text-xl text-lg text-center py-3'>Search Your Doctor And Book Appointment in one Click</h3>
      <div className="flex"><input type="text" className='rounded-lg p-3 border-sky-600 bg-gray-600/10' />
        <button type="button" className='px-6 bg-sky-800 text-white rounded-lg ml-3 flex justify-between  items-center'><FaSearch /> <span className='pl-2'>Search</span></button></div>
      <div className="grid py-3 grid-cols-3  md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center gap-6">
        {Category.map((item:any, index) => (
          <Link href={`search/${item.attributes?.Name}`} key={index}>
            <div className=" md:w-36   w-32 p-3 rounded-lg text-cyan-50  text-center flex flex-col items-center bg-sky-800 hover:scale-110 transition-all ease-in-out hover:bg-gray-300/50 cursor-pointer hover:backdrop-blur-sm hover:text-sky-800  " >
              <Image src={item.attributes?.Icon?.data?.attributes?.url} width={70} height={100} alt='icon' />
              <label>{item.attributes?.Name}</label>
            </div></Link>
        ))}
    </div>
    </div>
  )
}

export default SearchBar