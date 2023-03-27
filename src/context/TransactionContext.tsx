import { ITransaction } from '../Pages/trasaction';
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
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
  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get<ITransaction[]>('/transactions', {
      params: {
        description_like: query,
      },
    });
    setTransactions(response.data);
  }, []);
  const createTransaction = useCallback(
    async (data: Transaction) => {
      const response = await api.post<ITransaction>('/transactions', {
        ...data,
        createdAt: new Date(),
      });
      setTransactions([...transactions, response.data]);
    },
    [transactions]
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionContext.Provider value={{ fetchTransactions, createTransaction, transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
