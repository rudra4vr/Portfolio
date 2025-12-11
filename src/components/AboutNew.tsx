import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Globe, Heart, Lightbulb, Users, Sparkles, Video, Palette, Zap } from 'lucide-react';
import { useRef } from 'react';

export function AboutNew() {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: Globe, label: 'International Student', value: 'IND → CAN', color: 'from-blue-500 to-cyan-500', delay: 0 },
    { icon: Video, label: 'Video Editing', value: '90%', color: 'from-purple-500 to-pink-500', delay: 0.1 },
    { icon: Palette, label: 'Creative Design', value: 'Passionate', color: 'from-orange-500 to-yellow-500', delay: 0.2 },
    { icon: Zap, label: 'Fast Learner', value: 'Always', color: 'from-green-500 to-emerald-500', delay: 0.3 },
  ];

  return (
    <section 
      id="about" 
      ref={(node) => {
        ref.current = node;
        inViewRef(node);
      }}
      className="min-h-screen flex items-center py-32 px-6 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 backdrop-blur-sm cursor-hover"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-cyan-400 font-semibold">About Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-orange-900 dark:bg-gradient-to-r dark:from-white dark:via-cyan-200 dark:to-purple-200 dark:bg-clip-text dark:text-transparent">
              My Creative Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            From Ahmedabad to Toronto, crafting visual stories that inspire
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {[
                "I'm originally from Ahmedabad, India, and moved to Toronto to pursue Interactive Media Design at Seneca College. My interest in media comes from years of working with visuals — editing, motion, animation, and storytelling.",
                "I focus on clarity, narrative, and usability. For me, a good design solves a real problem, tells a clear story, and works seamlessly for the user. Whether I'm editing video or creating digital experiences, I prioritize purpose over decoration.",
                "Currently, I'm diving deeper into UI/UX fundamentals, motion design, 2D/3D animation, and interactive design principles — constantly expanding my toolkit to create more meaningful and engaging experiences."
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="relative group cursor-hover"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  <div className="relative p-6 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-2xl group-hover:border-cyan-500/50 transition-all">
                    <p className="text-zinc-300 leading-relaxed text-lg">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid with 3D cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + stat.delay,
                  type: 'spring',
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  rotateX: 10,
                  z: 50,
                }}
                className="group relative cursor-hover"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color.includes('blue') ? '#06b6d4' : stat.color.includes('purple') ? '#a78bfa' : stat.color.includes('orange') ? '#f97316' : '#10b981'}, transparent)`,
                  }}
                />
                
                {/* Card */}
                <div className={`relative h-full bg-gradient-to-br ${stat.color} p-[2px] rounded-3xl overflow-hidden`}>
                  <div className="h-full bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between">
                    {/* Icon with animation */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm"
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div>
                      <motion.h3 
                        className="text-3xl font-bold text-white mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        {stat.value}
                      </motion.h3>
                      <p className="text-zinc-400">{stat.label}</p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills tags with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {['Visual Storytelling', 'Video Editing', 'Motion Design', 'Color Grading', 'UI/UX', 'Creative Problem Solving'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.15, y: -5 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm cursor-hover group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}