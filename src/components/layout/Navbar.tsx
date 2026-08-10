import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = ['Projects', 'About', 'Expertise', 'Journal'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-5 transition-all duration-500',
          isScrolled
            ? 'bg-onyx/90 backdrop-blur-md text-ivory py-4 border-b border-white/10'
            : 'bg-transparent text-white'
        )}
      >
        <div className="flex flex-col">
          <span className="font-serif text-2xl tracking-wide uppercase leading-none">HĀVEN</span>
          <span className="text-[10px] tracking-widest uppercase font-light text-white/70">Homes & Estates</span>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm uppercase tracking-wider font-light hover:text-champagne transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="text-sm uppercase tracking-wider font-medium px-6 py-2 border border-white/30 hover:border-champagne hover:text-champagne transition-colors">
            Enquire
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-onyx text-ivory flex flex-col justify-center px-10"
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-5xl uppercase hover:text-champagne transition-colors"
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-5xl uppercase hover:text-champagne transition-colors"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
