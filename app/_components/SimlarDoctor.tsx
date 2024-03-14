'use client'
import React, { useEffect, useState } from 'react'
import Apis from '../_utlis/Apis'
import Image from 'next/image'
import Link from 'next/link'

function SimlarDoctor({ category }: any) {

  const [Category, setCategory] = useState([])
  useEffect(() => { getCategorys_() }, [category])
  const getCategorys_ = () => {
    Apis.getDoctorByCategory(category.attributes?.categories.data[0].attributes.Name).then((res: any) => {
      setCategory(res.data.data);

    })
  }
  return (
    <div className='p-3 border-[1px] max-md:w-[90vw]  shadow-lg'>
      Suggestions
      {Category.map((doctor: any, index) => (
        <Link href={`/detalis/${doctor.id}`} key={index}>    <div className='p-1 boder-[1px] shadow-md rounded-lg flex items-center pt-3' >
          <Image src={doctor.attributes?.image?.data?.attributes?.url} priority width={70} height={70} alt='doctor img' className='rounded-full' />

          <div className="pl-2">   <p className='bg-sky-700 text-white w-fit rounded-2xl p-2  text-[10px]'> {doctor.attributes?.categories?.data[0].attributes?.Name}</p>
            <p>{doctor.attributes?.Name}</p>
            <p>{doctor.attributes?.Year_of_Experience}Year of Experience</p></div>
        </div></Link>
    ))
    }</div>
  )
}

export default SimlarDoctor