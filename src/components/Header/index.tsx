// @flow
import * as React from 'react';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import logo from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../NewTransactionModal';
type Props = {};
export function Header(props: Props) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>NOVA TRANSAÇÃO</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
