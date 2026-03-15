import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Bug, Wind, Info, Zap, Skull } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Anti Rayap',
      desc: 'Perlindungan bangunan dari rayap kayu dan tanah dengan sistem pengumpanan & injeksi.',
      icon: <Bug className="w-8 h-8" />,
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      title: 'Anti Tikus',
      desc: 'Pengendalian hama tikus di area pemukiman dan perkantoran secara tuntas.',
      icon: <Skull className="w-8 h-8" />,
      color: 'from-orange-500/20 to-orange-600/20'
    },
    {
      title: 'Anti Ular',
      desc: 'Penanganan profesional ular yang masuk ke lingkungan rumah agar kembali aman.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-emerald-500/20 to-emerald-600/20'
    },
    {
      title: 'Fogging',
      desc: 'Pembasmian nyamuk dan serangga terbang menggunakan asap khusus yang efektif.',
      icon: <Wind className="w-8 h-8" />,
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      title: 'Pest Control Umum',
      desc: 'Pengemudian kecoa, semut, dan hama permukiman lainnya secara berkala.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-amber-500/20 to-amber-600/20'
    },
    {
      title: 'Disinfektan',
      desc: 'Sterilisasi ruangan dari virus dan bakteri untuk lingkungan yang lebih sehat.',
      icon: <Info className="w-8 h-8" />,
      color: 'from-cyan-500/20 to-cyan-600/20'
    }
  ];

  return (
    <section id="layanan" className="py-32 md:py-48 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full glass border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Layanan Kami
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-text-primary"
          >
            Solusi <span className="text-gradient">Profesional</span> Pembasmi Hama
          </motion.h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-xl leading-relaxed font-medium">
            Kami menyediakan berbagai solusi pengendalian hama yang menggunakan teknologi modern dan metode ramah lingkungan, disesuaikan dengan kebutuhan spesifik properti Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 blur-3xl rounded-full -mr-16 -mt-16 transition-colors group-hover:bg-accent-primary/10" />
              
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <div className="text-text-primary transform transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-5 tracking-tight group-hover:text-accent-primary transition-colors">{service.title}</h3>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed font-medium min-h-[5.5rem]">
                {service.desc}
              </p>
              
              <div className="flex items-center gap-3 text-accent-primary font-bold text-sm">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-primary after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Pelajari Lebih Lanjut
                </span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
