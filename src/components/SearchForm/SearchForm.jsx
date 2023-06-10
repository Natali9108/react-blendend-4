import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from 'redux/todoSlice';
import { selectTodo } from 'redux/selectors';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };
  const todos = useSelector(selectTodo);

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      setQuery('');
      return;
    }

    const isExist = todos.find(
      todo => todo.text.toLowerCase() === query.toLowerCase()
    );
    if (isExist) {
      alert('Already exist');
      return;
    }
    const todo = {
      id: nanoid(),
      text: query,
    };
    dispatch(addTodo(todo));

    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
