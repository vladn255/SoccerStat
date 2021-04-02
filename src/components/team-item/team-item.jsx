import React from "react";
import PropTypes from "prop-types";

const TeamItem = ({ teamName, activeTeamName }) => {
  return (
    <li
      className={`list-group-item ${
        teamName === activeTeamName ? `active` : ``
      }`}
    >
      {teamName}
    </li>
  );
};

TeamItem.propTypes = {
  teamName: PropTypes.string.isRequired,
  activeTeamName: PropTypes.string.isRequired,
};

export default TeamItem;
