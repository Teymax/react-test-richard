import React, { FC, ReactElement } from "react";

import Bonus from "./Bonus/Bonus";

import { useDispatch, useSelector } from "react-redux";
import { fetchBonuses } from "redux/bus/bonuses/actions";
import { selectors } from "redux/selectors";
import { Bonus as BonusType } from "sharedTypes";

const BonusList: FC = (): ReactElement => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBonuses());
  }, [dispatch]);
  const bonuses = useSelector(selectors.bonuses.getBonuses);
  const bonusesJSX =
    bonuses &&
    bonuses.map(
      (bonus: BonusType): ReactElement => (
        <Bonus key={bonus.title} bonus={bonus} />
      )
    );

  return <div>{bonusesJSX}</div>;
};

export default BonusList;
