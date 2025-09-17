const Footer = () => {
  return <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-muted mb-4 md:mb-0">
            © 2024 Vinicius Ramos. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/vrpdesigner/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-hero-primary transition-smooth">
              Instagram
            </a>
            
            <a href="https://www.behance.net/viniciusramosdoprado" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-hero-primary transition-smooth">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;