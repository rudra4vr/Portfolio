import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';

export function SkillsNew() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const skillCategories = [
    {
      category: 'Video & Motion',
      icon: '🎬',
      skills: [
        { name: 'Video Editing', level: 90, color: 'from-purple-500 via-pink-500 to-rose-500' },
        { name: 'Motion Graphics', level: 65, color: 'from-blue-500 via-purple-500 to-pink-500' },
        { name: 'VFX & Compositing', level: 55, color: 'from-cyan-500 via-blue-500 to-indigo-500' },
        { name: 'Animation (2D/3D)', level: 45, color: 'from-pink-400 via-purple-400 to-indigo-400' },
      ],
    },
    {
      category: 'Design Software',
      icon: '🎨',
      skills: [
        { name: 'Premiere Pro', level: 85, color: 'from-purple-600 via-pink-600 to-rose-600' },
        { name: 'After Effects', level: 70, color: 'from-blue-600 via-purple-600 to-pink-600' },
        { name: 'Photoshop', level: 65, color: 'from-cyan-600 via-blue-600 to-indigo-600' },
        { name: 'Illustrator', level: 55, color: 'from-orange-500 via-yellow-500 to-amber-500' },
        { name: 'Figma', level: 45, color: 'from-pink-500 via-red-500 to-orange-500' },
        { name: 'Blender', level: 40, color: 'from-gray-500 via-gray-600 to-gray-700' },
      ],
    },
    {
      category: 'Creative Skills',
      icon: '✨',
      skills: [
        { name: 'Visual Storytelling', level: 85, color: 'from-green-500 via-emerald-500 to-teal-500' },
        { name: 'Color Grading', level: 75, color: 'from-orange-500 via-red-500 to-pink-500' },
        { name: 'Typography', level: 60, color: 'from-purple-500 via-violet-500 to-purple-600' },
        { name: 'UI/UX Design', level: 40, color: 'from-blue-500 via-cyan-500 to-teal-500' },
        { name: 'Graphic Design', level: 55, color: 'from-pink-500 via-rose-500 to-red-500' },
        { name: 'Prototyping', level: 40, color: 'from-cyan-400 via-blue-400 to-indigo-400' },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${400 + i * 100}px`,
              height: `${400 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 30}%`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
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
            <span className="text-cyan-400 font-semibold">Skills & Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-orange-900 dark:bg-gradient-to-r dark:from-white dark:via-cyan-200 dark:to-purple-200 dark:bg-clip-text dark:text-transparent">
              My Creative Toolkit
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            A diverse arsenal of design and media skills
          </motion.p>
        </motion.div>

        {/* Category selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.category}
              onClick={() => setSelectedCategory(index)}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl backdrop-blur-sm cursor-hover transition-all relative overflow-hidden ${
                selectedCategory === index
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {selectedCategory === index && (
                <motion.div
                  layoutId="categoryBg"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 text-lg font-semibold">
                <span className="text-2xl">{category.icon}</span>
                {category.category}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills display */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories[selectedCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -30 }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.03, y: -5, rotateX: 5 }}
              className="group relative cursor-hover"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity`}
              />
              
              {/* Card */}
              <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 group-hover:border-transparent transition-all overflow-hidden">
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  style={{ padding: '2px' }}
                >
                  <div className="h-full w-full bg-zinc-900/90 backdrop-blur-xl rounded-3xl" />
                </motion.div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-1"
                        animate={{ 
                          scale: hoveredSkill === skill.name ? 1.05 : 1,
                        }}
                      >
                        {skill.name}
                      </motion.h3>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">Proficiency</span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ 
                        scale: hoveredSkill === skill.name ? 1.2 : 1,
                        rotate: hoveredSkill === skill.name ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      className={`text-4xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                    >
                      {skill.level}%
                    </motion.div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-4 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ 
                        duration: 2, 
                        delay: 0.8 + index * 0.1,
                        type: 'spring',
                        stiffness: 50
                      }}
                      className={`h-full bg-gradient-to-r ${skill.color} relative rounded-full`}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: 'easeInOut',
                        }}
                      />
                      
                      {/* Glow */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 blur-sm"
                        animate={{
                          opacity: hoveredSkill === skill.name ? 1 : 0,
                        }}
                      />
                    </motion.div>

                    {/* Percentage markers */}
                    <div className="absolute inset-0 flex items-center justify-between px-2">
                      {[0, 25, 50, 75, 100].map((mark) => (
                        <div
                          key={mark}
                          className="w-px h-2 bg-zinc-700"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Skill level indicator */}
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-zinc-500">
                      {skill.level < 50 ? 'Learning' : skill.level < 70 ? 'Intermediate' : skill.level < 85 ? 'Advanced' : 'Expert'}
                    </span>
                    <motion.div
                      className="flex gap-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.ceil(skill.level / 20) 
                              ? `bg-gradient-to-r ${skill.color}` 
                              : 'bg-zinc-700'
                          }`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                          whileHover={{ scale: 1.5 }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Design Approach</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Visual Storytelling', 'Responsive Design', 'Accessibility', 'User-Centered Design', 'Creative Problem Solving'].map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ 
                  delay: 1.7 + index * 0.1, 
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                className="group px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm cursor-hover relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-semibold text-lg">
                  {tag}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}