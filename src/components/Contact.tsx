import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter, MapPin, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const socialLinks = [
    { icon: Mail, label: 'Email', value: 'ravalrudrap@gmail.com', href: 'mailto:ravalrudrap@gmail.com', color: 'from-red-500 to-orange-500' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/rudraraval', href: 'https://linkedin.com/in/rudraraval', color: 'from-blue-600 to-blue-400' },
    { icon: Github, label: 'GitHub', value: '/rudraraval', href: 'https://github.com/rudraraval', color: 'from-gray-700 to-gray-500' },
    { icon: Twitter, label: 'Twitter', value: '@rudraraval', href: 'https://twitter.com/rudraraval', color: 'from-cyan-500 to-blue-400' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />
      
      {/* Enhanced background effects */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.2, 0.4],
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
            <span className="text-cyan-400">Get In Touch</span>
          </motion.div>
          <h2>Let&apos;s Create Together</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat about design and media
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-center gap-3 text-zinc-400"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Based in Toronto, Canada</span>
              </motion.div>
              <motion.p 
                className="text-zinc-400"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Available for freelance projects, part-time opportunities, and collaborations. Open to work immediately.
              </motion.p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02, boxShadow: "0 10px 40px rgba(34, 211, 238, 0.15)" }}
                  className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition-all cursor-pointer group relative overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)`,
                    }}
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center relative z-10 shadow-lg`}
                  >
                    <link.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-white group-hover:text-cyan-400 transition-colors">{link.label}</p>
                    <p className="text-zinc-400">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: "#22d3ee" }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-all backdrop-blur-sm hover:border-zinc-700"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: "#22d3ee" }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-all backdrop-blur-sm hover:border-zinc-700"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: "#22d3ee" }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-all backdrop-blur-sm hover:border-zinc-700"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: "#22d3ee" }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-all resize-none backdrop-blur-sm hover:border-zinc-700"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Send className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center text-zinc-500"
        >
          <motion.p
            whileHover={{ scale: 1.05, color: "#22d3ee" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            &copy; 2024 Rudra Raval. Designed & Built with passion for visual storytelling.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}