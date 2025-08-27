import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export const PLANS = {
  basic: {
    id: 'basic',
    name: 'Gサポ ベーシックプラン',
    description: '困ったときの身近なレスキュー',
    price: 500,
    currency: 'jpy',
    interval: 'month' as const,
    priceId: process.env.STRIPE_PRICE_ID!,
  },
}

export async function createCheckoutSession(
  customerId: string,
  priceId: string,
  userId: string,
) {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXTAUTH_URL}/mypage?success=true`,
    cancel_url: `${process.env.NEXTAUTH_URL}/pricing?canceled=true`,
    metadata: {
      userId,
    },
  })

  return session
}

export async function createCustomerPortalSession(customerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXTAUTH_URL}/mypage`,
  })

  return session
}

export async function createOrRetrieveCustomer(
  userId: string,
  email?: string | null,
  name?: string | null,
) {
  const { prisma } = await import('./db')
  
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })

  if (user?.stripeCustomerId) {
    return user.stripeCustomerId
  }

  // Stripe顧客を新規作成
  const customer = await stripe.customers.create({
    email: email || undefined,
    name: name || undefined,
    metadata: {
      userId,
    },
  })

  // DBに顧客IDを保存
  await prisma.user.update({
    where: { id: userId },
    data: { stripeCustomerId: customer.id },
  })

  return customer.id
}