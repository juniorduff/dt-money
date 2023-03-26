// @flow
import * as Dailog from '@radix-ui/react-dialog';
import * as React from 'react';
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

type Props = {};

export function NewTransactionModal(props: Props) {
  return (
    <Dailog.Portal>
      <Overlay />
      <Content>
        <Dailog.Title>Modal Title</Dailog.Title>
        <CloseButton>
          <X size={30} />
        </CloseButton>

        <Dailog.Description>Modal Description</Dailog.Description>
        <form>
          <input type='text' placeholder='descrição' required />
          <input type='number' placeholder='Preço' required />
          <input type='text' placeholder='Categoria' required />
          <TransactionType>
            <TransactionButton value={'income'} variant='income'>
              <ArrowCircleUp size={30} />
              Entrada
            </TransactionButton>
            <TransactionButton value='outcome' variant='outcome'>
              <ArrowCircleDown size={30} />
              Saida
            </TransactionButton>
          </TransactionType>

          <button type='submit'>Cadastrar</button>
        </form>
      </Content>
    </Dailog.Portal>
  );
}
