import React from 'react';
import { FooterContainer, SocialLinks, Copyright } from './styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {  
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/PunithGeepalyam" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://linkedin.com/in/punith-geepalyam" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <TwitterIcon fontSize="large" />
        </a>
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Punith Geepalyam. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;