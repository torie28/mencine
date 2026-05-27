"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 2000, suffix: "+", label: "Young Girls Reached", description: "Through regional school programs" },
  { value: 10, suffix: "kg", label: "Daily Capacity", description: "Per unit processing power" },
  { value: 30, suffix: "min", label: "Cycle Time", description: "Complete waste destruction" },
  { value: 100, suffix: "%", label: "BRELA Registered", description: "Fully compliant entity" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Market Traction</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Social Impact & Validation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mencine combines social impact with business scalability. We have aggressively tested our product 
            market assumptions, yielding extensive ecosystem validation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-lg font-semibold text-foreground mt-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
              
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg group-hover:border-primary/40 transition-colors" />
            </div>
          ))}
        </div>

        {/* Awards Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Corporate Accolades</h3>
              <p className="text-muted-foreground">
                Honored with prestigious national recognition for innovation in environmental technology.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <div className="bg-background rounded-xl px-6 py-4 shadow-md">
                <p className="font-bold text-foreground">Mwanamke Kinara</p>
                <p className="text-sm text-muted-foreground">Innovation Award</p>
              </div>
              <div className="bg-background rounded-xl px-6 py-4 shadow-md">
                <p className="font-bold text-foreground">Malkia wa Nguvu</p>
                <p className="text-sm text-muted-foreground">2023 Winner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
