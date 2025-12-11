import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Interactive Media Design',
      organization: 'Seneca College',
      location: 'Toronto, Canada',
      period: 'January 2026 - April 2027',
      description: 'Pursuing advanced diploma in Interactive Media Design, focusing on UI/UX design, motion graphics, and web development.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: 'Video Editing Intern',
      organization: 'VTV News',
      location: 'India',
      period: '2 months',
      description: 'Edited daily news content, created visual elements for broadcasts, and worked in a fast-paced media production environment.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="experience" ref={ref} className="min-h-screen py-32 px-6 relative">
      {/* Enhanced background */}
      <motion.div 
        className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
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
            <span className="text-cyan-400">My Journey</span>
          </motion.div>
          <h2>Experience & Education</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Building expertise through learning, creating, and collaborating
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5">
            <motion.div
              className="h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3, type: "spring", stiffness: 100 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Enhanced timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.2, type: "spring", stiffness: 200 }}
                  className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} transform -translate-x-1/2 z-10 flex items-center justify-center`}
                >
                  <motion.div
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-50`}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Enhanced content card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -8, boxShadow: "0 20px 60px rgba(34, 211, 238, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden group cursor-pointer hover:border-cyan-500/50 transition-all">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)`,
                      }}
                    />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-white mb-2 group-hover:text-cyan-400 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {item.title}
                        </motion.h3>
                        <p className="text-cyan-400 mb-1">{item.organization}</p>
                        <p className="text-zinc-500 mb-3">{item.location} • {item.period}</p>
                        <motion.p 
                          className="text-zinc-400"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow cursor-pointer relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Download Full Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}