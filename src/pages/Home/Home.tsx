import React, { FC, ReactElement } from "react";

import { Filter, BonusList } from "components";

import "./Home.styles.scss";

const Home: FC = (): ReactElement => {
  return (
    <div className="home">
      <h2 className="home__title">Services</h2>
      <Filter />
      <BonusList />
    </div>
  );
};

export default Home;
