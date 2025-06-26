import styled from 'styled-components';

export const ContactContainer = styled.section`
  form {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.accent};
  }
`;

export const Message = styled.div<{ type: string }>`
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  background: ${({ type, theme }) => 
    type === 'success' ? 'rgba(0, 200, 0, 0.1)' : 'rgba(200, 0, 0, 0.1)'};
  color: ${({ type, theme }) => 
    type === 'success' ? 'green' : 'red'};
  border: 1px solid ${({ type, theme }) => 
    type === 'success' ? 'green' : 'red'};
`;