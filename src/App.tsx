import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';
import { Transaction } from './Pages/trasaction';
import { TransactionProvider } from './context/TransactionContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transaction />
      </TransactionProvider>
    </ThemeProvider>
  );
}
