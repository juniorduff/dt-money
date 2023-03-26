// @flow
import * as React from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';

type Props = {};

export function SearchForm(props: Props) {
  return (
    <SearchFormContainer>
      <input type='text' placeholder='Search' />
      <button type='submit'>
        <MagnifyingGlass size={30} /> Search
      </button>
    </SearchFormContainer>
  );
}
