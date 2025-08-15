import { Card } from "@/components/ui/card"

export function CompactFeatures() {
  const features = [
    {
      title: "Write with tools editor",
      description: "your tools you want in note",
      icon: "🎨",
    },
    {
      title: "Sync Data",
      description: "Sync Data anywhere in seconds",
      icon: "🚀",
    },
    {
      title: "Smart Analytics",
      description: "Track performance insights",
      icon: "📊",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <Card key={index} className="p-4 bg-card/50 border-border/50 backdrop-blur-sm">
          <div className="text-2xl mb-2">{feature.icon}</div>
          <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </Card>
      ))}
    </div>
  )
}
