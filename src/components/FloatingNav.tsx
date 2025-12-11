import { motion, useScroll, useTransform } from 'motion/react';
import { Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingNav() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.05], [100, 0]);

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 max-w-[95vw]"
    >
      <motion.div
        initial={{ scale: 0.8, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-zinc-900/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-cyan-500/10 overflow-x-auto scrollbar-hide"
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className={`relative px-3 sm:px-4 py-2 rounded-full transition-all cursor-hover group flex-shrink-0 ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">{item.label}</span>
            </span>
          </motion.button>
        ))}
        
        {/* Progress indicator */}
        <div className="ml-2 pl-2 border-l border-white/10 hidden lg:block flex-shrink-0">
          <div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 origin-left"
            />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}