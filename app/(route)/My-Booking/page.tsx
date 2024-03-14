'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Apis from '@/app/_utlis/Apis'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import moment from 'moment'
import CancleButton from './CancleButton'
function MyBooking() {
  const { user } = useKindeBrowserClient()
  const [booking,setbooking]=useState([])
  useEffect(()=>{getBookingList()},[user])
  const getBookingList = () => {
    Apis.UserEmail(`${user?.given_name} ${user?.family_name}`).then((res: any) => {
      setbooking(res.data.data)
      console.log(res.data.data)
    })
  }

  return (
    <div className='pt-20 h-[90vh]'><p className='pt-2 text-sky-800 font-extrabold text-4xl'>Booking</p>
      {booking.map((item: any,index:number) => (
        <div className='p-3  border-[1px] flex justify-between items-start' key={index}>
        <Image
          className="rounded-full mb-2 object-cover  "
          src={item.attributes?.doctor?.data?.attributes?.image?.data?.attributes?.url}
          alt="Doctor photo"
          width={70}
          height={100}

          />
          <div className=""> <p>{item.attributes?.doctor?.data?.attributes?.Name}</p>
            <p>{item.attributes?.doctor?.data?.attributes?.Address}</p>
            <p>Appointment on {moment(item.attributes?.Date).format('DD-MMM-YYYY')} </p>
            <p>AT Time : {item.attributes?.Time}</p></div>
          <CancleButton onContinueClick={item} updateRecord={() => getBookingList()} />

        </div>
     ))}
</div>
  )
}

export default MyBooking