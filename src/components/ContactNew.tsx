import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter, MapPin, Send, Sparkles, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useState } from 'react';

export function ContactNew() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const socialLinks = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'ravalrudrap@gmail.com', 
      href: 'mailto:ravalrudrap@gmail.com', 
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: '/in/rudraraval', 
      href: 'https://linkedin.com/in/rudraraval', 
      color: 'from-blue-600 to-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: '/rudraraval', 
      href: 'https://github.com/rudraraval', 
      color: 'from-gray-700 to-gray-500',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30'
    },
    { 
      icon: Twitter, 
      label: 'Twitter', 
      value: '@rudraraval', 
      href: 'https://twitter.com/rudraraval', 
      color: 'from-cyan-500 to-blue-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    try {
      // Using Web3Forms - Free form submission service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '18c8657f-df5b-4d6c-a191-1185eeff8cec', // You'll need to replace this
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'ravalrudrap@gmail.com', // Your email
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please try emailing directly.');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent dark:from-cyan-500/10" />
      
      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            left: `${10 + i * 35}%`,
            top: `${15 + i * 25}%`,
            background: i % 3 === 0
              ? 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 backdrop-blur-sm cursor-hover"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-cyan-400 font-semibold">Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent"
          >
            Let&apos;s Create Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat about design and media
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 text-lg"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                </div>
                <span>Based in Toronto, Canada</span>
              </motion.div>
              <motion.p 
                className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Available for freelance projects, part-time opportunities, and collaborations. Open to work immediately.
              </motion.p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`group flex items-center gap-4 p-5 ${link.bgColor} border ${link.borderColor} rounded-2xl hover:border-cyan-500/50 transition-all cursor-hover relative overflow-hidden`}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${link.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center relative z-10 shadow-lg`}
                  >
                    <link.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-gray-900 dark:text-white font-semibold text-lg group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {link.label}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">{link.value}</p>
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
            className="relative"
          >
            {/* Success/Error notification */}
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute -top-16 left-0 right-0 flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl backdrop-blur-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}
            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute -top-16 left-0 right-0 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl backdrop-blur-sm"
              >
                <AlertCircle className="w-5 h-5 text-red-500" />
                <p className="text-red-600 dark:text-red-400 font-semibold">{errorMessage}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 dark:text-white font-semibold mb-2 text-lg">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-zinc-900/50 border-2 border-zinc-300 dark:border-zinc-800 rounded-xl focus:border-cyan-500 focus:outline-none text-gray-900 dark:text-white transition-all backdrop-blur-sm hover:border-zinc-400 dark:hover:border-zinc-700"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 dark:text-white font-semibold mb-2 text-lg">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-zinc-900/50 border-2 border-zinc-300 dark:border-zinc-800 rounded-xl focus:border-cyan-500 focus:outline-none text-gray-900 dark:text-white transition-all backdrop-blur-sm hover:border-zinc-400 dark:hover:border-zinc-700"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-900 dark:text-white font-semibold mb-2 text-lg">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-zinc-900/50 border-2 border-zinc-300 dark:border-zinc-800 rounded-xl focus:border-cyan-500 focus:outline-none text-gray-900 dark:text-white transition-all backdrop-blur-sm hover:border-zinc-400 dark:hover:border-zinc-700"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 dark:text-white font-semibold mb-2 text-lg">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-white dark:bg-zinc-900/50 border-2 border-zinc-300 dark:border-zinc-800 rounded-xl focus:border-cyan-500 focus:outline-none text-gray-900 dark:text-white transition-all resize-none backdrop-blur-sm hover:border-zinc-400 dark:hover:border-zinc-700"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                className={`w-full px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-3 cursor-hover relative overflow-hidden text-lg font-semibold ${
                  formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: formStatus === 'sending' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
                {formStatus === 'sending' ? (
                  <>
                    <Loader className="w-5 h-5 relative z-10 animate-spin" />
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Info box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl"
            >
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                📧 <strong>Note:</strong> Messages are sent directly to my email. I typically respond within 24-48 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center text-zinc-600 dark:text-zinc-500"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-lg"
          >
            &copy; 2024 Rudra Raval. Designed & Built with passion for visual storytelling.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
