import React, { FC, ReactElement } from "react";

import Bonus from "./Bonus/Bonus";
import "./BonusList.styles.scss";

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
  const filter = useSelector(selectors.bonuses.getFilter);

  const activateBonusHandler = React.useCallback(
    (title: string) => {
      dispatch(setBonusActivation({ title, isActivated: true }));
    },
    [dispatch]
  );

  let filteredBonuses = bonuses;
  if (filter) {
    filteredBonuses = bonuses.filter((bonus) =>
      bonus.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (filteredBonuses.length === 0)
    return <div className="bonus-list__no-items">No items to show</div>;

  const bonusesJSX = filteredBonuses.map(
    (bonus: BonusType): ReactElement => (
      <Bonus
        key={bonus.title}
        bonus={bonus}
        activateBonusHandler={activateBonusHandler}
      />
    )
  );

  return <div className="bonus-list">{bonusesJSX}</div>;
};

export default BonusList;
