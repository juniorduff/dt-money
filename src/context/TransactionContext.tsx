import { ITransaction } from '../Pages/trasaction';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Transaction {
  type: 'income' | 'outcome';
  price: number;
  category: string;
  description: string;
}
interface TransactionContextType {
  transactions: ITransaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: Transaction) => Promise<void>;
}
export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  async function fetchTransactions(query?: string) {
    const response = await api.get<ITransaction[]>(`transactions`, {
      params: {
        q: query,
      },
    });
    console.log('response', response);
    setTransactions(response.data);
  }
  async function createTransaction(data: Transaction) {
    const response = await api.post<ITransaction>('/transactions', {
      ...data,
      createdAt: new Date(),
    });
    setTransactions([...transactions, response.data]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ fetchTransactions, createTransaction, transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
