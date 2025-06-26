import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  background: ${({ theme }) => theme.cardBg};
  margin-top: 3rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  
  a {
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.9rem;
`;