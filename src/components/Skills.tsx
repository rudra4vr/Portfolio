import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Video & Motion',
      skills: [
        { name: 'Video Editing', level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'Motion Graphics', level: 65, color: 'from-blue-500 to-purple-500' },
        { name: 'VFX & Compositing', level: 55, color: 'from-cyan-500 to-blue-500' },
        { name: 'Animation (2D/3D)', level: 45, color: 'from-pink-400 to-purple-400' },
      ],
    },
    {
      category: 'Design Software',
      skills: [
        { name: 'Premiere Pro', level: 85, color: 'from-purple-600 to-pink-600' },
        { name: 'After Effects', level: 70, color: 'from-blue-600 to-purple-600' },
        { name: 'Photoshop', level: 65, color: 'from-cyan-600 to-blue-600' },
        { name: 'Illustrator', level: 55, color: 'from-orange-500 to-yellow-500' },
        { name: 'Figma', level: 45, color: 'from-pink-500 to-red-500' },
        { name: 'Blender', level: 40, color: 'from-gray-500 to-gray-700' },
      ],
    },
    {
      category: 'Creative Skills',
      skills: [
        { name: 'Visual Storytelling', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Color Grading', level: 75, color: 'from-orange-500 to-red-500' },
        { name: 'Typography', level: 60, color: 'from-purple-500 to-violet-500' },
        { name: 'UI/UX Design', level: 40, color: 'from-blue-500 to-cyan-500' },
        { name: 'Graphic Design', level: 55, color: 'from-pink-500 to-rose-500' },
        { name: 'Prototyping', level: 40, color: 'from-cyan-400 to-blue-400' },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center py-32 px-6 relative">
      {/* Enhanced background */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-cyan-400">My Toolkit</span>
          </motion.div>
          <h2>Skills & Expertise</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            A diverse skill set combining creative vision, design thinking, and media expertise
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-white mb-6">{category.category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : 'rgba(34, 211, 238, 0.1)'} 0%, transparent 70%)`,
                      }}
                    />
                    
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <span className="text-white">{skill.name}</span>
                      <motion.span
                        animate={{ 
                          scale: hoveredSkill === skill.name ? 1.2 : 1,
                          color: hoveredSkill === skill.name ? "#22d3ee" : "#22d3ee"
                        }}
                        className="text-cyan-400"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          type: "spring",
                          stiffness: 50
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['Visual Storytelling', 'Responsive Design', 'Accessibility', 'User-Centered Design', 'Creative Problem Solving'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.15, y: -5, boxShadow: "0 5px 20px rgba(34, 211, 238, 0.3)" }}
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 cursor-pointer hover:bg-cyan-500/20 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}