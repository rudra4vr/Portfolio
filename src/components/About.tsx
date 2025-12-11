import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Globe, Heart, Lightbulb, Users, Sparkles } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Globe, label: 'International', value: 'Student' },
    { icon: Lightbulb, label: 'Visual', value: 'Storyteller' },
    { icon: Users, label: 'Collaborative', value: 'Creator' },
    { icon: Heart, label: 'Passionate', value: 'Editor' },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-32 px-6 relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <motion.div 
        className="absolute top-40 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </motion.div>
              <span className="text-cyan-400">About Me</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              From Ahmedabad to Toronto — Creating Through Media
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-zinc-400"
            >
              <motion.p
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I&apos;m originally from Ahmedabad, India, and moved to Toronto to pursue Interactive Media 
                Design at Seneca College. My interest in media comes from years of working with visuals — 
                editing, motion, animation, and storytelling. This led me toward a field where design, 
                technology, and creativity overlap.
              </motion.p>
              
              <motion.p
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I focus on clarity, narrative, and usability. For me, a good design solves a real problem, 
                tells a clear story, and works seamlessly for the user. Whether I&apos;m editing video or 
                creating digital experiences, I prioritize purpose over decoration.
              </motion.p>
              
              <motion.p
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Currently, I&apos;m diving deeper into UI/UX fundamentals, motion design, 2D/3D animation, 
                and interactive design principles — constantly expanding my toolkit to create more meaningful 
                and engaging experiences.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 40px rgba(34, 211, 238, 0.2)" }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
              >
                {/* Animated gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 relative z-10"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-white mb-1 relative z-10">{stat.value}</h3>
                <p className="text-zinc-500 relative z-10">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}