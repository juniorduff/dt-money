// @flow
import * as React from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { PriceHighlight, TransactionContainer, TransactionTable } from './styles';
import { SearchForm } from '../../components/SearchForm';
import { TransactionContext } from '../../context/TransactionContext';
import { currencyFormatter, dateFormatter } from '../../utils/formatter';
import { useContextSelector } from 'use-context-selector';

type Props = {};
export interface ITransaction {
  id: string;
  type: 'income' | 'outcome';
  price: number;

  category: string;
  description: string;
  createdAt: string;
}

export function Transaction(props: Props) {
  const transactions = useContextSelector(TransactionContext, (context) => context.transactions);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {currencyFormatter.format(transaction.price)}
                  </PriceHighlight>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
