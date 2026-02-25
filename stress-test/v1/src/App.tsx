import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Anchor, Sword, Dumbbell, ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Placeholder for the actual logo image */}
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-wider text-white uppercase">
              Sandbag <span className="text-brand-gold">Asia</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-zinc-300 hover:text-brand-gold transition-colors font-medium text-sm uppercase tracking-wider">About</a>
            <a href="#programs" className="text-zinc-300 hover:text-brand-gold transition-colors font-medium text-sm uppercase tracking-wider">Programs</a>
            <a href="#facility" className="text-zinc-300 hover:text-brand-gold transition-colors font-medium text-sm uppercase tracking-wider">Facility</a>
            <button className="bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 rounded font-display tracking-wide uppercase text-sm transition-colors">
              Join the Ranks
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-zinc-300 hover:text-brand-gold font-medium uppercase tracking-wider text-sm">About</a>
            <a href="#programs" className="block px-3 py-2 text-zinc-300 hover:text-brand-gold font-medium uppercase tracking-wider text-sm">Programs</a>
            <a href="#facility" className="block px-3 py-2 text-zinc-300 hover:text-brand-gold font-medium uppercase tracking-wider text-sm">Facility</a>
            <button className="w-full text-left bg-brand-red text-white px-3 py-2 rounded font-display tracking-wide uppercase text-sm mt-4">
              Join the Ranks
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
          alt="Gym Training" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-brand-gold"></div>
            <span className="text-brand-gold font-display tracking-[0.2em] uppercase text-sm md:text-base">Elite Training Facility</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tight mb-6 text-white">
            Forge Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Legacy</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl font-sans font-light leading-relaxed">
            Inspired by martial traditions and military conditioning. Sandbag Asia is where raw strength meets tactical endurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded font-display tracking-wider uppercase text-lg transition-all flex items-center justify-center gap-2 group">
              Start Training
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 hover:border-brand-gold hover:text-brand-gold text-white px-8 py-4 rounded font-display tracking-wider uppercase text-lg transition-all flex items-center justify-center">
              View Schedule
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Philosophy = () => {
  const pillars = [
    {
      icon: <Anchor className="w-8 h-8 text-brand-navy" />,
      title: "Unbreakable Foundation",
      desc: "Build core stability and raw power. Like an anchor, you will remain immovable in the face of adversity."
    },
    {
      icon: <Sword className="w-8 h-8 text-brand-red" />,
      title: "Combat Ready",
      desc: "Agility, speed, and tactical fitness. Train your body to move with precision and lethal efficiency."
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-brand-gold" />,
      title: "Iron Endurance",
      desc: "Push beyond your perceived limits. High-intensity conditioning that forges an iron will."
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">The Sandbag <span className="text-brand-gold">Code</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-sans">Our training methodology is built on three core pillars, inspired by the strength of the dragon and the discipline of the armed forces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-zinc-900 border border-white/5 p-8 rounded-xl hover:border-brand-red/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">{pillar.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Strength & Power",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
      desc: "Heavy lifting, powerlifting, and strongman training to build absolute strength."
    },
    {
      title: "Tactical Conditioning",
      image: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=800&auto=format&fit=crop",
      desc: "Military-inspired circuits, sandbag carries, and high-intensity interval training."
    },
    {
      title: "Combat Arts",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
      desc: "Striking, grappling, and functional martial arts for self-defense and fitness."
    }
  ];

  return (
    <section id="programs" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">Training <span className="text-brand-red">Divisions</span></h2>
            <p className="text-zinc-400 max-w-xl font-sans">Choose your path. Whether you want to lift heavy, move fast, or learn to fight, we have a program forged for you.</p>
          </div>
          <button className="text-brand-gold hover:text-white font-display uppercase tracking-wider text-sm flex items-center gap-2 transition-colors">
            View Full Schedule <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-96 rounded-xl overflow-hidden cursor-pointer"
            >
              <img 
                src={prog.image} 
                alt={prog.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-display font-bold uppercase tracking-wide mb-2 text-white">{prog.title}</h3>
                <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{prog.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-red">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-6">
          Ready to join the ranks?
        </h2>
        <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
          Stop making excuses. Start making progress. Claim your 3-day trial pass and experience the Sandbag Asia difference.
        </p>
        <button className="bg-zinc-950 hover:bg-black text-white px-10 py-5 rounded font-display tracking-widest uppercase text-lg transition-all shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
          Claim Your Trial Pass
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                <Shield className="text-white w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white uppercase">
                Sandbag <span className="text-brand-gold">Asia</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-6 text-sm leading-relaxed">
              Premium functional fitness and combat conditioning facility. We build stronger, faster, and more resilient individuals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-navy transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span>123 Fitness Boulevard,<br />Central District, Asia 10000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span>info@sandbagasia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            &copy; {new Date().getFullYear()} Sandbag Asia. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Programs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
