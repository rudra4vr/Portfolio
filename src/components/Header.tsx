import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-orange-200/50 dark:border-cyan-500/30 rounded-full shadow-lg hover:shadow-xl transition-all cursor-hover"
        >
          {/* Logo/Icon */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-10 h-10 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.div>

          {/* Name */}
          <div className="flex flex-col items-start">
            <motion.span
              className="font-bold text-lg bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Rudra Raval
            </motion.span>
            <span className="text-xs text-orange-600/70 dark:text-cyan-400/70">
              Media Designer
            </span>
          </div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-pink-500/20 to-purple-500/20 dark:from-cyan-400/20 dark:via-blue-500/20 dark:to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
          />
        </motion.button>
      </div>
    </motion.header>
  );
}
