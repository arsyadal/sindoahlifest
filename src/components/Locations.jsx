import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Locations = () => {
  const branches = [
    { city: 'Bekasi (Pusat)', address: 'Jln. Raya Jati Mulya No. 1, Kec. Tambun Selatan' },
    { city: 'Tangerang', address: 'Perum Pondok Arum Blok G,9 No.20 Rt 02 Rw 05' },
    { city: 'Cikarang', address: 'Jln. Fatahilah km 49 No. 23, Cikarang Barat' },
    { city: 'Karawang', address: 'Jln. Buana taman sari No E.217-21 Jln.baru' },
    { city: 'Bali', address: 'Jalan baru indah gang 4 no 6, Kuta Utara, Badung' },
    { city: 'Surabaya', address: 'Jl. Pagesangan No. 1, Kec. Jambangan, Surabaya' }
  ];

  return (
    <section id="lokasi" className="py-32 md:py-48 bg-bg-secondary/50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 rounded-full glass border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-widest mb-8"
            >
              Cakup Wilayah
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-10 leading-[1.1] tracking-tight text-text-primary"
            >
              Hadir di <br />
              <span className="text-gradient">Kota-Kota Besar</span> <br />
              Indonesia
            </motion.h2>
            <p className="text-text-secondary mb-16 text-xl leading-relaxed max-w-xl font-medium">
              Sindo Ahli Pest terus memperluas jangkauan layanan untuk memastikan setiap sudut Indonesia mendapatkan perlindungan hama terbaik dengan standar internasional.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {branches.map((branch, index) => (
                <motion.div 
                  key={branch.city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-5 p-7 rounded-[2rem] glass border-white/5 hover:border-accent-primary/50 transition-all duration-300 shadow-xl group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                    <MapPin className="w-7 h-7 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-primary">{branch.city}</h4>
                    <p className="text-[0.75rem] text-text-muted mt-2.5 leading-relaxed font-medium">{branch.address}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-square glass rounded-4xl overflow-hidden flex items-center justify-center border-white/10 p-6 shadow-2xl">
              <div className="w-full h-full rounded-3xl bg-bg-tertiary relative flex items-center justify-center overflow-hidden">
                {/* Abstract Map Representation */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-110 transition-transform duration-1000" />
                <div className="relative z-10 text-center transform transition-transform duration-700 group-hover:scale-110">
                    <div className="w-24 h-24 bg-accent-primary/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    <MapPin className="w-20 h-20 text-accent-primary mx-auto mb-6 drop-shadow-glow" />
                    <span className="text-3xl font-extrabold font-heading text-text-primary block">6+ Cabang</span>
                    <span className="text-sm text-text-secondary uppercase tracking-[0.3em] font-bold mt-2 block">Melayani Nasional</span>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute -bottom-8 -right-8 glass-card p-8 border-white/20 hidden md:block shadow-2xl backdrop-blur-2xl"
            >
               <p className="text-accent-secondary font-black text-2xl leading-none mb-1 tracking-tight">Safe & Secure</p>
               <p className="text-text-secondary text-[0.75rem] font-bold uppercase tracking-widest">All Indonesia Coverage</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
