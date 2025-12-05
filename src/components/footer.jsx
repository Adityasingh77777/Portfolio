export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Aditya Kumar Singh. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Built with <span className="text-primary">React</span> & <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
