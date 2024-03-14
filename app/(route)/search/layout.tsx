'use client'
import CategoryList from '@/app/_components/CategoryList'
import Apis from '@/app/_utlis/Apis'
import React, { useEffect, useState } from 'react'

function page({ children }: any) {
  const [Category, setCategory] = useState([])
  useEffect(() => { getCategorys_() }, [])
  const getCategorys_ = () => {
    Apis.getCategory().then((res: any) => {
      setCategory(res.data.data);

    })
  }
  return (
    <div className='grid grid-cols-4 pt-20'>
      <div className="hidden md:block"><CategoryList category={ Category} /></div>
      <div className="col-span-4 md:col-span-3">
      {children}
      </div>
    </div>
  )
}

export default page