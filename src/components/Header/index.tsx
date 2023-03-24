// @flow
import * as React from 'react';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import logo from '../../assets/logo.svg';
type Props = {};

export function Header(props: Props) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />
        <NewTransactionButton>NOVA TRANSAÇÃO</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
