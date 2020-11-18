import React, { FC, ReactElement } from "react";

import { Bonus as BonusType } from "sharedTypes";

import "./Bonus.styles.scss";

type PropTypes = {
  bonus: BonusType;
  activateBonusHandler: (title: string) => void;
};

const Bonus: FC<PropTypes> = React.memo(
  ({ bonus, activateBonusHandler }): ReactElement => {
    const { title, description, link, promocode, activated } = bonus;
    console.log("bonus " + title + " rendered");

    return (
      <div className="bonus">
        <div className="bonus__info">
          <a href={link} className="bonus__title">
            {title}
          </a>
          <p className="bonus__description">{description}</p>
        </div>
        <div className="bonus__promocode">
          <span className="bonus__promocode-title">Promocode</span>
          <div className="bonus__promocode-actions">
            <input
              type="text"
              className="bonus__promocode-input"
              value={promocode}
              readOnly
            />
            <button
              className="bonus__promocode-button"
              onClick={() => activateBonusHandler(title)}
              disabled={activated}
            >
              {activated ? "Bonus activated" : "Activate bonus"}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default Bonus;
