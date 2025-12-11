import { motion } from 'motion/react';

export function DesignElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Organic blobs - Light theme */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 opacity-30 dark:opacity-0"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="url(#gradient1)"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.4C26.4,83.8,10,86,-6.5,85.6C-23,85.2,-46,82.2,-62.3,73C-78.6,63.8,-88.2,48.4,-92.6,31.8C-97,15.2,-96.2,-2.6,-89.9,-18.2C-83.6,-33.8,-71.8,-47.2,-58.3,-54.6C-44.8,-62,-29.6,-63.4,-15.2,-62.1C-0.8,-60.8,12.8,-56.8,26.5,-52.9C40.2,-49,54,-45.2,44.7,-76.4Z"
            transform="translate(100 100)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 opacity-20 dark:opacity-0"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="url(#gradient2)"
            d="M51.1,-84.4C64.8,-76.2,73.3,-58.5,79.2,-41.1C85.1,-23.7,88.4,-6.6,86.3,9.8C84.2,26.2,76.7,41.9,66.3,54.8C55.9,67.7,42.6,77.8,27.8,82.5C13,87.2,-3.3,86.5,-18.8,81.5C-34.3,76.5,-49,67.2,-60.8,54.8C-72.6,42.4,-81.5,26.9,-84.9,10.1C-88.3,-6.7,-86.2,-24.8,-77.8,-39.4C-69.4,-54,-54.7,-65.1,-39.3,-72.5C-23.9,-79.9,-7.8,-83.6,8.5,-85.3C24.8,-87,49.6,-86.7,51.1,-84.4Z"
            transform="translate(100 100)"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Abstract shapes - Both themes */}
      <motion.div
        className="absolute top-1/4 left-1/4 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="150" height="150" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r="60" fill="none" stroke="url(#stroke1)" strokeWidth="2" />
          <circle cx="75" cy="75" r="45" fill="none" stroke="url(#stroke1)" strokeWidth="2" />
          <circle cx="75" cy="75" r="30" fill="none" stroke="url(#stroke1)" strokeWidth="2" />
          <defs>
            <linearGradient id="stroke1">
              <stop offset="0%" stopColor="#f97316" className="dark:stop-[#06b6d4]" />
              <stop offset="100%" stopColor="#a855f7" className="dark:stop-[#a78bfa]" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          <polygon points="60,10 110,90 10,90" fill="none" stroke="url(#stroke2)" strokeWidth="2" />
          <polygon points="60,30 90,80 30,80" fill="none" stroke="url(#stroke2)" strokeWidth="2" />
          <defs>
            <linearGradient id="stroke2">
              <stop offset="0%" stopColor="#ec4899" className="dark:stop-[#a78bfa]" />
              <stop offset="100%" stopColor="#8b5cf6" className="dark:stop-[#06b6d4]" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Decorative dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-orange-400/20 dark:bg-cyan-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Illustration-style lines */}
      <motion.div
        className="absolute top-1/2 left-0 w-64 h-64 opacity-5"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-orange-600 dark:text-cyan-400">
          <path d="M10,100 Q50,50 100,100 T190,100" strokeWidth="3" strokeLinecap="round" />
          <path d="M10,120 Q50,70 100,120 T190,120" strokeWidth="3" strokeLinecap="round" />
          <path d="M10,140 Q50,90 100,140 T190,140" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
}
