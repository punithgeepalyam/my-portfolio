import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .header-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  position: relative;
  
  &.active {
    color: ${({ theme }) => theme.primary};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.primary};
    }
  }
`;

export const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent};
    color: white;
    transform: translateY(-3px);
  }
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1rem;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #8aace8, #6a8ec6, #4a6fa5);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  display: inline-block;
  padding: 0.2rem 0.5rem;
  position: relative;

  /* Animated gradient on hover */
  &:hover {
    animation: gradientShift 3s ease infinite;
    transform: scale(1.05);
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Optional subtle border animation */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, #6a8ec6, #ff6b6b, #4a6fa5);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;