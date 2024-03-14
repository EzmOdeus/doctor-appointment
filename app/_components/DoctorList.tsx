import Image from "next/image";
import React from "react";
import Skeleton from "./Skeleton";
import Link from "next/link";

function DoctorList({ doctorList, head ='Popular Doctor'}: any) {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16" id="doctor">
            <h2 className="mb-3 text-6xl text-center font-extrabold text-gray-500/40 drop-shadow-2xl backdrop-blur-3xl ">
             {head}
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                {doctorList.length >0 ? doctorList.map((doctor: any, index: string) => (
                    <div
                        className="border-[1px] rounded-lg p-3  hover:scale-110 transition-all ease-in-out cursor-pointer hover:bg-sky-950 hover:text-white "
                        key={index}
                    >
                        <Image 
                            className="rounded-lg mb-2 object-cover h-[220px] w-full "
                            src={doctor.attributes?.image?.data?.attributes?.url}
                            alt="Doctor photo"
                            width={200}
                            height={100}
                            
                        />
                        <p className="rounded-xl bg-sky-800 mb-2 text-white p-1 w-fit">
                            {doctor.attributes?.categories?.data[0].attributes?.Name}
                        </p>
                        <p className="font-extrabold mb-2 text-xl">
                            {doctor.attributes?.Name}
                        </p>
                        <p className="font-medium text-lg mb-2  text-sky-800">
                            {doctor.attributes?.Year_of_Experience} Years
                        </p>
                        <Link href={`${process.env.NEXT_PUBLIC_URL}/detalis/${doctor.id}`}>
                            <button className="border-sky-800/50 hover:bg-sky-700 hover:text-white border-[2px] w-full rounded-lg p-1 font-bold">
                                Book Now
                            </button>
                    </Link>
                    </div>
                )) : <>
{             [1,2,3,4,5,6,7,8,9,10].map(e=> <Skeleton />)}
                </>}
            </div>
        </div>
    );
}

export default DoctorList;
