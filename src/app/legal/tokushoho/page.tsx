import { MarkdownRenderer } from '@/components/MarkdownRenderer'
import { readFileSync } from 'fs'
import { join } from 'path'

export const metadata = {
  title: '特定商取引法に基づく表記 | Gサポ',
  description: '特定商取引法に基づく表記',
}

export default function TokushohoPage() {
  const content = readFileSync(join(process.cwd(), 'src/content/tokushoho.md'), 'utf8')

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">特定商取引法に基づく表記</h1>
        </div>
        
        <div className="bg-card rounded-lg border p-8">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  )
}