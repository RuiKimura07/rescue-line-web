import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { createCheckoutSession, createOrRetrieveCustomer, PLANS } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const { priceId } = await req.json()
    
    // 指定されたpriceIdが有効かチェック
    if (priceId !== PLANS.basic.priceId) {
      return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 })
    }
    
    const userId = (session.user as any).id
    
    // Stripe顧客を作成または取得
    const customerId = await createOrRetrieveCustomer(
      userId,
      session.user.email,
      session.user.name
    )
    
    // チェックアウトセッションを作成
    const checkoutSession = await createCheckoutSession(
      customerId,
      priceId,
      userId
    )
    
    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}