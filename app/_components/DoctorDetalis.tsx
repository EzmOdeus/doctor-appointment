import Image from 'next/image'
import React from 'react'
import Booking from './Booking'
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";

export default function DoctorDetalis({doctor}:any) {
  return (
      <div>
      <div className="p-3 border-[1px] shadow-md rounded-lg ">
        <div className="md:flex w-[70%] justify-between items-center">  <Image priority src={doctor.attributes?.image?.data?.attributes?.url} alt='doctor img' className='max-w-[90vw] rounded-xl shadow-lg md:max-w-full  object-cover' width={300} height={200} />
          <div className="pl-6"> <p className='font-bold text-4xl pb-6'>{doctor.attributes?.Name}</p>
            <p className='text-xl pb-2'>🎓{doctor.attributes?.Year_of_Experience} Year of Experience</p>
            <p className='flex items-center pb-2 text-xl'><div className="text-sky-700"><FaLocationDot /></div>{doctor.attributes?.Address}</p>
            <p className='flex  rounded-2xl bg-sky-800 backdrop-blur-sm text-white p-3 w-fit items-center '><div className="text-sky-400"><BiSolidCategoryAlt /></div>
              {doctor.attributes?.categories.data[0].attributes.Name}</p></div></div>
        <Booking doctor={doctor}  />
      </div>
      <div className="p-3 mt-3 border-[1px] shadow-md rounded-lg" >
        <p className='font-extrabold text-3xl'>About Me</p>
        <pre className='text-lg'>{doctor.attributes?.About}</pre></div>
      </div>
  )
}
