import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;
export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NewTransactionButton = styled.button`
  font-size: 1rem;
  background: ${({ theme }) => theme['green-500']};
  border: 0;
  padding: 0 1.25rem;
  display: flex;
  font-weight: bold;
  justify-items: center;
  height: 50px;
  color: ${({ theme }) => theme.white};
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: 0.2s;
  }
`;
