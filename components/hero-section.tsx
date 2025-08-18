import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import { toast, Toaster } from "sonner"
import Buttont from "./Button"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden
         w-full h-full"
    >
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_186_1134)">
            {/* Simplified grid pattern */}
            {[...Array(20)].map((_, i) => (
              <React.Fragment key={`row1-${i}`}>
                <rect
                  x={-20.0891 + i * 36}
                  y="9.2"
                  width="35.6"
                  height="35.6"
                  stroke="hsl(var(--foreground))"
                  strokeOpacity="0.11"
                  strokeWidth="0.4"
                  strokeDasharray="2 2"
                />
                <rect
                  x={-20.0891 + i * 36}
                  y="45.2"
                  width="35.6"
                  height="35.6"
                  stroke="hsl(var(--foreground))"
                  strokeOpacity="0.11"
                  strokeWidth="0.4"
                  strokeDasharray="2 2"
                />
              </React.Fragment>
            ))}

            {/* Accent rectangles */}
            <rect x="699.711" y="81" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.08" />
            <rect x="195.711" y="153" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.09" />
            <rect x="1023.71" y="153" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.09" />
          </g>

          <rect
            x="0.5"
            y="0.5"
            width="1219"
            height="399"
            rx="15.5"
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.06"
          />

          <defs>
            <clipPath id="clip0_186_1134">
              <rect width="1220" height="400" rx="16" fill="hsl(var(--foreground))" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      <Toaster />

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 max-w-2xl px-4">
        <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Get Started With Briefly App
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto">
          Finish Your daily tasks and write your notes on anywhere you want and enjoing with more features in app 
        </p>

        <div className="flex gap-3">
           <Link href="https://expo.dev/artifacts/eas/jwT7bHAXFRH4xkJZzPy5js.apk" download target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#6c63ff] text-[#f3f3f3] hover:bg-[#6c63ff]/90 px-9 py-6 rounded-full font-medium text-lg shadow-lg">
           Download Now
          </Button>
        </Link>

        <Buttont />
        </div>
        
      </div>
    </section>
  )
}
