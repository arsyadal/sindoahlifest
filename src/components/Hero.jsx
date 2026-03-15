import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bug, Zap } from 'lucide-react';
import heroImage from '../assets/images/modern_pest_control_hero.webp';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-[13rem] pb-24 overflow-hidden">
      <div className="glow-mesh" />
      
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-white/10 mb-10">
              <ShieldCheck className="w-4 h-4 text-accent-primary" />
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-accent-primary">Terpercaya Sejak 2008</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tight text-text-primary">
              Wujudkan Hunian <br />
              <span className="text-gradient">Bebas Hama</span> <br />
              Bersama Kami.
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-xl leading-relaxed font-medium">
              Sindo Ahli Pest menyediakan solusi pengendalian hama profesional untuk rumah dan bisnis Anda. 
              Mulai dari rayap hingga ular, kami tuntas hingga ke akarnya.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-20">
              <button className="btn-primary px-10 py-5 text-lg font-bold shadow-xl shadow-accent-primary/20 hover:shadow-accent-primary/40 transition-all">
                Konsultasi Gratis
              </button>
              <button className="btn-outline px-10 py-5 text-lg font-bold hover:bg-white/10 transition-all">
                Layanan Kami
              </button>
            </div>
            
            <div className="flex flex-wrap gap-12 md:gap-20 border-t border-white/10 pt-16">
              <div className="flex flex-col group cursor-default">
                <div className="flex items-center gap-4 mb-3 transition-transform group-hover:translate-x-1">
                  <Bug className="w-8 h-8 text-accent-secondary" />
                  <span className="text-4xl font-bold font-heading text-text-primary">15+</span>
                </div>
                <p className="text-[0.65rem] text-text-muted uppercase tracking-[0.2em] font-bold">Tahun Pengalaman</p>
              </div>
              
              <div className="flex flex-col group cursor-default">
                <div className="flex items-center gap-4 mb-3 transition-transform group-hover:translate-x-1">
                  <Zap className="w-8 h-8 text-accent-primary" />
                  <span className="text-4xl font-bold font-heading text-text-primary">1k+</span>
                </div>
                <p className="text-[0.65rem] text-text-muted uppercase tracking-[0.2em] font-bold">Klien Puas</p>
              </div>
              
              <div className="flex flex-col group cursor-default">
                <div className="flex items-center gap-4 mb-3 transition-transform group-hover:translate-x-1">
                  <ShieldCheck className="w-8 h-8 text-green-500" />
                  <span className="text-4xl font-bold font-heading text-text-primary">24/7</span>
                </div>
                <p className="text-[0.65rem] text-text-muted uppercase tracking-[0.2em] font-bold">Layanan Darurat</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block perspective-1000"
          >
            <div className="relative z-10 rounded-4xl overflow-hidden glass border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] group">
              <img 
                src={heroImage} 
                alt="Sindo Ahli Pest" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-secondary/10 blur-[100px] rounded-full animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

