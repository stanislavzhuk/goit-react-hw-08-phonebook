import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { updateFilter } from 'redux/contacts/filterSlise';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const handleChange = ({ target: { value } }) => {
    dispatch(updateFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filterValue.filter}
        onChange={handleChange}
        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter contact name"
        required
      />
    </FilterLabel>
  );
};

export default Filter;