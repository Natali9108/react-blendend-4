import { InputStyled, InputSearch } from '../Input/Input.styled.js';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice.js';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filter(e.target.value));
  };

  return (
    <InputStyled>
      <InputSearch
        type="text"
        placeholder="Filter todos..."
        onChange={handleFilter}
      />
    </InputStyled>
  );
};
