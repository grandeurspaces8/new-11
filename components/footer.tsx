export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-6 md:pb-6 pb-52">
      <div className="container mx-auto px-4 text-center">
        <a
          href="https://www.topsuite.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-xl hover:text-primary transition-colors duration-300 inline-block"
        >
          تم التصميم والتطوير بواسطة <span className="text-primary font-semibold">Top Suite</span>
        </a>
      </div>
    </footer>
  )
}
