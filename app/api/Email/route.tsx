import { Resend } from 'resend';

import { NextResponse } from 'next/server';
import EmailTemp from '@/emails';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: any) {
    const response = await req.json()
    console.log(response)
    try {
        const data = await resend.emails.send({
            from: 'spider@resend.dev',
            to: [response.data.Email],
            subject: 'Booking Done',
            react: EmailTemp({ response })
        });
        return NextResponse.json({data})
    } catch (err) {
      return  NextResponse.json({err})
    }
}