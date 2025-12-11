import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Sparkles, Play } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export function ProjectsNew() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'News Package Editing',
      category: 'Video Editing',
      description: 'Broadcast-ready news packages with professional color correction and sound balancing',
      image: 'https://images.unsplash.com/photo-1575320854760-bfffc3550640?w=800',
      tags: ['Premiere Pro', 'After Effects', 'Color Grading', 'Sound Design'],
      year: '2024',
      client: 'VTV News',
      role: 'Video Editor',
      videoUrl: 'https://youtube.com',
      detailedDescription: 'During my internship at VTV News, I edited broadcast-ready news packages, handling everything from footage selection to final color correction. Working in a fast-paced newsroom environment, I learned to deliver high-quality content under tight deadlines while maintaining broadcast standards.',
      challenges: 'The main challenge was working with limited time frames typical of news production. Each package needed to be camera-ready within hours, requiring efficient workflows and quick decision-making.',
      solution: 'I developed a streamlined editing workflow using keyboard shortcuts and custom presets in Premiere Pro. This allowed me to cut editing time by 30% while maintaining quality, ensuring all packages met broadcast deadlines.',
      color: 'from-orange-500 via-pink-500 to-purple-500',
    },
    {
      title: 'Motion Graphics for Broadcast',
      category: 'Motion Design',
      description: 'Dynamic lower-thirds, intro animations, and motion elements for TV segments',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800',
      tags: ['After Effects', 'Motion Design', 'Broadcast Graphics', 'Animation'],
      year: '2024',
      client: 'VTV News',
      role: 'Motion Designer',
      videoUrl: 'https://youtube.com',
      detailedDescription: 'Created engaging motion graphics for daily news broadcasts, including lower-thirds, transition effects, and intro animations. Each element was designed to maintain brand consistency while adding visual interest to the segments.',
      challenges: 'Balancing creativity with broadcast guidelines was challenging. Graphics needed to be eye-catching but not distracting, professional yet engaging.',
      solution: 'I created a library of reusable motion templates that followed brand guidelines while allowing for quick customization. This approach saved production time and ensured consistency across all broadcasts.',
      color: 'from-cyan-500 via-blue-500 to-indigo-500',
    },
    {
      title: 'Interactive Portfolio Design',
      category: 'UI/UX',
      description: 'Modern, interactive portfolio showcasing design work with smooth animations',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      tags: ['Figma', 'UI Design', 'Prototyping', 'Interactive Design'],
      year: '2024',
      role: 'UI/UX Designer',
      detailedDescription: 'Designed and prototyped an interactive portfolio website focused on user experience and visual storytelling. The design emphasizes clean layouts, intuitive navigation, and engaging micro-interactions.',
      challenges: 'Creating a design that stands out while remaining professional and accessible across all devices.',
      solution: 'Implemented a modular design system with reusable components, ensuring consistency and scalability. Used Figma for prototyping interactive elements before development.',
      color: 'from-amber-500 via-orange-500 to-red-500',
    },
  ];

  const filters = ['All', 'Video Editing', 'Motion Design', 'UI/UX'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" ref={ref} className="min-h-screen py-32 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-100/30 dark:via-blue-500/5 to-transparent" />
        
        {/* Animated orbs */}
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-cyan-500/10 border border-orange-300 dark:border-cyan-500/30 rounded-full mb-6 backdrop-blur-sm cursor-hover"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-orange-600 dark:text-cyan-400" />
              </motion.div>
              <span className="text-orange-700 dark:text-cyan-400 font-semibold">Featured Work</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-orange-900 dark:text-white">
                Projects & Portfolio
              </span>
            </h2>
            <p className="text-lg text-orange-800 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
              Explore my journey through video editing, motion design, and visual storytelling
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all cursor-hover font-semibold ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-zinc-900 text-orange-700 dark:text-zinc-400 border-2 border-orange-200 dark:border-zinc-800 hover:border-orange-400 dark:hover:border-cyan-500/50'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => openProject(project)}
                className="group relative bg-white dark:bg-zinc-900/50 rounded-3xl overflow-hidden border-2 border-orange-100 dark:border-zinc-800 hover:border-orange-300 dark:hover:border-cyan-500/50 transition-all cursor-hover shadow-lg hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-16 h-16 bg-white/90 dark:bg-zinc-900/90 rounded-full flex items-center justify-center shadow-xl"
                    >
                      <Play className="w-8 h-8 text-orange-600 dark:text-cyan-400 ml-1" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-full text-sm font-semibold text-orange-700 dark:text-cyan-400 border border-orange-200 dark:border-zinc-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-orange-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-orange-700 dark:text-zinc-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-orange-50 dark:bg-zinc-800 text-orange-700 dark:text-zinc-400 rounded-full text-xs border border-orange-100 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-orange-50 dark:bg-zinc-800 text-orange-600 dark:text-cyan-400 rounded-full text-xs border border-orange-100 dark:border-zinc-700 font-semibold">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity -z-10`}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-orange-700 dark:text-zinc-400 mb-4">
              Want to see more of my work?
            </p>
            <motion.a
              href="mailto:ravalrudrap@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-hover"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}