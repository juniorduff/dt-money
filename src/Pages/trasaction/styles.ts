import styled from 'styled-components';

export const TransactionContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;
export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1rem 2rem;
    background: ${({ theme }) => theme['gray-800']};

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
