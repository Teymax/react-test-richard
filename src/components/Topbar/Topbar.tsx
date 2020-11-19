import React, { FC, ReactElement } from "react";

import { HeaderLoader } from "components";

import { useTopbar } from "hooks/useTopbar";

import "./Topbar.styles.scss";

const Topbar: FC = (): ReactElement => {
  const { loading, error, balance, nextPayout, currency, t } = useTopbar();

  if (error && !loading)
    return (
      <div className="topbar">
        <div className="topbar__error">{error}</div>
      </div>
    );

  const topBarJSX = loading ? (
    <>
      <HeaderLoader />
      <HeaderLoader />
    </>
  ) : (
    <>
      <div className="topbar__element">
        <h3 className="topbar__element-title">{t("Balance")}</h3>
        <p className="topbar__element-value">
          {balance && balance.toLocaleString()} {currency === "usd" ? "$" : ""}
        </p>
      </div>

      <div className="topbar__element">
        <h3 className="topbar__element-title">{t("Payout")}</h3>
        <p className="topbar__element-value">
          {nextPayout && nextPayout.toLocaleString()}{" "}
          {currency === "usd" ? "$" : ""}
        </p>
      </div>
    </>
  );

  return <div className="topbar">{topBarJSX}</div>;
};

export default Topbar;
