import { useState, useEffect } from 'react';
import { HeroNew } from './components/HeroNew';
import { AboutNew } from './components/AboutNew';
import { SkillsNew } from './components/SkillsNew';
import { ProjectsNew } from './components/ProjectsNew';
import { ExperienceNew } from './components/ExperienceNew';
import { ContactNew } from './components/ContactNew';
import { FloatingNav } from './components/FloatingNav';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ThemeToggle } from './components/ThemeToggle';
import { Header } from './components/Header';
import { DesignElements } from './components/DesignElements';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage and apply to document
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div 
      className={`${theme === 'dark' ? 'bg-zinc-950' : 'bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50'} text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-500`} 
      style={{ cursor: 'none' }}
    >
      <CustomCursor />
      <AnimatedBackground />
      <DesignElements />
      <Header />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <FloatingNav />
      <HeroNew />
      <AboutNew />
      <SkillsNew />
      <ProjectsNew />
      <ExperienceNew />
      <ContactNew />
      <Footer />
    </div>
  );
}