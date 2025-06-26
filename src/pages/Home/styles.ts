import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 0 5%;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-top: 6rem;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  
  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.text};
  }
  
  p {
    font-size: 1.1rem;
    max-width: 600px;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const HeroImage = styled.div`
  position: relative;
  max-width: 400px; /* Adjust as needed */
  margin: 0 auto;
  
  /* For the tech icons */
  .tech-badge {
    position: absolute;
    background: white;
    padding: 8px;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.2);
    }
    
    span {
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.7rem;
      font-weight: bold;
    }
  }
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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;