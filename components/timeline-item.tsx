import { Badge } from "@/components/ui/badge"

interface TimelineItemProps {
  title: string
  organization: string
  date: string
  description: string
  link?: string
  tags?: string[]
}

export function TimelineItem({ title, organization, date, description, link, tags }: TimelineItemProps) {
  return (
    <div className="mb-12 ml-6 relative">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-10 ring-8 ring-background">
        <span className="w-3 h-3 bg-background rounded-full"></span>
      </span>
      <div className="p-4 border rounded-lg shadow-sm bg-card hover:shadow-md transition-shadow">
        <div className="flex flex-wrap justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <Badge variant="outline" className="text-xs">
            {date}
          </Badge>
        </div>
        <p className="font-medium text-primary mb-2">{organization}</p>
        <p className="text-muted-foreground mb-4">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-medium text-primary hover:underline"
          >
            View Organization →
          </a>
        )}
      </div>
    </div>
  )
}
