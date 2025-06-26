import styled from 'styled-components';

export const ProjectContainer = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.primary};
  }
  
  p {
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  span {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    
    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;
