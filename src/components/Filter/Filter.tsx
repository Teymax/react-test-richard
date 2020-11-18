import React, { FC, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectors } from "redux/selectors";
import { setFilter } from "redux/bus/bonuses/actions";

import "./Filter.styles.scss";

const Filter: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.bonuses.getFilter);

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  const resetFilterHandler = () => {
    dispatch(setFilter(""));
  };

  return (
    <div className="filter">
      <h3 className="filter__title">Filter</h3>
      <div className="filter__actions">
        <input
          className="filter__input"
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={filterHandler}
        />
        <button className="filter__reset" onClick={resetFilterHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
