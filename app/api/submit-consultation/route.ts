import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with error handling
const sendgridApiKey = process.env.SENDGRID_API_KEY
if (!sendgridApiKey) {
  throw new Error("SENDGRID_API_KEY is not defined in environment variables")
}

sgMail.setApiKey(sendgridApiKey)

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'default@example.com'
const VERIFIED_SENDER = process.env.VERIFIED_SENDER || 'noreply@example.com'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const emailText = `
      New Consultation Request for ${data.disease}

      Patient Details:
      ---------------
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Age: ${data.age}
      
      Medical Information:
      -------------------
      Disease: ${data.disease}
      Duration of Symptoms: ${data.duration}
      
      Symptoms Description:
      -------------------
      ${data.symptoms}
      
      This request was submitted on ${new Date().toLocaleString()}
    `

    try {
      await sgMail.send({
        to: ADMIN_EMAIL,
        from: VERIFIED_SENDER,
        subject: `New Consultation Request - ${data.disease}`,
        text: emailText,
        html: emailText.replace(/\n/g, '<br>'),
      })
      return NextResponse.json({ success: true })
    } catch (error: any) {
      console.error('SendGrid error:', error?.response?.body || error)
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Consultation submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit consultation request' },
      { status: 500 }
    )
  }
} 