// src/components/AnimatedWidget.jsx
import { motion } from 'framer-motion';

export default function AnimatedWidget({ children, style }) {
  return (
    <motion.div
      initial={false}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 8px 12px rgba(0,0,0,0.15)',
        transition: { type: 'spring', stiffness: 300 }
      }}
      style={{
        ...style
      }}
    >
      {children}
    </motion.div>
  );
}
