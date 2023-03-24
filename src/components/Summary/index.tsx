// @flow
import * as React from 'react';
import { SummaryCard, SummaryContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from 'phosphor-react';

type Props = {};

export function Summary(props: Props) {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={'#00b37e'} />
        </header>
        <strong>R$ 1000,00</strong>
      </SummaryCard>{' '}
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color={'red'} />
        </header>
        <strong>R$ 1000,00</strong>
      </SummaryCard>{' '}
      <SummaryCard variant={'green'}>
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color={'white'} />
        </header>
        <strong>R$ 1000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
