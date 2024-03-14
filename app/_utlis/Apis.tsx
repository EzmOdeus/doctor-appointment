import axios from "axios";
import { env } from "process";

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_URL
const API_PATH = process.env.NEXT_PUBLIC_API_PATH

const axiosClient = axios.create({
    baseURL: API_PATH,
    headers: {
        "Authorization":`Bearer ${API_KEY}`
    }
})

const getCategory = () => axiosClient.get('categories?populate=*')
const getDoctorList = () => axiosClient.get('doctors?populate=*')
const getDoctorById = (id:number) => axiosClient.get(`doctors/${id}?populate=*`)
const getDoctorByCategory = (category: string) => axiosClient.get(`doctors?filters[categories] [Name] [$in]=${category}&populate=*&sort[0]=id:desc`)
const booking = (data: any) => axiosClient.post('appointments', data)
const sendEmail = (data: any) => axios.post('/api/Email', data)
const UserEmail = (Useremail: any) => axiosClient.get(`appointments?filters[Email][$eq]=${Useremail}&populate[doctor][populate][image][populate][0]=url&populate=*`)
const DeleteBooking=(id:number)=>axiosClient.delete(`appointments/${id}`)
export default {
    getCategory,
    getDoctorList,
    getDoctorByCategory,
    getDoctorById,
    booking,
    sendEmail,
    UserEmail,
    DeleteBooking
}