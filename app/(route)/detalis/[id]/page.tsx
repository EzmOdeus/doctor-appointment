'use client'
import DoctorDetalis from '@/app/_components/DoctorDetalis'
import SimlarDoctor from '@/app/_components/SimlarDoctor'
import Apis from '@/app/_utlis/Apis'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function page({ params }: any) {
  const [Doctor, setDoctor] = useState([])
  useEffect(() => { getDoctors_() }, [])
  const getDoctors_ = () => {
    Apis.getDoctorById(params.id).then((res: any) => {
      setDoctor(res.data.data);

    })
  }
  return (
    <div className='grid grid-cols-4 '>
      <div className="md:col-span-3 col-span-4 mt-24">
        <DoctorDetalis doctor={Doctor} />
      </div>
      <div className="mt-24">
<SimlarDoctor category={Doctor}/>
      </div>
    </div>
  )
}

export default page