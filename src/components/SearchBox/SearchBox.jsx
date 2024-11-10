import css from './SearchBox.module.css';

import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/filtersSlice';

export default function SearchBox() {
  const searchInputId = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        type="text"
        name="searchName"
        value={filter}
        id={searchInputId}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}
