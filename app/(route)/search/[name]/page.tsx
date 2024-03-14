'use client'
import DoctorList from '@/app/_components/DoctorList'
import Apis from '@/app/_utlis/Apis'
import React, { useEffect, useState } from 'react'

function page({ params }: any) {
 
  const [Category, setCategory] = useState([])
  useEffect(() => { getCategorys_() }, [])
  const getCategorys_ = () => {
    Apis.getDoctorByCategory(params.name).then((res: any) => {
      setCategory(res.data.data);

    })
  }
  return (
    <>
      <DoctorList head={params.name} doctorList={ Category} />
    </>
  )
}

export default page