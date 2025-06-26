// src/components/LogoParticles.tsx
import { motion } from 'framer-motion';

const particles = Array(5).fill(0);

const LogoParticles = () => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{ position: 'relative', zIndex: 2 }}
    >
      PG
    </motion.div>
    {particles.map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          x: Math.random() * 60 - 30,
          y: Math.random() * 60 - 30,
          scale: [0.5, 1.5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.2,
          repeatDelay: 2
        }}
        style={{
          position: 'absolute',
          fontSize: '0.5rem',
          color: '#4a6fa5',
          zIndex: 1,
          top: '50%',
          left: '50%'
        }}
      >
        •
      </motion.span>
    ))}
  </div>
);

export default LogoParticles;