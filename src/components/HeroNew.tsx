import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Sparkles, Play, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function HeroNew() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle system */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              background: i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#a78bfa' : '#ec4899',
            }}
            animate={{
              y: [0, Math.random() * -200 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5 + Math.random() * 2, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content with parallax */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-6 py-32 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Badge with magnetic effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 150,
              damping: 20,
              delay: 0.5 
            }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-xl cursor-hover relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-semibold relative z-10">
              Media Designer & Visual Storyteller
            </span>
          </motion.div>

          {/* Animated name with text reveal */}
          <div className="mb-8 overflow-hidden">
            <motion.h1
              className="mb-0 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, type: 'spring', stiffness: 100 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 0 30px rgba(34, 211, 238, 0.5)',
                }}
                style={{
                  x: mousePosition.x * 0.3,
                  y: mousePosition.y * 0.3,
                }}
              >
                Rudra Raval
              </motion.span>
            </motion.h1>
          </div>

          {/* Description with word animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            <motion.span whileHover={{ color: '#22d3ee', scale: 1.05 }} className="inline-block mx-1">
              Creating
            </motion.span>
            <motion.span whileHover={{ color: '#a78bfa', scale: 1.05 }} className="inline-block mx-1">
              stunning
            </motion.span>
            <motion.span whileHover={{ color: '#ec4899', scale: 1.05 }} className="inline-block mx-1">
              visual
            </motion.span>
            <motion.span whileHover={{ color: '#22d3ee', scale: 1.05 }} className="inline-block mx-1">
              experiences
            </motion.span>
            <span className="mx-1">through</span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="inline-block mx-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold"
            >
              video editing
            </motion.span>
            <span className="mx-1">&</span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="inline-block mx-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold"
            >
              motion graphics
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="inline-block mt-4"
            >
              From <motion.span whileHover={{ scale: 1.1, color: '#22d3ee' }} className="inline-block font-semibold">Ahmedabad</motion.span> to <motion.span whileHover={{ scale: 1.1, color: '#a78bfa' }} className="inline-block font-semibold">Toronto</motion.span>
            </motion.span>
          </motion.div>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full overflow-hidden cursor-hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-3 text-lg font-semibold">
                <Play className="w-5 h-5" />
                Explore My Work
              </span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
                }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#22d3ee' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-cyan-500/50 rounded-full hover:bg-cyan-500/10 transition-all backdrop-blur-sm cursor-hover text-lg font-semibold flex items-center gap-3 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-24 cursor-pointer cursor-hover"
            onClick={scrollToAbout}
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              className="inline-flex flex-col items-center gap-2"
            >
              <span className="text-cyan-400 text-sm">Scroll to explore</span>
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 3D floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl backdrop-blur-sm border border-cyan-500/20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          x: mousePosition.x * -1,
          y: mousePosition.y * -1,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full backdrop-blur-sm border border-purple-500/20"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          x: mousePosition.x * 1.5,
          y: mousePosition.y * 1.5,
        }}
      />
    </section>
  );
}
