// @flow
import * as React from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { PriceHighlight, TransactionContainer, TransactionTable } from './styles';

type Props = {};

export function Transaction(props: Props) {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de Site</td>
              <PriceHighlight variant={'income'}>R$ 12.000,00</PriceHighlight>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width='50%'>Desenvolvimento de Site</td>
              <PriceHighlight variant={'income'}>R$ 12.000,00</PriceHighlight>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width='50%'>Desenvolvimento de Site</td>
              <PriceHighlight variant={'outcome'}>-R$ 12.000,00</PriceHighlight>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width='50%'>Desenvolvimento de Site</td>
              <PriceHighlight variant={'income'}>R$ 12.000,00</PriceHighlight>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
