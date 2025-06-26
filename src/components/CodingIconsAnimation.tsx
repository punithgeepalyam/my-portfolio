import { JSX, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  DataObject,
  Terminal,
  Css,
  Javascript,
  Html,
  Api,
  Storage,
  Settings
} from '@mui/icons-material';
import { Functions, BugReport, Build } from '@mui/icons-material';

const FallingIconsAnimation = () => {
  const [icons, setIcons] = useState<Array<{
    id: number;
    icon: JSX.Element;
    left: any;
    duration: number;
    delay: number;
  }>>([]);

  const iconComponents = [
    <Code sx={{ fontSize: 36 }} key="code" />,
    <DataObject sx={{ fontSize: 36 }} key="data" />,
    <Terminal sx={{ fontSize: 36 }} key="terminal" />,
    <Css sx={{ fontSize: 36 }} key="css" />,
    <Javascript sx={{ fontSize: 36 }} key="js" />,
    <Html sx={{ fontSize: 36 }} key="html" />,
    <Api sx={{ fontSize: 36 }} key="api" />,
    <Storage sx={{ fontSize: 36 }} key="storage" />,
    <Settings sx={{ fontSize: 36 }} key="settings" />,
    <Functions sx={{ fontSize: 36 }} key="functions" />,
    <BugReport sx={{ fontSize: 36 }} key="bugreport" />,
    <Build sx={{ fontSize: 36 }} key="build" />
  ];

  useEffect(() => {
    // Create new icons every 1.5 seconds
    const spawnInterval = setInterval(() => {
      const newIcon = {
        id: Date.now(),
        icon: iconComponents[Math.floor(Math.random() * iconComponents.length)],
        width: '30%', // Covers more space
        left: `${Math.random() * 30 + 5}%`, 
        duration: Math.random() * 3 + 2, // Random duration (2-5s)
        delay: Math.random() * 2 // Random delay (0-2s)
      };
      setIcons(prev => [...prev, newIcon]);

      // Remove icon after animation completes
      setTimeout(() => {
        setIcons(prev => prev.filter(icon => icon.id !== newIcon.id));
      }, (newIcon.duration + newIcon.delay) * 1000);
    }, 1500);

    return () => clearInterval(spawnInterval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '25%',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 100,
      overflow: 'hidden'
    }}>
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 1, 1, 0],
            rotate: [0, Math.random() * 360]
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: `${icon.left}%`,
            color: '#6a8ec6',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingIconsAnimation;