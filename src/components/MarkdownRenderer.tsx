import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // 環境変数を置換する
  const processedContent = content
    .replace(/\$\{COMPANY_NAME\}/g, process.env.COMPANY_NAME || '〇〇合同会社')
    .replace(/\$\{COMPANY_REPRESENTATIVE\}/g, process.env.COMPANY_REPRESENTATIVE || '代表者名')
    .replace(/\$\{COMPANY_ADDRESS\}/g, process.env.COMPANY_ADDRESS || '東京都〇〇区...')
    .replace(/\$\{COMPANY_EMAIL\}/g, process.env.COMPANY_EMAIL || 'support@example.com')
    .replace(/\$\{COMPANY_PHONE\}/g, process.env.COMPANY_PHONE || '03-xxxx-xxxx')
    .replace(/\$\{REFUND_POLICY_NOTE\}/g, process.env.REFUND_POLICY_NOTE || '返金について詳しくは利用規約をご確認ください')

  return (
    <div className="prose prose-slate max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {processedContent}
      </ReactMarkdown>
    </div>
  )
}