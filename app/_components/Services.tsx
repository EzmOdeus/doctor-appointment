import Image from 'next/image'
import React from 'react'

function Services() {
    return (
        <div className="grid grid-cols-5 gap-10 py-32 justify-items-center items-center">
            <div className=" col-span-2">
                <Image src='/pexels-anthony-shkraba-6749777 2.png' alt='doc img' width={400} height={900} className=' '/>
            </div>
            <div className="col-span-3 px-6 ">
                <h2 className='text-5xl pb-3 font-extrabold text-center'>Our
                    Special Services</h2>
                <p className='text-xl text-gray-500/50 px-[20%] pb-3 text-center'>In times like today, your health is very important,
                    especially since the number of COVID-19 cases is
                    increasing day by day, so we are ready to help you
                    with your health consultation</p>
                <div className="grid gap-6 grid-cols-2 pt-3">
                    <div className="">
                        <Image src='/covid-test 2.png' width={50} height={60} alt='icon' className='rounded-xl'/>
                        <p className='font-bold  '>Covid-19 Test</p>
                        <p className='w-[80%] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                    </div>
                    <div className="">
                        <Image src='/flask 1.png' width={50} height={60} alt='icon' className='rounded-xl' />
                        <p className='font-bold  '> Laboratorium Test</p>
                        <p className='w-[80%] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                    </div>
                    <div className="">
                        <Image src='/supplement 1.png' width={50} height={60} alt='icon' className='rounded-xl'/>
                        <p className='font-bold  '>Herbal Suplement</p>
                        <p className='w-[80%] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                    </div>
                    <div className="">
                        <Image src='/schedule 1.png' width={50} height={60} alt='icon' className='rounded-xl'/>
                        <p className='font-bold  '>Menstruation Calendar</p>
                        <p className='w-[80%] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                    </div>
                </div>
            </div>
   </div>
    )
}

export default Services