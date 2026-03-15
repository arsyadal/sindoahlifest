import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Locations from './components/Locations';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Mail, Phone, Instagram } from 'lucide-react';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Locations />

      {/* Trust / About Section */}
      <section id="tentang" className="py-32 md:py-48 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-8">
          <div className="glass-card p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] -mr-64 -mt-64 transition-all duration-700 group-hover:bg-accent-primary/10" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-block px-4 py-1.5 rounded-full glass border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-widest mb-8"
                >
                  Tentang Sindo Ahli Pest
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold mb-10 leading-[1.1] tracking-tight text-text-primary"
                >
                  Partner Terpercaya <br />
                  <span className="text-gradient">Pengendalian Hama</span>
                </motion.h2>
                
                <p className="text-xl text-text-secondary mb-12 leading-relaxed max-w-xl font-medium">
                  Sindo Pest Control adalah branch dari **PT. Nestco Solusindo Jaya**, perusahaan jasa yang berdiri sejak tahun 2008. 
                  Kami menggunakan teknologi canggih namun aman bagi kesehatan konsumen serta lingkungan.
                </p>
                
                <div className="flex flex-col gap-8">
                   {[
                     "Tenaga Profesional & Berpengalaman",
                     "Teknologi Ramah Lingkungan",
                     "Solusi Tuntas Ke Akar Masalah"
                   ].map((item, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-center gap-5 group/item"
                     >
                        <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent-primary/20 transition-colors">
                          <ShieldCheck className="text-accent-primary w-6 h-6" />
                        </div>
                        <span className="font-bold text-lg md:text-xl text-text-primary group-hover/item:text-accent-primary transition-colors">{item}</span>
                     </motion.div>
                   ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 rounded-4xl p-12 border border-white/10 glass shadow-2xl relative"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-4xl pointer-events-none" />
                 <h3 className="text-3xl font-extrabold mb-10 text-center font-heading text-text-primary">Tinggalkan Pesan</h3>
                 <form className="space-y-6 relative z-10">
                    <div className="flex flex-col">
                      <label className="form-label">Nama Lengkap</label>
                      <input type="text" placeholder="Contoh: Budi Santoso" className="form-input" />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label">Email</label>
                      <input type="email" placeholder="email@contoh.com" className="form-input" />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label">Pesan Anda</label>
                      <textarea placeholder="Ceritakan masalah hama Anda..." rows="5" className="form-textarea"></textarea>
                    </div>
                    <button className="btn-primary w-full py-5 text-lg font-black uppercase tracking-widest mt-8 shadow-2xl shadow-accent-primary/30">
                      Kirim Pesan Sekarang
                    </button>
                 </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-secondary pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-32">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-10 group">
                <ShieldCheck className="w-12 h-12 text-accent-primary transition-transform group-hover:rotate-12" />
                <span className="font-heading font-black text-3xl tracking-tighter text-text-primary">SINDO AHLI PEST</span>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 font-medium">
                Solusi profesional untuk lingkungan bersih dan aman dari hama pengganggu di seluruh Indonesia.
              </p>
              <div className="flex gap-5">
                {[
                  { icon: <Instagram size={24} />, href: "#" },
                  { icon: <Mail size={24} />, href: "mailto:info@sindoahlipest.com" },
                  { icon: <Phone size={24} />, href: "tel:087810965445" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary hover:-translate-y-1 transition-all duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-sm mb-10 uppercase tracking-[0.3em] text-accent-primary">Layanan Kami</h4>
              <ul className="flex flex-col gap-5 text-base text-text-secondary font-bold">
                {['Anti Rayap', 'Pest Control', 'Fogging Nyamuk', 'Anti Ular'].map((item) => (
                  <li key={item} className="hover:text-accent-primary cursor-pointer transition-all flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/40 group-hover:w-4 group-hover:bg-accent-primary transition-all duration-300" /> 
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
               <h4 className="font-black text-sm mb-10 uppercase tracking-[0.3em] text-accent-primary">Hubungi Kami</h4>
               <ul className="flex flex-col gap-8 text-text-secondary">
                  <li className="flex gap-5 items-center group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-primary/10 transition-colors">
                      <Phone size={20} className="text-accent-primary" />
                    </div>
                    <span className="text-lg font-bold text-text-primary">0878-1096-5445</span>
                  </li>
                  <li className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-primary/10 transition-colors">
                      <MapPin size={20} className="text-accent-primary" />
                    </div>
                    <span className="text-base font-medium leading-relaxed">
                      Layanan Nasional: <br />
                      <span className="text-text-primary font-bold">Jabodetabek, Bali, Surabaya</span>
                    </span>
                  </li>
               </ul>
            </div>
            
            <div>
              <h4 className="font-black text-sm mb-10 uppercase tracking-[0.3em] text-accent-primary">Waktu Operasional</h4>
              <div className="glass-card p-8 border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-xs text-text-muted mb-3 uppercase font-black tracking-widest">Senin - Sabtu</p>
                <p className="text-3xl font-black text-text-primary tracking-tight">08:00 - 17:00</p>
                <div className="mt-6 flex items-center gap-2 text-accent-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Layanan Darurat 24/7</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <p className="text-xs text-text-muted uppercase font-bold tracking-[0.3em]">
              © 2026 Sindo Ahli Pest • PT. Nestco Solusindo Jaya
            </p>
            <div className="flex gap-8 text-[10px] text-text-muted uppercase font-bold tracking-widest">
              <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/6287810965445" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(34,197,94,0.5)] hover:scale-110 hover:-translate-y-2 transition-all group duration-500"
      >
        <div className="absolute bottom-full right-0 mb-6 bg-white text-black px-6 py-3 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest whitespace-nowrap opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-2xl">
          Konsultasi via WhatsApp
          <div className="absolute top-full right-8 border-8 border-transparent border-t-white" />
        </div>
        <svg 
          viewBox="0 0 24 24" 
          width="40" 
          height="40" 
          fill="white" 
          className="drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}

// MapPin icon for footer list
const MapPin = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default App;
