const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-auto py-3 px-4 border-t border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-xs sm:text-sm xl:text-base text-foreground/80 dark:text-foreground/60">
          <div className="flex flex-col sm:flex-row items-center gap-1 text-center">
            <span>Built from scratch with <span className="text-accent">💚</span></span>
            <span>© Copyright {currentYear}, CitizShrestha.</span>
            <span>ALL Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;