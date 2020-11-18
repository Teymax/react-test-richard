import React, { FC, ReactElement } from "react";

import { Layout } from "components";
import { Home } from "pages";

import "normalize.css";

const App: FC = (): ReactElement => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
