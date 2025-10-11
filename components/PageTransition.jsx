"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>

      {/* Optional overlay effect */}
      <motion.div
        key={`${pathname}-overlay`}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 0.2, duration: 0.3, ease: "easeInOut" },
        }}
        exit={{
          opacity: 1,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="fixed inset-0 z-30 pointer-events-none bg-primary"
      />
    </AnimatePresence>
  );
};

export default PageTransition;
