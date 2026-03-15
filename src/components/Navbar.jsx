import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-9 h-9 text-accent-primary shrink-0 transition-transform hover:rotate-12" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl leading-none tracking-tight text-text-primary">SINDO AHLI PEST</span>
            <span className="text-[0.65rem] font-medium text-text-secondary tracking-[0.2em] uppercase">Premium Pest Control</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-text-primary/80 hover:text-accent-primary transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="https://wa.me/6287810965445" className="btn-primary flex items-center gap-2.5 px-6 py-3 text-sm">
            <Phone className="w-4 h-4" />
            <span className="tracking-wide">0878-1096-5445</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:087810965445" className="p-2.5 rounded-full glass border-white/10 text-accent-primary">
            <Phone className="w-5 h-5" />
          </a>
          <button 
            className="p-2 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="md:hidden glass border-t border-white/10 origin-top"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-bold text-text-primary py-2 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <Shield className="w-5 h-5 text-accent-primary opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </a>
              ))}
              <a href="https://wa.me/6287810965445" className="btn-primary w-full text-center py-4 mt-4 text-lg font-bold">
                Hubungi Kami Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
