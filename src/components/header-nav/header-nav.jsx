import React from "react";
import { Link } from "react-router-dom";

import { RoutePath } from "../../const";

const HeaderNav = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to={RoutePath.LEAGUES_LIST} className="nav-link">
          Leagues List
        </Link>
      </li>
      <li className="nav-item">
        <Link to={RoutePath.TEAMS_LIST} className="nav-link">
          Teams List
        </Link>
      </li>
      <li className="nav-item">
        <Link to={RoutePath.LEAGUES_CALENDAR} className="nav-link">
          League calendar
        </Link>
      </li>
      <li className="nav-item">
        <Link to={RoutePath.TEAMS_CALENDAR} className="nav-link">
          Team calendar
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNav;
