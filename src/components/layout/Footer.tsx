export default function Footer() {
  return (
    <footer className="bg-onyx text-ivory pt-24 pb-10 px-5 md:px-10 xl:px-24 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="flex flex-col">
            <span className="font-serif text-5xl md:text-7xl tracking-wide uppercase leading-none">HĀVEN</span>
            <span className="text-sm md:text-base tracking-[0.3em] uppercase font-light text-white/70 mt-2">Homes & Estates</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest text-champagne mb-4 font-semibold">Explore</h4>
              {['Projects', 'About', 'Expertise', 'Journal'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm md:text-base font-light text-white/60 hover:text-white hover:translate-x-1 transition-all">
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest text-champagne mb-4 font-semibold">Location</h4>
              {['Kochi', 'Bengaluru', 'Hyderabad'].map((city) => (
                <p key={city} className="text-sm md:text-base font-light text-white/60">
                  {city}
                </p>
              ))}
              <a href="mailto:hello@havenhomes.com" className="mt-4 text-sm md:text-base font-light text-white/60 hover:text-white transition-colors">
                hello@havenhomes.com
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest text-champagne mb-4 font-semibold">Social</h4>
              {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                <a key={social} href="#" className="text-sm md:text-base font-light text-white/60 hover:text-white hover:translate-x-1 transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-xs uppercase tracking-widest text-white/40">
            © 2026 HĀVEN · HOMES & ESTATES
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
