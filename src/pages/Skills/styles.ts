import styled from 'styled-components';

export const SkillsContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

export const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span {
    font-weight: 500;
  }
  
  span:last-child {
    color: ${({ theme }) => theme.primary};
  }
`;

export const SkillBar = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.body};
  border-radius: 4px;
  overflow: hidden;
  
  div {
    height: 100%;
    border-radius: 4px;
  }
`;