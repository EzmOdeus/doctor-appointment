import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Apis from '../_utlis/Apis'
import { toast } from '@/components/ui/use-toast'

function Booking({doctor}:any) {

    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [TimeSlot, setTimeSlot]: any = useState([])
    const [selectedtime, setslectedtime] = useState()
    const [note, setnote] = useState('')
    console.log(note)
    const {user}=useKindeBrowserClient()
    useEffect(() => { gettimme() }, [])
    const ispastday = (day:any) => {
        return day<new Date()
    }
    const saveBooking = () => {
        const data = {
            data: {
                UserName: user?.given_name + ' ' + user?.family_name,
                Email: user?.email,
                Date: date,
                Time: selectedtime,
                doctor: doctor.id,
                Note:note
            }
        }
        Apis.booking(data).then((res: any) => {
            if (res) {
                Apis.sendEmail(data).then((res:any) => {
                    console.log(res)
                })
                toast({
                    title:'Booking Confirmation sent on Email'
                })
            }
        })
    }
    const gettimme = () => {
        const timeList = []
        for (let index = 10; index <=12; index++) {
            timeList.push({
                time:index+':00 AM'
            })
            timeList.push({
                time:index+':30 AM'
            })
            
        }
        for (let index = 1; index <=6; index++) {
            timeList.push({
                time:index+':00 AM'
            })
            timeList.push({
                time:index+':30 AM'
            })
            
        }
        setTimeSlot(timeList)
    }
    return (
        <Dialog>
            <DialogTrigger className='w-full text-center md:w-[40%] pt-3'><button
                type="button"
                className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >Booking now
            </button>
  </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Booking Now</DialogTitle>
                    <DialogDescription>
                        <div className="flex">    <Calendar
                            mode="single"
                            selected={date}
                            
                            disabled={ispastday}
                            onSelect={setDate}
                            className="rounded-md border "
                        />
                            <div className="grid cursor-pointer grid-cols-2 gap-4 m-2">
                            {TimeSlot.map((item: any, index: number) => (
                                <h2 className={`${item.time== selectedtime &&'bg-sky-800 text-white'} p-1 rounded-lg`} onClick={()=>setslectedtime(item.time)} key={index}>{item.time}</h2>))}
                        </div>
                        </div>
                    </DialogDescription>
                    <Textarea onChange={(event) => setnote(event.target.value)}/>

                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                            <Button onClick={()=>saveBooking()} type="button" disabled={!(date && selectedtime)}>
                                submit
                            </Button></>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default Booking