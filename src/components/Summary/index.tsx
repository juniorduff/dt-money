// @flow
import * as React from 'react';
import { SummaryCard, SummaryContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from 'phosphor-react';
import { TransactionContext } from '../../context/TransactionContext';
import { useContext } from 'react';

type Props = {};

export function Summary(props: Props) {
  const { transactions } = useContext(TransactionContext);
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += Number(transaction.price);
        acc.total += Number(transaction.price);
      } else {
        acc.outcome += Number(transaction.price);
        acc.total -= Number(transaction.price);
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={'#00b37e'} />
        </header>
        <strong>{summary.income}</strong>
      </SummaryCard>{' '}
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color={'red'} />
        </header>
        <strong>{summary.outcome}</strong>
      </SummaryCard>{' '}
      <SummaryCard variant={'green'}>
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color={'white'} />
        </header>
        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
