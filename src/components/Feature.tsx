import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface FeatureProps {
  icon: LucideIcon
  title: string
  description: string
  highlight?: string
}

export function Feature({ icon: Icon, title, description, highlight }: FeatureProps) {
  return (
    <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        {highlight && (
          <div className="mx-auto">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
              {highlight}
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}