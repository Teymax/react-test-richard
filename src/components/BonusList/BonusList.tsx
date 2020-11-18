import React, { FC, ReactElement } from "react";

import Bonus from "./Bonus/Bonus";

import { useDispatch, useSelector } from "react-redux";
import { fetchBonuses, setBonusActivation } from "redux/bus/bonuses/actions";
import { selectors } from "redux/selectors";
import { Bonus as BonusType } from "sharedTypes";

const BonusList: FC = (): ReactElement => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBonuses());
  }, [dispatch]);
  const bonuses = useSelector(selectors.bonuses.getBonuses);

  const activateBonusHandler = React.useCallback(
    (title: string) => {
      dispatch(setBonusActivation({ title, isActivated: true }));
    },
    [dispatch]
  );

  const bonusesJSX =
    bonuses &&
    bonuses.map(
      (bonus: BonusType): ReactElement => (
        <Bonus
          key={bonus.title}
          bonus={bonus}
          activateBonusHandler={activateBonusHandler}
        />
      )
    );

  return <div>{bonusesJSX}</div>;
};

export default BonusList;
