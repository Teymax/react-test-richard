import React, { FC, ReactElement } from "react";
import { Sidebar, Topbar } from "components";

const Layout: FC = ({ children }): ReactElement => {
  return (
    <div>
      <Sidebar />
      <div>
        <Topbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
