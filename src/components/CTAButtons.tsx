import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

interface CTAButtonsProps {
  className?: string
  size?: "default" | "lg" | "xl"
  variant?: "stacked" | "inline"
}

export function CTAButtons({ 
  className = "", 
  size = "lg", 
  variant = "inline" 
}: CTAButtonsProps) {
  const containerClass = variant === "stacked" 
    ? "flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4" 
    : "flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"

  return (
    <div className={`${containerClass} ${className}`}>
      <Button
        size={size}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg"
        asChild
      >
        <a 
          href="https://line.me/R/ti/p/@gsupport" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LINEで今すぐ相談する"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          LINEで今すぐ相談
        </a>
      </Button>
      
      <Button
        size={size}
        variant="outline"
        className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
        asChild
      >
        <a 
          href="tel:000-0000-0000" 
          aria-label="電話で相談する"
        >
          <Phone className="mr-2 h-5 w-5" />
          電話する
        </a>
      </Button>
    </div>
  )
}