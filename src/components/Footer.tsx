import { motion } from 'motion/react';
import { Heart, Mail, Linkedin, Github, Twitter, ArrowUp, Sparkles } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:ravalrudrap@gmail.com', label: 'Email', color: 'hover:text-orange-500 dark:hover:text-cyan-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rudraraval', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Github, href: 'https://github.com/rudraraval', label: 'GitHub', color: 'hover:text-purple-500' },
    { icon: Twitter, href: 'https://twitter.com/rudraraval', label: 'Twitter', color: 'hover:text-pink-500' },
  ];

  return (
    <footer className="relative mt-32 border-t border-orange-200 dark:border-zinc-800 bg-gradient-to-b from-transparent to-orange-50 dark:to-zinc-950">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-900 dark:text-white">Rudra Raval</h3>
                <p className="text-sm text-orange-600 dark:text-cyan-400">Media Designer</p>
              </div>
            </div>
            <p className="text-orange-700 dark:text-zinc-400 leading-relaxed">
              Creating stunning visual experiences through video editing, motion graphics, and interactive design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-orange-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-orange-700 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-cyan-400 transition-colors cursor-hover inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-orange-900 dark:text-white mb-4">Connect With Me</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-white dark:bg-zinc-900 border-2 border-orange-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-orange-600 dark:text-zinc-400 ${social.color} transition-all cursor-hover shadow-sm hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <motion.a
              href="mailto:ravalrudrap@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-hover"
            >
              <Mail className="w-4 h-4" />
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-orange-300 dark:via-zinc-700 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-orange-700 dark:text-zinc-400 text-center md:text-left"
          >
            © 2024 Rudra Raval. Designed & built with{' '}
            <Heart className="w-4 h-4 inline text-pink-500 fill-pink-500" />{' '}
            for visual storytelling
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="px-6 py-3 bg-white dark:bg-zinc-900 border-2 border-orange-200 dark:border-zinc-800 rounded-full flex items-center gap-2 text-orange-700 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-cyan-400 hover:border-orange-400 dark:hover:border-cyan-500/50 transition-all cursor-hover shadow-sm hover:shadow-lg group"
          >
            <span className="font-semibold">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Extra info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-orange-100 dark:border-zinc-900 text-center text-sm text-orange-600 dark:text-zinc-500"
        >
          <p>
            Based in Toronto, Canada 🇨🇦 | From Ahmedabad, India 🇮🇳 | Available for freelance & full-time opportunities
          </p>
        </motion.div>
      </div>

      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-100/50 dark:from-zinc-950 to-transparent -z-10" />
    </footer>
  );
}
