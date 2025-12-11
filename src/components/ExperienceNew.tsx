import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Sparkles, Calendar, MapPin, Award, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

export function ExperienceNew() {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const timeline = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Interactive Media Design',
      organization: 'Seneca College',
      location: 'Toronto, Canada',
      period: 'January 2026 - April 2027',
      description: 'Pursuing advanced diploma in Interactive Media Design, focusing on UI/UX design, motion graphics, and web development.',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      highlights: [
        'UI/UX Design Principles',
        'Motion Graphics & Animation',
        'Interactive Web Development',
        'User-Centered Design'
      ],
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: 'Video Editing Intern',
      organization: 'VTV News',
      location: 'India',
      period: '2 months',
      description: 'Edited daily news content, created visual elements for broadcasts, and worked in a fast-paced media production environment.',
      color: 'from-purple-500 via-pink-500 to-rose-500',
      highlights: [
        'Broadcast Video Editing',
        'Motion Graphics Design',
        'Color Grading & Correction',
        'Fast-Paced Production'
      ],
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
  ];

  return (
    <section 
      id="experience" 
      ref={(node) => {
        ref.current = node;
        inViewRef(node);
      }}
      className="min-h-screen py-32 px-6 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
      />

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            left: `${10 + i * 40}%`,
            top: `${20 + i * 30}%`,
            background: i % 2 === 0
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6 backdrop-blur-sm cursor-hover"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
            </motion.div>
            <span className="text-purple-400 font-semibold">My Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-orange-900 dark:bg-gradient-to-r dark:from-white dark:via-purple-200 dark:to-pink-200 dark:bg-clip-text dark:text-transparent">
              Experience & Education
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Building expertise through learning, creating, and collaborating
          </motion.p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
            <motion.div
              className="h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 relative"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            >
              {/* Animated glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 blur-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>

          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + index * 0.3,
                  type: 'spring',
                  stiffness: 100 
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Timeline dot with animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.3,
                    type: 'spring',
                    stiffness: 200 
                  }}
                  className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:block"
                >
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} p-1`}
                    animate={{
                      scale: activeCard === index ? 1.2 : 1,
                      rotate: activeCard === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Pulsing rings */}
                  {activeCard === index && (
                    <>
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color}`}
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color}`}
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                    </>
                  )}
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -10 }}
                  className={`w-full md:w-[calc(50%-4rem)] mb-8 md:mb-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    className="group relative cursor-hover"
                    initial={{ rotateY: index % 2 === 0 ? -20 : 20 }}
                    animate={inView ? { rotateY: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.3 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity`}
                    />

                    {/* Card with gradient border */}
                    <div className={`relative bg-gradient-to-br ${item.color} p-[2px] rounded-3xl`}>
                      <div className={`bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden`}>
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-50`} />
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex-1">
                              <motion.div
                                className="flex items-center gap-3 mb-3"
                                whileHover={{ x: 5 }}
                              >
                                <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl`}>
                                  <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <span className={`text-sm font-semibold px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-white`}>
                                  {item.type === 'education' ? 'Education' : 'Experience'}
                                </span>
                              </motion.div>
                              <motion.h3 
                                className="text-3xl font-bold text-white mb-2"
                                whileHover={{ scale: 1.02 }}
                              >
                                {item.title}
                              </motion.h3>
                              <p className={`text-xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}>
                                {item.organization}
                              </p>
                            </div>
                          </div>

                          {/* Meta info */}
                          <div className="flex flex-wrap gap-4 mb-6">
                            <motion.div 
                              className="flex items-center gap-2 text-zinc-400"
                              whileHover={{ scale: 1.05, color: '#22d3ee' }}
                            >
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </motion.div>
                            <motion.div 
                              className="flex items-center gap-2 text-zinc-400"
                              whileHover={{ scale: 1.05, color: '#a78bfa' }}
                            >
                              <Calendar className="w-4 h-4" />
                              <span>{item.period}</span>
                            </motion.div>
                          </div>

                          {/* Description */}
                          <motion.p 
                            className="text-zinc-300 mb-6 leading-relaxed text-lg"
                            whileHover={{ x: 5 }}
                          >
                            {item.description}
                          </motion.p>

                          {/* Highlights */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-white font-semibold mb-3">
                              <Award className="w-5 h-5" />
                              <span>Key Highlights</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {item.highlights.map((highlight, hIndex) => (
                                <motion.div
                                  key={hIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={inView ? { opacity: 1, x: 0 } : {}}
                                  transition={{ delay: 1 + index * 0.3 + hIndex * 0.1 }}
                                  whileHover={{ scale: 1.05, x: 5 }}
                                  className="flex items-center gap-2 text-zinc-400 group/item"
                                >
                                  <ChevronRight className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${item.color} group-hover/item:translate-x-1 transition-transform`} />
                                  <span className="group-hover/item:text-white transition-colors">
                                    {highlight}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-24 text-center"
        >
          <motion.a
            href="/resume.pdf"
            download="Rudra_Raval_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full cursor-hover relative overflow-hidden text-lg font-semibold"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500"
              initial={{ x: '100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.5 }}
            />
            <GraduationCap className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10">Download Full Resume</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}