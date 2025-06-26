import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span {
    font-weight: 500;
    
    &:first-child {
      color: ${({ theme }) => theme.text};
    }
    
    &:last-child {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const SkillBarContainer = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 4px;
  overflow: hidden;
`;

export const SkillLevel = styled(motion.div)<{ $color: string }>`
  height: 100%;
  border-radius: 4px;
  background: ${({ $color }) => $color};
`;