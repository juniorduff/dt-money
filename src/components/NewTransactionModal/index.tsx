// @flow
import * as Dailog from '@radix-ui/react-dialog';
import * as React from 'react';
import { useContext } from 'react';
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { TransactionContext } from '../../context/TransactionContext';

type Props = {};

export function NewTransactionModal(props: Props) {
  const { createTransaction } = useContext(TransactionContext);
  const NewTransactionModalSchema = z.object({
    description: z.string().min(3).max(100),
    price: z.number().min(0),
    category: z.string().min(3).max(100),
    type: z.enum(['income', 'outcome']),
  } as const);

  type NewTransactionModalInputs = z.infer<typeof NewTransactionModalSchema>;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitted },
  } = useForm<NewTransactionModalInputs>();
  async function handleSubmitForm(data: NewTransactionModalInputs) {
    await createTransaction({
      description: data.description,
      price: data.price,
      category: data.category,
      type: data.type,
    });
    reset();
  }
  return (
    <Dailog.Portal>
      <Overlay />
      <Content>
        <Dailog.Title>Modal Title</Dailog.Title>
        <CloseButton>
          <X size={30} />
        </CloseButton>

        <Dailog.Description>Modal Description</Dailog.Description>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input {...register('description')} type='text' placeholder='descrição' required />
          <input
            {...register('price', { valueAsNumber: true })}
            type='number'
            placeholder='Preço'
            required
          />
          <input {...register('category')} type='text' placeholder='Categoria' required />

          <Controller
            control={control}
            name={'type'}
            render={({ field }) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionButton value={'income'} variant='income'>
                    <ArrowCircleUp size={30} />
                    Entrada
                  </TransactionButton>
                  <TransactionButton value='outcome' variant='outcome'>
                    <ArrowCircleDown size={30} />
                    Saida
                  </TransactionButton>
                </TransactionType>
              );
            }}
          />

          <button type='submit' disabled={isSubmitted}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dailog.Portal>
  );
}
