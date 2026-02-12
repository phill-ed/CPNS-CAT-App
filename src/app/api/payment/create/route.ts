import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

// Midtrans Configuration
const MIDTRANS_CONFIG = {
  serverKey: process.env.MIDTRANS_SERVER_KEY || 'YOUR_SERVER_KEY',
  clientKey: process.env.MIDTRANS_CLIENT_KEY || 'YOUR_CLIENT_KEY',
  isProduction: process.env.NODE_ENV === 'production',
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://app.midtrans.com' 
    : 'https://app.sandbox.midtrans.com'
}

// Price mapping
const PRICES: Record<string, { price: number; name: string }> = {
  'twk': { price: 50000, name: 'TWK - Tes Wawasan Kebangsaan' },
  'tkp': { price: 50000, name: 'TKP - Tes Karakteristik Pribadi' },
  'pu': { price: 50000, name: 'PU - Tes Intelegensi Umum' },
  'all': { price: 100000, name: 'Full Package (TWK + TKP + PU)' },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, birthdate, phone, testId } = body

    // Validate input
    if (!name || !email || !birthdate || !testId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const test = PRICES[testId]
    if (!test) {
      return NextResponse.json(
        { error: 'Invalid test ID' },
        { status: 400 }
      )
    }

    // Generate unique order ID
    const orderId = `CAT-${Date.now()}-${uuidv4().slice(0, 8).toUpperCase()}`

    // Create transaction
    const transaction = {
      transaction_details: {
        order_id: orderId,
        gross_amount: test.price
      },
      customer_details: {
        first_name: name.split(' ')[0],
        last_name: name.split(' ').slice(1).join(' ') || '',
        email: email,
        phone: phone || '',
        birthdate: birthdate
      },
      item_details: [
        {
          id: testId,
          name: test.name,
          price: test.price,
          quantity: 1
        }
      ],
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?order_id=${orderId}`,
        error: `${process.env.NEXT_PUBLIC_APP_URL}/payment/error?order_id=${orderId}`,
        pending: `${process.env.NEXT_PUBLIC_APP_URL}/payment/pending?order_id=${orderId}`
      }
    }

    // Call Midtrans API
    const response = await fetch(`${MIDTRANS_CONFIG.baseUrl}/snap/v1/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(MIDTRANS_CONFIG.serverKey + ':').toString('base64')}`
      },
      body: JSON.stringify(transaction)
    })

    const data = await response.json()

    if (data.token) {
      // Store session info (in production, save to database)
      // For now, we'll pass it via the redirect
      
      return NextResponse.json({
        success: true,
        paymentUrl: `${MIDTRANS_CONFIG.baseUrl}/snap/v2/token?token=${data.token}`,
        orderId: orderId
      })
    } else {
      console.error('Midtrans error:', data)
      return NextResponse.json(
        { error: 'Failed to create payment' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Payment creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
