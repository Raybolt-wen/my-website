// src/components/AnimatedWidget.jsx
import { motion } from 'framer-motion';

export default function AnimatedWidget({ children, style, className }) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 8px 12px rgba(0,0,0,0.15)',
        transition: { type: 'spring', stiffness: 300 }
      }}
      style={{
        backgroundColor: 'transparent',
        border: 'solid',
        color: 'white',
        borderColor: 'white',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
}
