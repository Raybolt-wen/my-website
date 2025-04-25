// AnimatedElement.jsx
import { motion } from 'framer-motion';

export default function AnimatedElement() {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.3 }
      }}
      className="your-element"
    >
      Hover me
    </motion.div>
  );
}
