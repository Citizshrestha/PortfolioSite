const Footer = () => {
  return (
    <footer className="w-full h-[40px] px-4 border-t border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 xl:text-xl sm:text-sm text-foreground/80 dark:text-foreground/60">
          <div className="flex items-center gap-1 xl:pt-10 pt-5 flex-wrap justify-center">
            <span className="xl:pl-45">Built from scratch with <span className="text-accent">💚</span> </span>
             <span>© Copyright 2025, CitizShrestha.</span>
            <span> ALL Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;