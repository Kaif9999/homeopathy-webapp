import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Make sure your SENDGRID_API_KEY starts with "SG."
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
if (!SENDGRID_API_KEY?.startsWith('SG.')) {
  throw new Error('Invalid SendGrid API key format. Must start with "SG."')
}

sgMail.setApiKey(SENDGRID_API_KEY)

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'kaifmohd5000@gmail.com'
const VERIFIED_SENDER = process.env.VERIFIED_SENDER || 'your-verified@email.com'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const emailContent = `
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
        from: VERIFIED_SENDER, // Must be verified in SendGrid
        subject: `New Consultation Request - ${data.disease}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
      })
      return NextResponse.json({ success: true })
    } catch (emailError: any) {
      console.error('SendGrid error:', emailError?.response?.body || emailError)
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