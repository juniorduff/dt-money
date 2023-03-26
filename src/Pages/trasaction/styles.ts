import styled from 'styled-components';

export const TransactionContainer = styled.header`
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  max-width: 1120px;
`;
export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1rem 2rem;
    background: ${({ theme }) => theme['gray-700']};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.td<PriceHighlightProps>`
  color: ${({ theme, variant }) => (variant === 'income' ? theme['green-300'] : theme['red-300'])};
`;
