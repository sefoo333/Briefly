import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function QuickCTA() {
  return (
    <div className="text-center">
      {/* <Badge variant="secondary" className="mb-4">
        Join 10,000+ developers
      </Badge> */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a
      href="https://expo.dev/artifacts/eas/bEyUDAxP8r83eJXoGV8oWs.apk"
      download
      target="_blank"
      rel="noopener noreferrer"
    >
        <Button size="lg" className="bg-[#6c63ff] text-[#f3f3f3] hover:bg-[#6c63ff]/90">
          Download Now
        </Button>
     </a>
        <Button variant="outline" size="lg">
          View Demo
        </Button>
      </div>
    </div>
  )
}
