'use client'
import Hero from "./_components/Hero";
import SearchBar from "./_components/SearchBar";
import DoctorList from "./_components/DoctorList";
import { useEffect, useState } from "react";
import Apis from "./_utlis/Apis";
import Services from "./_components/Services";

export default function Home() {
  const[doctorList,setDoctorList]=useState([])
  useEffect(() => {
    DoctorList_()
  }, [])
  const DoctorList_ = () => {
    Apis.getDoctorList().then((res: any) => {
      setDoctorList(res.data.data);
    })
  }
  return (
    <>
      <Hero />
      <SearchBar />
      <Services/>
      <DoctorList doctorList={doctorList } />
    </>
  );
}
