import styled from 'styled-components';

export const ProjectFilter = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.2rem;
  background: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) => active ? 'white' : theme.text};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;