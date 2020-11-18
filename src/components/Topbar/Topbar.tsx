import React, { FC, ReactElement } from "react";

import { fetchHeaderData } from "redux/bus/header/actions";
import { selectors } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";

import { HeaderLoader } from "components";

import "./Topbar.styles.scss";

const Topbar: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.header.getLoading);
  const balance = useSelector(selectors.header.getBalance);
  const nextPayout = useSelector(selectors.header.getNextPayout);
  const currency = useSelector(selectors.header.getCurrency);
  React.useEffect(() => {
    dispatch(fetchHeaderData());
  }, [dispatch]);

  const topBarJSX = loading ? (
    <>
      <HeaderLoader />
      <HeaderLoader />
    </>
  ) : (
    <>
      <div className="topbar__element">
        <h3 className="topbar__element-title">Balance</h3>
        <p className="topbar__element-value">
          {balance} {currency === "usd" ? "$" : ""}
        </p>
      </div>

      <div className="topbar__element">
        <h3 className="topbar__element-title">Payout</h3>
        <p className="topbar__element-value">
          {nextPayout} {currency === "usd" ? "$" : ""}
        </p>
      </div>
    </>
  );

  return <div className="topbar">{topBarJSX}</div>;
};

export default Topbar;
