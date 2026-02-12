import { NextRequest, NextResponse } from 'next/server'

const MIDTRANS_CONFIG = {
  serverKey: process.env.MIDTRANS_SERVER_KEY || 'YOUR_SERVER_KEY',
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://api.midtrans.com' 
    : 'https://api.sandbox.midtrans.com'
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const orderId = searchParams.get('order_id')

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID required' },
        { status: 400 }
      )
    }

    // Check transaction status from Midtrans
    const response = await fetch(`${MIDTRANS_CONFIG.baseUrl}/v2/${orderId}/status`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(MIDTRANS_CONFIG.serverKey + ':').toString('base64')}`
      }
    })

    const data = await response.json()

    return NextResponse.json({
      success: true,
      transactionStatus: data.transaction_status,
      orderId: orderId
    })
  } catch (error) {
    console.error('Status check error:', error)
    return NextResponse.json(
      { error: 'Failed to check status' },
      { status: 500 }
    )
  }
}
