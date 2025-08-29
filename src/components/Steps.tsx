import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface Step {
  number: number
  title: string
  description: string
  icon: LucideIcon
}

interface StepsProps {
  steps: Step[]
  className?: string
}

export function Steps({ steps, className = "" }: StepsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {steps.map((step) => {
        const Icon = step.icon
        return (
          <Card key={step.number} className="relative text-center">
            <CardHeader>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <div className="mx-auto mt-4 mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                {step.description}
              </CardDescription>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}