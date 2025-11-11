export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-mono text-sm md:text-base">
          <a
            href="https://x.com/0merskywalker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-elevate px-3 py-1 rounded-md"
            data-testid="link-twitter"
          >
            follow me on <span className="text-[#1da1f2]">Twitter</span>
          </a>
          
          <span className="hidden md:inline text-muted-foreground">•</span>
          
          <a
            href="https://bitcoin.org/bitcoin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-elevate px-3 py-1 rounded-md"
            data-testid="link-whitepaper"
          >
            study <span className="text-primary">freedom money</span>
          </a>
        </div>
        
        <p className="mt-6 text-xs text-muted-foreground" data-testid="text-copyright">
          Built to debunk Bitcoin FUD, one myth at a time
        </p>
      </div>
    </footer>
  );
}
