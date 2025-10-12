"use client";

import { useTheme } from './ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();  

  return (
    <motion.button
      onClick={toggleTheme}  
      className="relative flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full border-accent/20 bg-primary/50 backdrop-blur-sm hover:bg-accent/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <FiMoon className="w-5 h-5 text-accent" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <FiSun className="w-5 h-5 text-accent" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
