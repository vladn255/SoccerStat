import React from "react";
import PropTypes from "prop-types";

const LeagueItem = ({ leagueName, activeLeagueName }) => {
  return (
    <li
      className={`list-group-item ${
        leagueName === activeLeagueName ? `active` : ``
      }`}
    >
      {leagueName}
    </li>
  );
};

LeagueItem.propTypes = {
  leagueName: PropTypes.string.isRequired,
  activeLeagueName: PropTypes.string.isRequired,
};

export default LeagueItem;
