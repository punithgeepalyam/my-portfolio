import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeroContainer, HeroContent, HeroImage, Button, ButtonContainer } from './styles';
import { FaReact, FaAngular, FaJs } from 'react-icons/fa';
import profilePic from '../../assets/profile_pic-removebg.png';
import reactImg from '@mui/icons-material/'
import {
    Settings as ReactIcon,
    Architecture as AngularIcon,
    Code as TypeScriptIcon,
    Javascript as JavaScriptIcon
  } from '@mui/icons-material';
import CodingIconsAnimation from '../../components/CodingIconsAnimation';

const Home = () => {

    const techIcons = [
    { 
      icon: <ReactIcon sx={{ color: '#61DAFB', fontSize: 28 }} />, 
      name: 'React' 
    },
    { 
      icon: <AngularIcon sx={{ color: '#DD0031', fontSize: 28 }} />, 
      name: 'Angular' 
    },
    { 
      icon: <TypeScriptIcon sx={{ color: '#3178C6', fontSize: 28 }} />, 
      name: 'TypeScript' 
    },
    { 
      icon: <JavaScriptIcon sx={{ color: '#F7DF1E', fontSize: 28 }} />, 
      name: 'JavaScript' 
    }
  ];
  return (
    <>
    <CodingIconsAnimation />
    <HeroContainer id="home">
      <HeroContent>
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Name with Gradient Animation */}
  <motion.h1
    style={{
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 700,
      marginBottom: '0.2rem',
      background: 'linear-gradient(45deg, #6a8ec6, #ff6b6b, #4a6fa5)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      display: 'inline-block',
      lineHeight: 1.2
    }}
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%'],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'linear'
    }}
    whileHover={{
      scale: 1.05,
      textShadow: '0 0 10px rgba(106,142,198,0.5)',
      transition: { duration: 0.3 }
    }}
  >
    Punith Geepalyam
  </motion.h1>

  {/* Job Title with Underline Animation - Now properly positioned */}
  <motion.div 
    style={{ 
      marginBottom: '1.5rem',
      position: 'relative'
    }}
  >
    <motion.h2
      style={{
        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
        fontWeight: 500,
        color: '#4a6fa5',
        display: 'inline-block'
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1,
        y: 0
      }}
      transition={{ 
        delay: 0.5,
        duration: 0.8
      }}
      whileHover={{
        color: '#6a8ec6',
        transition: { duration: 0.3 }
      }}
    >
      Frontend Technical Lead
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{
          delay: 0.8,
          duration: 1.5,
          ease: [0.19, 1, 0.22, 1]
        }}
        style={{
          display: 'block',
        //   position: 'absolute',
          bottom: '-5px',
          left: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #6a8ec6, #ff6b6b)',
          transformOrigin: 'left',
          borderRadius: '3px'
        }}
      />
    </motion.h2>
  </motion.div>

  {/* Animated Description Text */}
  <motion.div style={{ marginBottom: '2rem' }}>
    <motion.p
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.1rem)',
        lineHeight: 1.6,
        color: '#333'
      }}
    >
      {`Architecting high-performance web applications using React, Angular,  and TypeScript to deliver exceptional user experiences. Expertise in       advanced state management solutions, performance optimization at     scale, and leading engineering teams to build robust, maintainable         systems. Passionate about crafting elegant solutions to complex               technical challenges while mentoring junior developers and establishing best practices.`.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1 + index * 0.01,
            duration: 0.5
          }}
          whileHover={{
            color: '#ff6b6b',
            y: -3,
            transition: { duration: 0.2 }
          }}
          style={{
            display: letter === ' ' ? 'inline' : 'inline-block',
            whiteSpace: 'pre-wrap'
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.p>
  </motion.div>

  {/* Animated Buttons */}
  <ButtonContainer>
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { 
          duration: 0.3,
          repeat: 1,
          repeatType: 'mirror'
        } 
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        as={Link} 
        to="/projects"
        style={{
          background: 'linear-gradient(45deg, #6a8ec6, #4a6fa5)',
          boxShadow: '0 4px 15px rgba(106,142,198,0.4)'
        }}
      >
        View Projects
      </Button>
    </motion.div>
    
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { 
          duration: 0.3,
          repeat: 1,
          repeatType: 'mirror'
        } 
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        as={Link} 
        to="/contact"
        style={{
          background: 'linear-gradient(45deg, #ff6b6b, #e34f4f)',
          boxShadow: '0 4px 15px rgba(255,107,107,0.4)'
        }}
      >
        Contact Me
      </Button>
    </motion.div>
  </ButtonContainer>
</motion.div>
      </HeroContent>
      
      <HeroImage>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(106, 142, 198, 0.3)'
        }}
      >
        {/* Main Profile Image */}
        <motion.img
          src={profilePic}
          alt="Punith Geepalyam"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '20px',
            border: '3px solid rgba(106, 142, 198, 0.2)'
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
        />

        {/* Floating Tech Icons */}
        {techIcons.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: [0, -15, 0], // Floating up and down
              opacity: 1,
              rotate: [0, 5, -5, 0] // Gentle sway
            }}
            transition={{
              delay: 0.5 + i * 0.3,
              duration: 4 + i, // Each icon has slightly different timing
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${15 + i * 15}%`,
              left: `${i % 2 === 0 ? 5 : 85}%`, // Alternate left/right
              background: 'white',
              padding: '10px',
              borderRadius: '50%',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2
            }}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          >
            {tech.icon}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: 1,
                duration: 3,
                repeat: Infinity
              }}
              style={{
                position: 'absolute',
                bottom: '-25px',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}
            >
              {tech.name}
            </motion.span>
          </motion.div>
        ))}

        {/* Subtle Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle, rgba(106,142,198,0.8) 0%, rgba(106,142,198,0) 70%)',
            mixBlendMode: 'overlay',
            borderRadius: '20px',
            zIndex: 1
          }}
        />
      </motion.div>
    </HeroImage>
    </HeroContainer>
    </>
  );
};

export default Home;
