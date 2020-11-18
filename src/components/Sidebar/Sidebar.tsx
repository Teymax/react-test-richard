import React, { FC, ReactElement } from "react";

import logo from "assets/images/logo.svg";
import "./Sidebar.styles.scss";

const Sidebar: FC = (): ReactElement => {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="sidebar__logo" />
    </div>
  );
};

export default Sidebar;
