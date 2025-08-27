import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

export function getSubscriptionStatusText(status: string): {
  text: string
  variant: 'default' | 'secondary' | 'destructive' | 'outline'
} {
  switch (status) {
    case 'active':
      return { text: '有効', variant: 'default' }
    case 'past_due':
      return { text: '支払い遅延', variant: 'destructive' }
    case 'canceled':
      return { text: 'キャンセル済み', variant: 'secondary' }
    case 'unpaid':
      return { text: '未払い', variant: 'destructive' }
    case 'incomplete':
      return { text: '不完全', variant: 'outline' }
    default:
      return { text: status, variant: 'outline' }
  }
}