// @flow
import * as React from 'react';
import { SummaryCard, SummaryContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from 'phosphor-react';
import { useSummary } from '../../hooks/useSummary';

type Props = {};

export function Summary(props: Props) {
  const summary = useSummary();
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={'#00b37e'} />
        </header>
        <strong>{summary.income}</strong>
      </SummaryCard>
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
