import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Play, Calendar, Tag } from 'lucide-react';
import { useEffect } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  client?: string;
  role: string;
  videoUrl?: string;
  detailedDescription: string;
  challenges?: string;
  solution?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 rounded-3xl shadow-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-14 h-14 bg-white dark:bg-zinc-800 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-2 border-orange-300 dark:border-zinc-700 cursor-hover hover:bg-orange-50 dark:hover:bg-zinc-700 transition-colors"
              >
                <X className="w-7 h-7 text-orange-600 dark:text-cyan-400 stroke-[3]" />
              </motion.button>

              {/* Content */}
              <div className="relative">
                {/* Hero Image/Video */}
                <div className="relative h-80 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.videoUrl && (
                    <motion.a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-hover group"
                    >
                      <div className="w-20 h-20 bg-white/90 dark:bg-zinc-900/90 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-orange-500/50 dark:group-hover:shadow-cyan-500/50 transition-shadow">
                        <Play className="w-10 h-10 text-orange-600 dark:text-cyan-400 ml-1" fill="currentColor" />
                      </div>
                    </motion.a>
                  )}
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-50/50 dark:from-zinc-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-blue-500 text-white rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2 text-orange-600/70 dark:text-zinc-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold text-orange-900 dark:text-white mb-2">
                      {project.title}
                    </h2>
                    {project.client && (
                      <p className="text-lg text-orange-700 dark:text-zinc-400">
                        Client: <span className="font-semibold">{project.client}</span>
                      </p>
                    )}
                    <p className="text-orange-700 dark:text-zinc-400">
                      Role: <span className="font-semibold text-orange-900 dark:text-white">{project.role}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 dark:text-white mb-2">
                        About This Project
                      </h3>
                      <p className="text-orange-800 dark:text-zinc-300 leading-relaxed">
                        {project.detailedDescription}
                      </p>
                    </div>

                    {project.challenges && (
                      <div>
                        <h3 className="text-xl font-bold text-orange-900 dark:text-white mb-2">
                          Challenges
                        </h3>
                        <p className="text-orange-800 dark:text-zinc-300 leading-relaxed">
                          {project.challenges}
                        </p>
                      </div>
                    )}

                    {project.solution && (
                      <div>
                        <h3 className="text-xl font-bold text-orange-900 dark:text-white mb-2">
                          Solution
                        </h3>
                        <p className="text-orange-800 dark:text-zinc-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-5 h-5 text-orange-600 dark:text-cyan-400" />
                      <h3 className="text-lg font-bold text-orange-900 dark:text-white">
                        Tools & Techniques
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-2 bg-orange-100 dark:bg-zinc-800 border border-orange-200 dark:border-zinc-700 text-orange-700 dark:text-zinc-300 rounded-full text-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {project.videoUrl && (
                    <motion.a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-hover"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Full Project
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}