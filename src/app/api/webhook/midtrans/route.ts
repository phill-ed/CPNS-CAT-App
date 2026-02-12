import { NextRequest, NextResponse } from 'next/server'

const MIDTRANS_CONFIG = {
  serverKey: process.env.MIDTRANS_SERVER_KEY || 'YOUR_SERVER_KEY'
}

// Verify Midtrans signature
function verifySignature(orderId: string, statusCode: string, grossAmount: string, signatureKey: string): boolean {
  const crypto = require('crypto')
  const input = `${orderId}${statusCode}${grossAmount}${MIDTRANS_CONFIG.serverKey}`
  const expectedSignature = crypto.createHash('sha512').update(input).digest('hex')
  return signatureKey === expectedSignature
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { order_id, transaction_status, gross_amount, signature_key } = body

    // Verify signature
    if (signature_key && !verifySignature(order_id, body.status_code, gross_amount, signature_key)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 403 }
      )
    }

    console.log(`Midtrans Webhook: Order ${order_id} - ${transaction_status}`)

    // Handle different transaction statuses
    switch (transaction_status) {
      case 'settlement':
      case 'capture':
        // Payment successful - send results email
        await sendResultsEmail(order_id)
        break
      case 'pending':
        // Payment pending
        break
      case 'deny':
      case 'expire':
      case 'cancel':
        // Payment failed - handle accordingly
        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function sendResultsEmail(orderId: string) {
  // In production, fetch user data and results from database
  // Then send email with results
  
  console.log(`Sending results email for order: ${orderId}`)
  
  // Email sending logic would go here
  // Use nodemailer or email service like Resend, SendGrid, etc.
}
