import { motion } from 'framer-motion';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DownloadIcon from '@mui/icons-material/Download';
import HomeIcon from '@mui/icons-material/Home';
import ProjectsIcon from '@mui/icons-material/Article';
import SkillsIcon from '@mui/icons-material/Settings';
import ContactIcon from '@mui/icons-material/Phone';
import { useTheme } from '../../hooks/useTheme';
import { HeaderContainer, Logo, Nav, StyledNavLink, ThemeToggle, DownloadButton } from './styles';
import resumepdf from '../../assets/Punith_Frontend_Developer.pdf';

const navLinks = [
  { path: '/', label: 'Home', icon: <HomeIcon /> },
  { path: '/projects', label: 'Projects', icon: <ProjectsIcon/> },
  { path: '/skills', label: 'Skills', icon: <SkillsIcon /> },
  { path: '/contact', label: 'Contact', icon: <ContactIcon/> },
];

const MotionHeader = motion(HeaderContainer);
const MotionLogo = motion(Logo);
const MotionNavLink = motion(StyledNavLink);
const MotionThemeToggle = motion(ThemeToggle);

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumepdf;
    link.download = 'Punith_Geepalyam_Frontend_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <MotionHeader
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <MotionLogo
        to="/"
        whileHover={{
          scale: 1.1,
          rotateZ: [0, -5, 5, 0],
          transition: { duration: 0.5 }
        }}
        animate={{
          textShadow: [
            '0 0 5px rgba(74, 111, 165, 0.5)',
            '0 0 15px rgba(255, 107, 107, 0.7)',
            '0 0 5px rgba(74, 111, 165, 0.5)'
          ],
          transition: { duration: 3, repeat: Infinity }
        }}
      >
        <motion.span
          style={{ display: 'inline-block' }}
          whileHover={{ rotateY: 180 }}
        >
          PG
        </motion.span>
      </MotionLogo>
      
      <Nav>
      {navLinks.map((link, index) => (
        <motion.div
          key={link.path}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2 + index * 0.1
          }}
        >
          <StyledNavLink
            to={link.path}
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'block', padding: '0.5rem 1rem' }}
              whileHover={{
                y: [0, -5, 0], // Bounce effect
                transition: {
                  duration: 0.6,
                  ease: [0.2, 0.8, 0.4, 1] // Bouncy easing
                }
              }}
              whileTap={{
                scale: 0.95
              }}
            >
              {link.label}
              
              {/* Glow effect */}
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  scale: 1.2,
                  transition: { duration: 0.3 }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle, rgba(106,142,198,0.4) 0%, rgba(106,142,198,0) 70%)',
                  borderRadius: '8px',
                  zIndex: -1
                }}
              />
            </motion.span>
            
            {/* Active indicator */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                height: '3px',
                width: '0%',
                background: 'linear-gradient(90deg, #6a8ec6, #ff6b6b)',
                borderRadius: '2px'
              }}
              animate={{
                width: '0%'
              }}
              whileHover={{
                width: '100%',
                transition: { duration: 0.3 }
              }}
            />
          </StyledNavLink>
        </motion.div>
      ))}
    </Nav>
    <motion.div
  whileHover="hover"
  whileTap="tap"
  initial="rest"
  animate="rest"
  style={{ display: 'inline-block' }}
>
  <DownloadButton
    onClick={handleDownload}
  >
    <motion.span
      variants={{
        rest: { x: 0 },
        hover: { x: [0, -3, 3, -2, 2, 0] } // Shake effect
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut"
      }}
    >
      <DownloadIcon />
    </motion.span>
    
    <motion.span
      style={{ marginLeft: '8px' }}
      variants={{
        rest: { opacity: 1 },
        hover: { opacity: [1, 0.8, 1.2, 1] } // Pulsing text
      }}
    >
      Resume
    </motion.span>
    
    {/* Animated download progress indicator */}
    <motion.div
      variants={{
        rest: { width: 0 },
        hover: { width: '100%' }
      }}
      transition={{ duration: 1.5 }}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #6a8ec6, #ff6b6b)',
        borderRadius: '2px'
      }}
    />
    
    {/* Floating particles (optional) */}
    <motion.div
      variants={{
        rest: { opacity: 0 },
        hover: { opacity: 1 }
      }}
      style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px'
      }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            delay: i * 0.3,
            duration: 1.5,
            repeat: Infinity
          }}
          style={{
            width: '6px',
            height: '6px',
            background: '#ff6b6b',
            borderRadius: '50%',
            position: 'absolute'
          }}
        />
      ))}
    </motion.div>
  </DownloadButton>
</motion.div>
    </MotionHeader>
  );
};

export default Header;