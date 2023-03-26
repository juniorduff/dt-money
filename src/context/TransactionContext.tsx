import { ITransaction } from '../Pages/trasaction';
import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

interface TransactionContextType {
  transactions: ITransaction[];
}
export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      const response = await axios.get<ITransaction[]>('http://localhost:3000/transactions');
      setTransactions(response.data);
    }
    loadTransactions();
  });

  return (
    <TransactionContext.Provider value={{ transactions }}>{children}</TransactionContext.Provider>
  );
}
