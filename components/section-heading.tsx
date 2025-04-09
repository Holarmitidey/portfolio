interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-2 inline-block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto mt-4">{subtitle}</p>}
      <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
    </div>
  )
}
