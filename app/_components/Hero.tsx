import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <section >
            <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-52 pt-10 overflow-hidden rounded-xl rounded-t-xl sm:h-80 lg:order-last lg:h-full">
                        <img
                            width={140}
                            height={150}

                            alt=""
                            src="/asian-young-main-group-hospital-professional.jpg"
                            className="absolute  h-full w-full "
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Find & Book <span className='text-sky-900 text-5xl font-extrabold'>Appointment </span> With Your Fav <span className='text-sky-900  font-extrabold'>Doctor</span></h2>

                        <p className="mt-4 text-gray-600">
                            In times like today, your health is very important,
                            especially since the number of COVID-19 cases is
                            increasing day by day, so we are ready to help you
                            with your health consultation
                        </p>

                        <Link
                            href="/search/Gynecology"
                            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started 
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero