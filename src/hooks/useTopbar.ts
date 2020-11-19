import React from "react";

import { fetchHeaderData } from "redux/bus/header/actions";
import { selectors } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const useTopbar = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.header.getLoading);
  const balance = useSelector(selectors.header.getBalance);
  const nextPayout = useSelector(selectors.header.getNextPayout);
  const currency = useSelector(selectors.header.getCurrency);
  const error = useSelector(selectors.header.getError);

  React.useEffect(() => {
    dispatch(fetchHeaderData());
  }, [dispatch]);

  const { t } = useTranslation();

  return {
    loading,
    error,
    balance,
    nextPayout,
    currency,
    t,
  };
};
