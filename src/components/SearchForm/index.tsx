// @flow
import * as React from 'react';
import { useContext } from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { TransactionContext } from '../../context/TransactionContext';

type Props = {};

const searchFormSchema = z.object({
  search: z.string(),
});
type SearchFormInputs = z.infer<typeof searchFormSchema>;
export function SearchForm(props: Props) {
  const { fetchTransactions } = useContext(TransactionContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<SearchFormInputs>();

  async function handleSearchForm(data: SearchFormInputs) {
    await fetchTransactions(data.search);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchForm)}>
      <input type='text' {...register('search')} placeholder='Search' />
      <button type='submit' disabled={isSubmitted}>
        <MagnifyingGlass size={30} /> Search
      </button>
    </SearchFormContainer>
  );
}
