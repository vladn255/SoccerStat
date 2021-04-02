import React from "react";
import PropTypes from "prop-types";

const TeamMatch = ({ match }) => {
  const { id, awayTeam, homeTeam } = match;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{homeTeam.name}</td>
      <td>{awayTeam.name}</td>
    </tr>
  );
};

TeamMatch.propTypes = {
  match: PropTypes.object.isRequired,
};

export default TeamMatch;
